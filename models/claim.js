'use strict';
module.exports = function (sequelize, DataTypes) {
    const Claim = sequelize.define('claim', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        claim_number: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        admissibility: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        closing_date: {
            type: DataTypes.DateTimeFormat,
            allowNull: false
        },
        pick_up_date: {
            type: DataTypes.DateTimeFormat,
            allowNull: false
        }
    }, {
        paranoid: true,
        underscored: true,
        freezeTableName: true
    });
    Claim.associate = _associate;
    return Claim;
};

//INTERNAL
function _associate(models) {

}