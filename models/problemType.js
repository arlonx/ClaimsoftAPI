'use strict';
module.exports = function (sequelize, DataTypes) {
    const ProblemType = sequelize.define('problem_type', {
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
    ProblemType.associate = _associate;
    return ProblemType;
};

//INTERNAL
function _associate(models) {
    models.ProblemType.hasMany(models.Claim , {

    });
}