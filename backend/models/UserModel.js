// Import required modules
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { Sequelize, DataTypes } from 'sequelize';

// Initialize Express app
const app = express();
app.use(cors({
    //...    ...//
}));
app.use(cookieParser());

// Load environment variables
dotenv.config();

// Set up Sequelize and define UserModel
const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    logging: false
});

const UserModel = sequelize.define('userlogin', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Seller'
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: true
    },
    gstNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    addhar: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    addharCardName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    shopName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    village: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    State: {
        type: DataTypes.STRING,
        allowNull: false
    },
    zipCode: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    profilePic: {
        type: DataTypes.STRING,
        allowNull: false
    },
    shopPic: {
        type: DataTypes.STRING,
        allowNull: false
    },
    DLPan: {
        type: DataTypes.STRING,
        allowNull: false
    },
    shopLicense: {
        type: DataTypes.STRING,
        allowNull: false
    },
    verified: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
});
// Sync models with database and start the server
// sequelize.sync({ alter: true })  This will create the table if it doesn't exist and if exists then delete the old one and then create
sequelize.sync({ force: true, logging: false }) // This will create the table if it doesn't exist and if exists then delete the old one and then create
    .then(() => {
        console.log('User Table for Robotic Arms synchronized');
    })
    .catch(error => {
        console.error('Error synchronizing tables:', error);
    });
export default UserModel