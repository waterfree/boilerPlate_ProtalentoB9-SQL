//EXPRESS
const express = require("express");  //requerimos el modulo de express
const cors = require("cors");
const app = express();               //Se ejecuta
const port = 3000;                   //Se defina el puesto de ejecucion

//MIDDELWARES
app.use(express.json());//acepta peticiones .json desde http
app.use(cors());//acrpta peticiones del front o postman

//vimculo modelos para usar rutas
const {User} = require("./db")

//Rutas
app.get('/users', async (req, res) => {
    const allusers = await User.findAll();//todos los usuarios
  res.status(200).json(allusers);
})

app.post('/users', async (req, res) => {
    const newUser = await User.create({firstName: "Walter", lastName: "Emerson"});//creo un usuario
  res.status(200).json("usuario creado con exito");
})

app.get('/', (req, res) => {
  res.send('Hello World!, ruta inicial de ejemplo, Bienvenido a la api de marketplace de protalento')
}) 

module.exports = {app, port}