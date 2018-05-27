'use strict';
module.exports = function (sequelize, DataTypes) {
    const Product = sequelize.define('product', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        reference: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false
        }
    }, {
        paranoid: true,
        underscored: true,
        freezeTableName: true
    });
    Product.associate = _associate;
    return Product;
};

//INTERNAL
function _associate(models) {
    models.ProductService.belongsToMany(models.Order, {
        as: 'orders',
        through: 'order_product',
        foreignKey: 'fk_product_id'
    });
}