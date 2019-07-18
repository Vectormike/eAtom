import Sequelize, { DataTypes } from 'sequelize';
import db from '../database/dbConfig';

const User = db.define('User', {
    lastName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

export default User;