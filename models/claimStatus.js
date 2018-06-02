'use strict';
module.exports = function (sequelize, DataTypes) {
    const ClaimStatus = sequelize.define('claim_status', {
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
    ClaimStatus.associate = _associate;
    return ClaimStatus;
};

//INTERNAL
function _associate(models) {
    models.ClaimStatus.hasMany(models.Claim , {

    });
}