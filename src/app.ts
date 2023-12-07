import express  from "express";
import { Request, Response } from "express";
import connection from "./db/config";
import { urlencoded, json } from "body-parser";
import dotenv from 'dotenv';
import cors from 'cors';
import paciente_routes from './routes/paciente.routes';
import doctor_routes from './routes/doctor.routes';
import cita_routes from './routes/cita.routes';
dotenv.config();

const app = express();
app.use(cors(),json(),urlencoded());
//Ruta de bienvenida
app.get('/', (req : Request, res: Response) => {
    res.send('<div style="text-align: center;"><h1>Bienvenid@s a la mejor eps</h1></div>');
})
app.use('/eps/pacientes',paciente_routes);
app.use('/eps/doctores',doctor_routes);
app.use('/eps/citas',cita_routes);
//Error por rutas inexistentes
app.use( (req : Request, res: Response) => {
    res.status(404).send('<div style="text-align: center;"><h1>404: Page Not Found</h1></div>');
})
app.use( (req : Request, res: Response) => {
    res.status(500).send('<div style="text-align: center;"><h1>500: Internal Server Error</h1></div>');
})

connection.sync().then(() => {
    console.log('Database online');
}).catch(err => {
    console.log('Error with connection to Database',err);
});

app.listen(process.env.PORT,() => {
    console.log(`Server listening on: http://${process.env.HOST}:${process.env.PORT}`)
});