'use strict';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        login: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        paranoid: true,
        underscored: true,
        freezeTableName: true
    });
    const hashPasswordHook = function(user, options) {
        let saltRounds = 10;
        return bcrypt.hash(user.password, saltRounds)
            .then(function (hash) {
                user.set('password', hash);
            }).catch( (err) => {
                console.log(err);
            });
    };
    User.beforeCreate(hashPasswordHook);

    User.comparePassword = function (authPassword, dbPassword) {
        return bcrypt.compare(authPassword, dbPassword)
            .then(function (res) {
                if(res === true){
                    return true;
                }else {
                    return false;
                }
            })
            .catch((err) => {
                console.error(err);
            });
    };
    User.getToken = function (user) {
        let expiration_time = parseInt(CONFIG.jwt_expiration);
        return jwt.sign({
                user_id: user.get('id'),
                name: user.get('name'),
                surname: user.get('surname')
            },
            CONFIG.jwt_encryption,
            {expiresIn: expiration_time});
    };

    User.associate = _associate;
    return User;
};

function _associate(models) {
    models.User.belongsToMany(models.TeamService, {
        as: 'teamServices',
        through: 'user_team_service',
        foreignKey: 'user_id'
    });
}