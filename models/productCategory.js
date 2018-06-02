'use strict';
module.exports = function (sequelize, DataTypes) {
    const ProductCategory = sequelize.define('product_category', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        wording: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        paranoid: true,
        underscored: true,
        freezeTableName: true
    });
    ProductCategory.associate = _associate;
    return ProductCategory;
};

//INTERNAL
function _associate(models) {
    models.ProductCategory.hasMany(models.Product , {

    });
}