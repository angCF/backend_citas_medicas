import { Sequelize } from 'sequelize-typescript';
import * as dotenv from 'dotenv';
import { Paciente } from '../models/paciente';
import { Cita } from '../models/cita';
import { Doctor } from '../models/doctor';
dotenv.config();
const connection = new Sequelize({
    dialect: 'mysql',
    host: process.env.HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DATABASE,
    logging: false,
    models: [Paciente, Cita, Doctor]
});

export default connection;