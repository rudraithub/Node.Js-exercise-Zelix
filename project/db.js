const Sequelize = require('sequelize');
const sequelize = new Sequelize('ssp', 'root', 'zelix', {
    host: 'localhost',
    dialect: 'mysql'
});
module.exports = sequelize;