import { DataTypes } from 'sequelize';
import db from '../database/dbConfig';

const User = db.define('users', {
  lastName: {
    type: DataTypes.STRING,
    required: true,
  },
  firstName: {
    type: DataTypes.STRING,
    required: true,
  },
  email: {
    type: DataTypes.STRING,
    required: true,
  },
  password: {
    type: DataTypes.STRING,
    required: true,
  },
});

export default User;
