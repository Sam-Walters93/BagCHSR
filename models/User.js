const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// const bcrypt = require('bcrypt');

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: { isEmail: true }
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [6] }
        }

        // gigs: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true,
        //     references: {
        //         model: 'gig',
        //         key: 'id'
        //     }
        // } 
    },
    {
        // hooks: ,
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;

// need to implement password hashing, and properly reference gig model. Could also add username property?