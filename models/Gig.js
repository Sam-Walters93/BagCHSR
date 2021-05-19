const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Gig extends Model {};

Gig.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        // user_id: {
        //     references: {
        //         model: 'user',
        //         key: 'id'
        //     }
        // },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        date: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: { isDate: true }
        },

        start_time: {
            type: DataTypes.TIME,
            allowNull: false,
        },

        end_time: {
            type: DataTypes.TIME,
            allowNull: false,
        },

        location_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        location_address: {
            type: DataTypes.STRING,
            allowNull: true
        },

        pay: {
            type: DataTypes.DECIMAL,
            allowNull: true
        },

        description: {
            type: DataTypes.STRING,
            allowNull: true
        },

        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'gig'
    }
);

module.exports = Gig;

// need to properly reference user model and ensure that these columns each have the correct options