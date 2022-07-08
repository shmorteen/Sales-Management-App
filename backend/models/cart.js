module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define('cart', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        items:{
            type: DataTypes.STRING(5000),
            get: function() {
                return JSON.parse(this.getDataValue('items'));
            },
            set: function(val) {
                return this.setDataValue('items', JSON.stringify(val));
            }
        },
        total: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: DataTypes.DATE
    });
    return Cart
}