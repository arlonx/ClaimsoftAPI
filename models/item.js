'use strict';
module.exports = function (sequelize, DataTypes) {
    const Item = sequelize.define('item', {
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
    Item.associate = _associate;
    return Item;
};

//INTERNAL
function _associate(models) {

}