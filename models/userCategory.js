'use strict';
module.exports = function (sequelize, DataTypes) {
    const UserCategory = sequelize.define('user_category', {
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
    UserCategory.associate = _associate;
    return UserCategory;
};

//INTERNAL
function _associate(models) {
    models.UserCategory.hasMany(models.User , {

    });
}