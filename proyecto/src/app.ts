import express  from "express";
import { Request, Response } from "express";
import connection from "./db/config";
import { urlencoded, json } from "body-parser";
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();
app.use(cors(),json(),urlencoded());
//Ruta de bienvenida
app.get('/', (req : Request, res: Response) => {
    res.send('Bienvenid@s');
})
//Error por rutas inexistentes
app.use( (req : Request, res: Response) => {
    res.status(404).send('404: Page Not Found');
})
app.use( (req : Request, res: Response) => {
    res.status(500).send('500: Internal Server Error');
})

connection.sync().then(() => {
    console.log('Database online');
}).catch(err => {
    console.log('Error with connection to Database',err);
});

app.listen(process.env.PORT,() => {
    console.log(`Server listening on: http://${process.env.HOST}:${process.env.PORT}`)
});