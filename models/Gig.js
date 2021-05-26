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

        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },

        gig_name: {
            type: DataTypes.STRING,
            allowNull: false,
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