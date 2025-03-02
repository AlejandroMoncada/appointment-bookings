import express  from 'express'
import bodyParser from 'body-parser'
import { CreateMedical } from './Medical/Medical.controller.js';

const app = express(); //hacemos que nuestra aplicacion sea una instacia de express
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

//manejo de ruta con contralodores
app.get('/',(req: any,res: any) => {
    res.send('Hola Mundo')
});

app.get('/medical',CreateMedical)

app.listen(3000, () => {
    console.log(`La aplicacion esta escuchando por el puerto ${3000}`);
});