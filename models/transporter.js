'use strict';
module.exports = function (sequelize, DataTypes) {
    const Transporter = sequelize.define('transporter', {
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
    Transporter.associate = _associate;
    return Transporter;
};

//INTERNAL
function _associate(models) {

}