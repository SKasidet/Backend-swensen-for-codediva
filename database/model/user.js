module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define("user", {
        username: { type: Sequelize.STRING(40), unique: 'column' ,primaryKey: true},
        email: { type: Sequelize.STRING(40), unique: 'column',  validate: { isEmail: true } },
        password: { type: Sequelize.STRING(60) },
        name: { type: Sequelize.STRING(100) },
        lastname: { type: Sequelize.STRING(100) },
        address: { type: Sequelize.STRING(255) },
       
    }, {
        tablename: "user"
    })
    return user;
} 
module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define("user", {
        username: { type: Sequelize.STRING(40), unique: 'column' ,primaryKey: true},
        email: { type: Sequelize.STRING(40), unique: 'column',  validate: { isEmail: true } },
        password: { type: Sequelize.STRING(60) },
        name: { type: Sequelize.STRING(100) },
        lastname: { type: Sequelize.STRING(100) },
        address: { type: Sequelize.STRING(255) },
       
    }, {
        tablename: "user"
    })
    return user;
} 
