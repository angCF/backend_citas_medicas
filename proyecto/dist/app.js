"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./db/config"));
const body_parser_1 = require("body-parser");
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)(), (0, body_parser_1.json)(), (0, body_parser_1.urlencoded)());
//Ruta de bienvenida
app.get('/', (req, res) => {
    res.send('Bienvenid@s');
});
//Error por rutas inexistentes
app.use((req, res) => {
    res.status(404).send('404: Page Not Found');
});
app.use((req, res) => {
    res.status(500).send('500: Internal Server Error');
});
config_1.default.sync().then(() => {
    console.log('Database online');
}).catch(err => {
    console.log('Error en la conexión', err);
});
app.listen(process.env.PORT, () => {
    console.log(`Server listening on: http://${process.env.HOST}/${process.env.PORT}`);
});
