module.exports = (sequelize, Sequelize) => {
    const category = sequelize.define("category", {
        id: { type: Sequelize.INTEGER,primaryKey: true, autoIncrement: true},
        name: { type: Sequelize.STRING(100), allowNull: false },
        description: { type: Sequelize.STRING(100) },
    }, {
        tablename: "category"
    })
    return category;
} 

