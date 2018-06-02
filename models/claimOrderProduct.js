'use strict';
module.exports = function (sequelize, DataTypes) {
    const ClaimOrderProduct = sequelize.define('claim_order_product', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        claim_quantity: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        problem_description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        solution_description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        paranoid: true,
        underscored: true,
        freezeTableName: true
    });
    ClaimOrderProduct.associate = _associate;
    return ClaimOrderProduct;
};

//INTERNAL
function _associate(models) {

}