const Sequelize = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  }


  
});

module.exports = User;