module.exports = (sequelize, Sequelize) => {
    const product = sequelize.define("product", {
        id: { type: Sequelize.INTEGER,primaryKey: true, autoIncrement: true},
        name: { type: Sequelize.STRING(100), allowNull: false },
        description: { type: Sequelize.STRING(100), allowNull: false },
        price: { type: Sequelize.FLOAT(), allowNull: false },
        image: { type: Sequelize.STRING(), allowNull: false },

    }, {
        tablename: "product"
    })
    return product;
} 

