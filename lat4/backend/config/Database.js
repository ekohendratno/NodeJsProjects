import {Sequelize} from "sequelize";

const db = new Sequelize('db_lat4','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;