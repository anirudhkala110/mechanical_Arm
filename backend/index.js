import express from "express";
import mysql from 'mysql2'
import cors from 'cors'
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import multer from "multer"
import path from "path"
import bodyParser from "body-parser"
import doenv from 'dotenv'
import UserModel from './models/UserModel.js';
import PdfModel from "./models/PdfUpload.js";
import SuggetionModel from './models/Suggetions.js';
import PostModel from "./models/PostModel.js";
import bcrypt from 'bcryptjs'
import tokenModel from "./models/token.js";
import sendEmail from "./Utils/sendEmail.js";
import crypto from 'crypto'
import otpgenerator from 'otp-generator'
import { send } from "process";
import nodemailer from 'nodemailer'
import fs from 'fs';
import CourseModel from "./models/RegisteredModel.js";


const app = express()
app.use(cors({
    origin: ["http://localhost:3032" ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

doenv.config()
app.use(cookieParser())
app.use(express.json())
app.use(express.static('Public')) //This is for file access
app.use(bodyParser.json({ extends: true }))

const db = mysql.createConnection({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE,
    password: process.env.DATABASE_PASS,
})

app.use('./Images', express.static('Images'))
app.use('./pdf', express.static('pdf'))
const port = process.env.PORT || 5020

/* Registration API  */
app.get('/', (req, res) => {
    res.json("Connected to Basic2ai.info Backend. . . ")
})

const getAdmin = () => {
    app.get('/getAdmin', async (req, res) => {
        const chkEmail = "SELECT * from userlogins WHERE role=?"
        db.query(chkEmail, ['admin'], async (err, chkAdmin) => {
            if (err) {
                console.log(err)
            }
            else {
                if (chkAdmin.length >= 2) {
                    console.log(chkAdmin.length)
                    res.json(chkAdmin.length)
                    return false
                }
                else {
                    res.json(chkAdmin.length)
                    return true
                }
            }

        })
    })
}

app.get('/getAdmin', async (req, res) => {
    const chkEmail = "SELECT * from userlogins WHERE role=?"
    db.query(chkEmail, ['admin'], async (err, chkAdmin) => {
        if (err) {
            console.log(err)
        }
        else {
            if (chkAdmin.length >= 2) {
                console.log(chkAdmin.length)
                return res.json({ validation: false })

            }
            else {
                console.log(chkAdmin.length)
                return res.json({ validation: true })
            }
        }

    })
})
/* Verify Email */
const verifyOTP = (req, res, next) => {
    const token = req.cookies.otp
    console.log(token)
    if (!token) {
        return res.json({ msg: "Token is not available", msg_type: "error" })
    } else {
        console.log(token)
        req.otp = token
        next()
    }
}
const verifiedEmail = (req, res, next) => {
    const valid = req.cookie
    // const email = req.cookie.email
    console.log(valid)
    // if (!valid) {
    //     return res.json({ msg: 'Not Authorised...', msg_type: "error" })
    // }
    // else {
    //     res.clearCookie('valid')
    //     req.email = email
    //     req.valid = valid
    //     next()
    // }
}
app.post('/verifyEmail', async (req, res) => {
    const email = req.body.email;
    console.log(email);
    try {
        // Check if the user already exists in the database
        const user = await UserModel.findOne({ where: { email: email } });
        if (user) {
            // If user exists, return a message indicating that the user already exists
            return res.json({ msg: `User with email ${email} already exists. Please log in.`, msg_type: "error" });
        }

        // If user doesn't exist, generate OTP and send email
        const otp = otpgenerator.generate(6, { digits: true, lowerCaseAlphabets: true, upperCaseAlphabets: true, specialChars: false });
        const url = `${process.env.BASE_URL}verifyOTP/${email}/verify/${otp}`;
        await sendEmail(email, `OTP Verification, \n Your Email verification OTP is ${otp}`, url);
        res.cookie('otp', otp);
        return res.json({ msg: `OTP Sent to ${email}`, msg_type: "good", otpSent: true });
    }
    catch (err) {
        console.error("Error in sending OTP: ", err);
        return res.status(500).json({ msg: "Internal Server Error", msg_type: "error" });
    }
});



app.post('/verifyOTP', verifyOTP, async (req, res) => {
    const { email, OTP } = req.body
    const otp = req.otp
    console.log(OTP, "OTP : ", otp)
    const valid = true
    if (OTP === otp) {
        res.clearCookie('otp')
        res.cookie('valid', valid)
        res.cookie('email', email)
        return res.json({ msg: 'Account Verified', msg_type: 'good', forwarding: true })
    }
    else {
        return res.json({ msg: 'Incorrect OTP. Please enter correct OTP.', msg_type: "error" })
    }

})

/* Verify Email */
app.post('/register/email', async (req, res) => {
    const username = req.body.username
    const phone = req.body.phone
    const role = req.body.role
    let courseType = req.body.courseType
    let language = req.body.language
    const email = req.body.email
    console.log(email)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;
    const password = username + phone
    console.log(password)
    if (!language) {
        language = 'N/A'
    }
    if (!courseType) {
        courseType = 'N/A'
    }
    if (role == 'admin') {
        const check = getAdmin()
        if (check) {
            return res.json({ msg: "Not Authorised...", msg_type: "Error", grant: false })
        }
    }
    if (phone.length != 10 && phone.length != 12) {
        return res.json({ msg: "Phone number should be of 10 digit or 12 digit", msg_type: "error" })
    }
    else {
        console.log("Checking Email")
        const chkEmail = "SELECT * from userlogins WHERE email=? OR phone=?"
        db.query(chkEmail, [email, phone], async (err, chkEmaildata) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log(chkEmaildata.length)
                if (chkEmaildata.length > 0) {
                    console.log("Email Already Exists", chkEmaildata)
                    if (parseInt(phone) === parseInt(chkEmaildata[0].phone) && email === chkEmaildata[0].email) {
                        return res.json({ msg: "Email and Phone Number Already in use . . Try another one", msg_type: "error" })
                    }
                    else if (email === chkEmaildata[0].email) {
                        return res.json({ msg: "Email already register. . Try Another One", msg_type: "error" })
                    }
                    else if (parseInt(phone) === chkEmaildata[0].phone) {
                        return res.json({ msg: "Phone already register. . Try Another One", msg_type: "error" })
                    }
                }
                else {
                    console.log("Similar Email Found 0")
                    let hashPassword = await bcrypt.hash(password, 10)
                    console.log("Hased Password : ", hashPassword)
                    await sendEmail(email, `OTP Verification Completed, \n Your Email verification password is given below. Save it for future logins.`, `\n\n${password} \n`);
                    const registerUser = 'INSERT INTO `userlogins` (username,role, email, password, phone,courseType,language) VALUES (?,?,?,?,?,?,?) '
                    const result = await db.promise().query(registerUser, [username, role, email, hashPassword, phone, courseType, language]);
                    if (!result) {
                        console.log("not entered")
                    } else {
                        return res.json({ msg: "Registration Successful . . .\n Password is sent to your registered email ", msg_type: "good" })
                    }
                }
            }
        })
    }
})

/* Registration API  Completed*/

/*Reset Password*/

app.post('/forgot_password', (req, res) => {
    const email = req.body.email;
    const phone = req.body.phone;
    const role = req.body.role;
    console.log("\nEmail->", email, "\nPhone->", phone, "\nRole", role)
    if (email === '' || email === null)
        return res.json({ msg: "Please enter the valid Email. . . ", msg_type: "error" })
    else if (phone === '' || phone === null)
        return res.json({ msg: "Please enter valid Phone Number. . . ", msg_type: "error" })
    else if (parseInt(phone.length) !== 10 && parseInt(phone.length) !== 12)
        return res.json({ msg: "Phone Number should be of 10 digit without country code or 12 digit with country code. . . ", msg_type: "error" })
    else {
        const sqlLoginchk = "SELECT * FROM userlogins WHERE email=?"
        db.query(sqlLoginchk, [email], async (err, loginchkdata) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log(loginchkdata)
                if (loginchkdata.length > 0) {
                    if (parseInt(phone) === parseInt(loginchkdata[0].phone)) {
                        const Email = loginchkdata[0].email;
                        const username = loginchkdata[0].username
                        const Role = loginchkdata[0].role
                        const id = loginchkdata[0].id
                        console.log(Email, "->", Role, "->", username)
                        const forgottoken = jwt.sign({ Email, username, Role, id }, process.env.JWT_SECRET_KEY, {
                            expiresIn: '5m',           // Expiration time
                            httpOnly: true,            // HTTP Only flag
                            secure: true               // Secure flag
                        })
                        res.cookie('forgottoken', forgottoken)
                        var transporter = nodemailer.createTransport({
                            service: 'gmail',
                            auth: {
                                user: 'basic2aijsak@gmail.com',
                                pass: 'pjcv xqcg aoed tmtr'
                            }
                        });

                        var mailOptions = {
                            from: 'basic2aijsak@gmail.com',
                            to: `${Email}`,
                            subject: 'Sending Email using Node.js. Now Reset Your Password',
                            text: `Your Token is : ${forgottoken} \n\n\n Please follow the link to reset the password: \n http://localhost:3031/reset_password/${id}/${role}/${forgottoken}`
                        };

                        transporter.sendMail(mailOptions, function (error, info) {
                            if (error) {
                                console.log(error);
                            } else {
                                console.log('Email sent: ' + info.response);
                                return res.send({ status: "Success" });
                            }
                        });
                        return res.json({ msg: "Login to your Gmail and Reset Your Password Using the Provided Link. . .", msg_type: "good" })
                    }
                    else {
                        return res.json({ msg: "Phone Number Doesn,t Match \nEnter Again . . . ", msg_type: "error" })
                    }
                }
                else {
                    return res.json({ msg: "User Doesn't Exists! Please go to the Sign Up page and Register first...", msg_type: "error" })
                }
            }
        })
    }

})

app.post('/reset_password/:id/:forgottoken', (req, res) => {
    console.log("Backend Working Right Now")
    const { id, forgottoken } = req.params
    const password = req.body.password
    const cpassword = req.body.cpassword
    console.log("\nID -> ", id, "\nPassword - ", password)
    jwt.verify(forgottoken, process.env.JWT_SECRET_KEY, async (err, decoded) => {
        if (err) {
            console.log(err)
            return res.json({ msg: "Session Expires ! ! !    - - - Please Login Again- - -", msg_type: "error" })
        }
        else {
            if (password != cpassword) {
                console.log("Password Didn't match . . .")
                return res.json({ msg: "Password Didn't match    - - - Please Try Again Again- - -", msg_type: "error" })
            }
            else {
                let hashpassword = await bcrypt.hash(password, 8)
                var sql = `UPDATE userlogins SET password = ? WHERE id = ?`;
                db.query(sql, [hashpassword, id], (err, response) => {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        console.log("Password Change")
                        return res.json({ msg: "Password Changed Successfully . . . \n   - - - Redirecting to Login Page- - -", msg_type: "good" })
                    }
                })
            }
        }
    })
})

/*Reset Password*/

/* Login API */

app.post('/login', (req, res) => {
    const email = req.body.email
    const password = req.body.password
    console.log("Request Made...")
    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,6}$/;

    const chkEmail = "SELECT * FROM userlogins WHERE email=?"
    db.query(chkEmail, [email], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            if (result.length <= 0) {
                return res.json({ msg: "Email Doesn't Exists. . Please Register First .", msg_type: "error" })
            }
            else {
                bcrypt.compare(password, result[0].password, (err, findout) => {
                    if (!findout) {
                        return res.json({ msg: "Password Didn't Match. .  Please try again !", msg_type: "error" })
                    }
                    else {
                        const token = jwt.sign({ email: result[0].email, username: result[0].username, id: result[0].id, role: result[0].role, verified: result[0].verified }, process.env.JWT_SECRET_KEY, {
                            expiresIn: '5m',           // Expiration time
                            httpOnly: true,            // HTTP Only flag
                            secure: true               // Secure flag
                        })
                        res.cookie('token', token)
                        return res.json({ msg: "Login Successfully . . .", msg_type: "good" })
                    }
                })
            }
        }
    })
})

/* Login API Ends*/

/* User Logged In or Not */

const verifyUser = (req, res, next) => {
    const token = req.cookies.token
    if (!token) {
        return res.json({ msg: "Token is not available", msg_type: "error" })
    } else {
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.json("Token is wrong")
            } else {
                req.email = decoded.email;
                req.username = decoded.username;
                req.userId = decoded.id;
                req.postedby = decoded.username;
                req.role = decoded.role;
                req.verified = decoded.verified
                next()
            }
        })
    }
}
const verifyForgotLink = (req, res, next) => {
    const forgottokenchk = req.cookies.forgottoken
    if (!forgottokenchk) {
        return res.json({ msg: "Token is not available", msg_type: "error" })
    } else {
        jwt.verify(forgottokenchk, process.env.JWT_SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.json("Token is wrong")
            } else {
                req.email = decoded.email;
                req.username = decoded.username;
                req.userId = decoded.id;
                req.role = decoded.role;
                req.token = forgottokenchk
                next()
            }
        })
    }
}

app.get('/loggin', verifyUser, (req, res) => {
    return res.json({ email: req.email, username: req.username, role: req.role, verified: req.verified, login: true })
})
app.get('/forgotlinkChk/:forgottoken', verifyForgotLink, (req, res) => {
    const { forgottoken } = req.params; // Accessing token from req.body
    if (forgottoken === req.token) { // Using strict equality operator (===)
        return res.json({ email: req.email, id: req.userId, username: req.username, role: req.role, validated: true })
    } else {
        return res.json({ validated: false })
    }
})
app.get('/get_data_to_admin/:getData', verifyUser, async (req, res) => {
    const getData = req.params.getData; // Accessing data from query string
    const role = req.role;
    var title = ''
    if (role === 'admin') {
        try {
            var findOf
            var verifiedChk
            var data
            let order = [['createdAt', 'DESC']];
            if (getData === 'admin') {
                findOf = getData
                title = 'Admins Details'
                data = await UserModel.findAll({ where: { role: findOf }, order: order });
            }
            else if (getData === "user") {
                findOf = getData
                title = 'Users Details'
                data = await UserModel.findAll({ where: { role: findOf }, order: order });
            }
            else if (getData === "regEnrolled") {
                findOf = 'user'
                verifiedChk = 1
                title = 'Users with Enrollment Details'
                data = await UserModel.findAll({ where: { role: findOf, verified: verifiedChk }, order: order });
            }
            else if (getData === 'registered') {
                findOf = 'user'
                verifiedChk = 0
                title = 'Users not Enrollment Details'
                data = await UserModel.findAll({ where: { role: findOf, verified: verifiedChk }, order: order });
            }
            // Await the result
            if (!data || data.length === 0) { // Check if data is empty
                return res.json({ msg: 'No Data Found', msg_type: 'error' });
            } else {
                return res.json({ msg: `Data Regarding ${title}`, data: data });
            }
        } catch (error) {
            console.log(error);
            return res.json({ msg: 'Error fetching data', msg_type: 'error' });
        }
    } else {
        return res.json({ msg: 'You are not admin. You are trying to access protected data. Your account could be deleted if you attempt to fetch the data again.', msg_type: 'error' });
    }
});


/* User Logged In or Not */

/* Logout */

app.get('/logout', (req, res) => {
    res.clearCookie('token')
    return res.json({ msg: "Logout Successful . . .", msg_type: "good" })
})

/* Logout Ends */

/* Uploading the post with images */
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Public/Images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
})
//Uploading PDF
const storage2 = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Public/pdf')
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now()
        cb(null, uniqueSuffix + file.originalname);
    }
})
// const storage2 = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'Public/pdf')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
//     }
// })

// const upload2 = multer({dest:'Public/pdf'})
const upload2 = multer({
    storage: storage2
})

const upload = multer({
    storage: storage
})
//Uploading PDFs
app.post('/upload_pdf', upload2.single('file'), async (req, res) => {
    const title = req.body.topic
    const filename = req.file.filename
    const moduleNo = req.body.module
    try {
        await PdfModel.create({ title: title, pdfName: filename, moduleNo: moduleNo })
        return res.json({ msg: "Upload Successfully", msg_type: 'good' })
    }
    catch (err) {
        return res.json({ msg: 'Uploading Error from Backend', msg_type: 'error' })
    }
})

//Getting the PDF files in frontend
app.get('/get_pdf', async (req, res) => {
    try {
        PdfModel.findAll({}).then((data) => {
            res.json({ status: "OK", data: data })
        })
    }
    catch (err) {
        res.json("Require file does not Exists")
    }
})
app.get('/get_pdf/:id', async (req, res) => {
    try {
        PdfModel.findOne({ where: { moduleNo: req.params.id } }).then((data) => {
            return res.json({ status: "OK", data: data })
        })
    }
    catch (err) {
        return res.json({ msg: "Require file does not Exists", msg_type: "error" })
    }
})
app.post('/delete_pdf/:id', async (req, res) => {
    try {
        // Find the PDF record by ID
        const pdfRecord = await PdfModel.findOne({ where: { moduleNo: req.params.id } });

        if (!pdfRecord) {
            return res.status(404).json({ msg: "PDF file not found", msg_type: "error" });
        }

        // Delete the PDF record from the database
        await pdfRecord.destroy();

        // Delete the corresponding file from the folder
        const filePath = `./Public/pdf/${pdfRecord.pdfName}`; // Update the file path
        console.log(filePath)
        fs.unlink(filePath, (err) => {
            if (err) {
                console.error('Error deleting file:', err);
                return res.status(500).json({ msg: "Failed to delete PDF file", msg_type: "error" });
            }
            console.log('File deleted successfully');
            return res.json({ msg: "PDF file deleted successfully", msg_type: "good" });
        });
    } catch (err) {
        console.error('Error deleting PDF file:', err);
        return res.status(500).json({ msg: "Internal server error", msg_type: "error" });
    }
});

// Saving Customer Data
app.post('/api/saveData', async (req, res) => {
    const { name, email, query, mobile, date, time, id } = req.body;

    try {
        await Contact.create({
            name: name,
            mobile: mobile,
            email: email,
            query: query,
            date: date,
            time: time,
        });

        res.json({ success: true });
    } catch (error) {
        console.error('Error saving form data to MySQL:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

// Delete a resource by ID
app.delete('/api/resources/:selectedResourceId', verifyUser, async (req, res) => {
    const selectedResourceId = req.params.selectedResourceId;
    try {
        const deletedUpdate = await Updates.destroy({ where: { id: selectedResourceId } });

        if (!deletedUpdate) {
            return res.status(404).json({ error: 'Update not found' });
        }

        res.json({ msg: 'Post deleted successfully', msg_type: 'good' });
    } catch (error) {
        console.error('Error deleting update:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// app.post('/create', verifyUser, upload.single('file'), (req, res) => {
app.post('/create-post', verifyUser, async (req, res) => {
    const { topic, content } = req.body;
    try {

        const desc = JSON.stringify(content);
        await PostModel.create({ title: topic, description: desc })
            .then(result => {
                return res.json({ msg: "Uploaded", msg_type: "good" })
            })
            .catch(err => {
                console.log(err)
                return res.json({ msg: "Upload Failed", msg_type: "error" })
            })
    }
    catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

})
/* Uploading the post with images Ends */

app.delete('/api/gallary/:selectedResourceId', verifyUser, async (req, res) => {
    const selectedResourceId = req.params.selectedResourceId;
    try {
        // Find the update to get the file name
        const updateToDelete = await Gallary.findOne({ where: { id: selectedResourceId } });
        if (!updateToDelete) {
            return res.status(404).json({ error: 'Update not found' });
        }

        // Construct the file path based on your file naming convention
        const filePath = path.join(__dirname, 'Public/File', updateToDelete.file);

        // Use fs.unlink to delete the file
        await fs.unlink(filePath);

        // Now, delete the database record
        const deletedUpdate = await Gallary.destroy({ where: { id: selectedResourceId } });

        if (!deletedUpdate) {
            return res.status(404).json({ error: 'Update not found in database' });
        }

        res.json({ msg: 'Update and file deleted successfully', msg_type: 'good' });
    } catch (error) {
        console.error('Error deleting update:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

/* Showing the data on home page */

app.get('/get-all-posts', (req, res) => {
    PostModel.findAll({
        order: [['updatedAt', 'DESC']] // Order by updatedAt in descending order
    })
        .then(posts => { return res.json(posts) })
        .catch(err => console.log(err))
})

/* Showing the data on home page Ends */


/* Showing Post in the seperate page */

app.get('/read-post/:id/:postedby', (req, res) => {
    const id = req.params.id
    console.log(id)
    // PostModel.findById({ id: id }) findById is not for sequilize
    PostModel.findByPk(id)
        .then(result => { return res.json(result) })
        .catch(err => console.log(err))
})

/* Showing Post in the seperate page Ends */


/* Edit the post Data */
app.put('/edit-post/:id', (req, res) => {
    const id = req.params.id
    PostModel.update({ title: req.body.title, description: req.body.description }, { where: { id: id } })
        .then(result => {
            return res.json({ msg: "Update Successful . . .", msg_type: "good" })
        })
        .catch(err => console.log(err))
})
/* Edit the post data Ends  */


/* Deleting the post */
app.delete('/delete-post/:id', (req, res) => {
    PostModel.destroy({ where: { id: req.params.id } })
        .then(result => {
            return res.json({ msg: "Post Deleted Successfuly. . . ", msg_type: "delete" })
        })
        .catch(err => console.log(err))
})
/* Deleting post ends */

/* Register Courses by Admin*/
app.post('/update_register_courses/admin', verifyUser, async (req, res) => {
    const email = req.body.email;
    const role = req.body.role;
    const verified = 1
    const course = req.body.course;
    const type = req.body.type
    // console.log(email, role, verified, course, type)
    let basic = 0;
    let advanced = 0;
    let expert = 0;
    try {
        let data = await CourseModel.findOne({ where: { email: email } });
        if (!data) {
            if (type == 3 && course == 1) {
                expert = 0;
            } else if (type == 2 && course == 1) {
                advanced = 0
            } else if (type == 1 && course == 1) {
                basic = 0
            }
            else if (type == 3 && course == 0) {
                expert = 1
            } else if (type == 2 && course == 0) {
                advanced = 1
            } else if (type == 1 && course == 0) {
                basic = 1
            }
            // console.log(expert, advanced, basic)
            await CourseModel.create({ role: role, email: email, verified: verified, basic: basic, advanced: advanced, expert: expert });
            await UserModel.update({ basic: basic, advanced: advanced, expert: expert }, { where: { email: email } })
            console.log("Course data created.");
            return res.json({ msg: "Course data created successfully.", msg_type: "success" });
        } else {
            basic = data.basic
            advanced = data.advanced
            expert = data.expert
            if (type == 1 && basic == 0) {
                basic = 1
            }
            else if (type == 1 && basic == 1) {
                basic = 0
            }
            else if (type == 2 && advanced == 0) {
                advanced = 1
            }
            else if (type == 2 && advanced == 1) {
                advanced = 0
            }
            else if (type == 3 && expert == 0) {
                expert = 1
            }
            else if (type == 3 && expert == 1) {
                expert = 0
            }
            // console.log(expert, advanced, basic)
            await CourseModel.update({ basic: basic, advanced: advanced, expert: expert }, { where: { email: email } });
            await UserModel.update({ basic: basic, advanced: advanced, expert: expert }, { where: { email: email } })
            return res.json({ msg: "Course data updated successfully.", msg_type: "success" });
        }
    } catch (error) {
        console.error("Error in Saving Data from Backend: ", error);
        return res.status(500).json({ msg: "Error in Saving Data from Backend.", msg_type: "error" });
    }
});
/* Register Courses */
app.post('/update_register_courses', verifyUser, async (req, res) => {
    const email = req.email;
    const role = req.role;
    const verified = req.verified;
    const course = req.body.course;
    let basic = 0;
    let advanced = 0;
    let expert = 0;
    try {
        let data = await CourseModel.findOne({ where: { email: email } });
        if (!data) {
            if (course == 4) {
                basic = 1;
                advanced = 1;
                expert = 1;
            } else if (course == 3) {
                basic = 0;
                advanced = 0;
                expert = 1;
            } else if (course == 2) {
                basic = 0;
                advanced = 1;
                expert = 0;
            } else if (course == 1) {
                basic = 1;
                advanced = 0;
                expert = 0;
            }
            await CourseModel.create({ role: role, email: email, verified: verified, basic: basic, advanced: advanced, expert: expert });
            console.log("Course data created.");
            return res.json({ msg: "Course data created successfully.", msg_type: "success" });
        } else {
            basic = data.basic
            advanced = data.advanced
            expert = data.expert
            if (course == 1 && basic == 0) {
                basic = 1
            }
            if (course == 2 && advanced == 0) {
                advanced = 1
            }
            if (course == 3 && expert == 0) {
                expert = 1
            }
            if (course == 4) {
                basic = 1;
                advanced = 1;
                expert = 1;
            }
            data = await CourseModel.update({ basic: basic, advanced: advanced, expert: expert }, { where: { email: email } });
            return res.json({ msg: "Course data updated successfully.", msg_type: "success" });
        }
    } catch (error) {
        console.error("Error in Saving Data from Backend: ", error);
        return res.status(500).json({ msg: "Error in Saving Data from Backend.", msg_type: "error" });
    }
});
/* Get Register Courses for Admin */
app.get('/registration_data/admin', verifyUser, async (req, res) => {
    try {
        const data = await CourseModel.findAll({ where: { role: 'user' } })
        if (!data) {
            return res.json({ msg: 'Data not available', msg_type: 'error' })
        } else {
            return res.json({ msg: 'Data Found...', msg_type: 'good', data: data })
        }
    }
    catch (error) {
        console.log(error)
    }
})
/* Get Register Courses */
app.get('/registration_data', verifyUser, async (req, res) => {
    const email = req.email
    try {
        const data = await CourseModel.findOne({ where: { email: email } })
        if (!data) {
            return res.json({ msg: 'Data not available', msg_type: 'error' })
        } else {
            return res.json({ msg: 'Data Found...', msg_type: 'good', basic: data.basic, advanced: data.advanced, expert: data.expert, valid: data.verified })
        }
    }
    catch (error) {
        console.log(error)
    }
})
/* Update */
app.post('/setVerified', verifyUser, async (req, res) => {
    const verified = req.body.verified;
    const email = req.body.email;
    try {
        const data = await UserModel.findOne({ where: { email: email } });
        if (!data) {
            console.log("Data Not Found");
        } else {
            if (verified) {
                const result = await UserModel.update({ verified: verified }, { where: { email: email } });
                const result2 = await CourseModel.create({ verified: verified, basic: 0, advanced: 0, expert: 0, role: 'user', email: email })
                // console.log(result);
                return res.status(200).json({ msg: "User verification status updated successfully.", msg_type: "success" });
            }
            else {
                const result = await UserModel.update({ verified: verified, basic: 0, advanced: 0, expert: 0, }, { where: { email: email } });
                const result2 = await CourseModel.destroy({ where: { email: email } })
                // console.log(result);
                return res.status(200).json({ msg: "User verification status updated successfully.", msg_type: "success" });
            }
        }
    } catch (err) {
        console.error("Error in updating user verification status:", err);
        return res.status(500).json({ msg: "Error in updating user verification status.", msg_type: "error" });
    }
});

/* Running the backend  */
app.listen(port, () => {
    console.log("Running Backend Side at ", `${port}`)
})
/* Running the backend  Ends */