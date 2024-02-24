import { Sequelize } from 'sequelize';
const db = new Sequelize('db_react_multi_role', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

export default db;
