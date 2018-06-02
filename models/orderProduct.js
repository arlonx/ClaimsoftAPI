'use strict';
module.exports = function (sequelize, DataTypes) {
    const OrderProduct = sequelize.define('order_product', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contact: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        paranoid: true,
        underscored: true,
        freezeTableName: true
    });
    OrderProduct.associate = _associate;
    return OrderProduct;
};

//INTERNAL
function _associate(models) {

}