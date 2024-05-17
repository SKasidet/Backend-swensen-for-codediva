const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.ROOT,
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        dialect: process.env.SERVER,
        logging: false
    }
)

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.user = require('./model/user')(sequelize, Sequelize)


module.exports = db;