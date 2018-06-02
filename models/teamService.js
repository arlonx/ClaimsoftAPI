'use strict';
module.exports = function (sequelize, DataTypes) {
    const TeamService = sequelize.define('team_service', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        start_date: {
            type: DataTypes.DateTimeFormat,
            allowNull: false
        },
        end_date: {
            type: DataTypes.DateTimeFormat,
            allowNull: false
        }
    }, {
        paranoid: true,
        underscored: true,
        freezeTableName: true
    });
    TeamService.associate = _associate;
    return TeamService;
};

//INTERNAL
function _associate(models) {

}