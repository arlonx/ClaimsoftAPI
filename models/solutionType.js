'use strict';
module.exports = function (sequelize, DataTypes) {
    const SolutionType = sequelize.define('solution_type', {
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
    SolutionType.associate = _associate;
    return SolutionType;
};

//INTERNAL
function _associate(models) {
    models.SolutionType.hasMany(models.Claim , {

    });
}