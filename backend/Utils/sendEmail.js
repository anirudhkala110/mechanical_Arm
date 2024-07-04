import nodemailer from 'nodemailer';

const sendEmail = async (email, subject, text) => {
    return new Promise((resolve, reject) => {
        console.log('Trying to sending Gmail. . . ')
        try {
            var transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true, // true for 465, false for other ports
                auth: {
                    user: 'basic2aijsak@gmail.com',
                    pass: 'zume cjws nqrw sqhp'
                }
            });
            console.log("Entered in the sending Zone. . .")
            var mailOptions = {
                from: 'basic2aijsak@gmail.com',
                to: email,
                subject: 'OTP verification for activate account',
                text: '\n' + subject + '\n' + text,
                // html: text
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log("Error occured is: ", error);
                    reject(error);
                } else {
                    console.log('Email sent: ' + info.response);
                    resolve(true);
                }
            });
        }
        catch (error) {
            console.log("Email not sent");
            console.log(error);
            reject(error);
        }
    });
}

export default sendEmail;
