const Sequelize = require("sequelize");
const env = require("dotenv");
const conf = require("./conf");

env.config();
const sequelize = new Sequelize(conf.database, conf.username, conf.password, {
    host: conf.host,
    dialect: 'mysql',
    operatorsAliases: true
});

module.exports = sequelize;
