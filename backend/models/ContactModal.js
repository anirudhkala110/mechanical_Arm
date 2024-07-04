const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('../Sequelize'); // Assuming you have a Sequelize instance

const Contact = sequelize.define('Contact', {
  id: {
    type: DataTypes.UUID,
    defaultValue: () => uuidv4(),
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobile: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gstNumber: {
    type: DataTypes.INTEGER,
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
  accType: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0
  },
  verified: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  date: {
    type: DataTypes.STRING,
    defaultValue: () => new Date().toLocaleDateString(),
  },
  time: {
    type: DataTypes.STRING,
    defaultValue: () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  },
  query: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'sellers', // Set the table name explicitly
});

// Synchronize the model with the database (create the table)
Contact.sync({ force: true, logging: false })
  .then(() => {
    console.log('Seller for Robotic Arms Table created');
  })
  .catch((err) => {
    console.error('Error creating table:', err);
  });

module.exports = Contact;
