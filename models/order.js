'use strict';
module.exports = function (sequelize, DataTypes) {
    const Product = sequelize.define('product', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        date: {
            type: DataTypes.DateTimeFormat,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        expedition_date: {
            type: DataTypes.DateTimeFormat,
            allowNull: false
        },
        tracking: {
            type: DataTypes.STRING,
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
    models.Product.belongsToMany(models.Product, {
        as: 'products',
        through: 'order_product',
        foreignKey: 'order_id'
    });
}