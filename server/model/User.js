import Sequelize from 'sequelize';
import db from '../database/dbConfig';

const User = db.define('user', {
    l_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    f_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

export default User;