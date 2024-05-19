module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define("user", {
        id: { type: Sequelize.INTEGER,primaryKey: true, autoIncrement: true},
        email: { type: Sequelize.STRING(100),  validate: { isEmail: true } },
        password: { type: Sequelize.STRING(60) },
        name: { type: Sequelize.STRING(100), allowNull: false},
        lastname: { type: Sequelize.STRING(100), allowNull: false },
        tel: { type: Sequelize.INTEGER(10), allowNull: false },
        gender: { type: Sequelize.STRING(10), allowNull: false},
        birthday: { type: Sequelize.DATE,  allowNull: false },
        acceptrule: { type: Sequelize.STRING(10) },
        acceptnews: { type: Sequelize.STRING(10) },
    }, {
        tablename: "user"
    })
    return user;
} 

