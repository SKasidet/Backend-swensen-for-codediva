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
db.category = require('./model/category')(sequelize, Sequelize)
db.product = require('./model/product')(sequelize, Sequelize)

db.product.belongsTo(db.category);
db.category.hasMany(db.product);

module.exports = db;