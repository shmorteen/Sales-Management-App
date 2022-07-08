module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define('items', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        itemname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantityIn: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantityOut: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: DataTypes.DATE
    });
    return Item
}
