const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express()


app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
const corsOptions = {
    origin: 'http://127.0.0.1:5501',
    credentials: true,
    optionSuccessStatus: 200,
    preflightContinue: true,
    methods: ['GET', 'POST']
}
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

const port = 3000
app.get('/', (req, res) => {
    res.send('Servidor ok')
})

const Conductor = require('./lib/Conductor')
const conductorModel = require('./models/conductor_model')
const Vehiculo = require('./lib/vehiculo')
const vehiculoModel = require('./models/vehiculo_model');

app.post('/nuevo_conductor', (req, res) => {
    info = req.body   
    nuevoConductor = new Conductor().constructorInstancia(info.nombre, info.apellido, info.numeroIdenti, info.fechaNacimiento, info.genero, info.correo, info.telefono, info.licencia, info.eps, info.arl)
    conductorModel.insertarConductor(nuevoConductor).then(()=>{
        res.send("El conductor fue creado de manera exitosa")
    }).catch((err)=>{
        res.status(400)
        res.send("No fue posible crear el conductor: " + err)
    })      
})

app.get('/consultar_conductores', (req, res) => {
    conductorModel.listarConductor().then((listado)=>{
        res.send(listado)
    }).catch((err)=>{
        res.status(400)
        res.send("No es posible listar los conductores: " + err)
    })    
})

app.delete('/eliminar_conductor', (req, res) => {
    info = req.body
    conductorEliminar = new Conductor()
    conductorEliminar.numeroIdenti = info.numeroIdenti
    conductorModel.eliminarConductor(conductorEliminar).then(()=>{
        res.send("Conductor ha sido eliminado correctamente")
    }).catch((err)=>{
        res.status(400)
        res.send("No es posible eliminar el conductor" + err)
    })  
})

app.post('/nuevo_vehiculo', (req, res) => {
    info = req.body
    agregarVehiculo = new Vehiculo().constructorInstancia(info.placa, info.marca, info.modelo, info.ano, info.color, info.cilindraje, info.cantPasajeros, info.tipoVehiculo)
    vehiculoModel.insertarVehiculo(agregarVehiculo).then(()=>{
        res.send("El vehiculo fue agregado correctamente")
    }).catch((err)=>{
        res.status(400)
        res.send("No es posible ingresar el vehiculo: " + err)
    })        
})

app.get('/consultar_vehiculo', (req, res) => {
    vehiculoModel.listarVehiculo().then((listado)=>{
        res.send(listado)
    }).catch((err)=>{
        res.status(400)
        res.send("No es posible listar vehiculos: " + err)
    })
})

app.delete('/vehiculoEliminar', (req, res) => {
    info = req.body
    vehiculoEliminar = new Vehiculo()
    vehiculoEliminar.placa = info.placa
    vehiculoModel.eliminarVehiculo(vehiculoEliminar).then(()=>{
        res.send("El vehiculo de placa: " + vehiculoEliminar.placa + " ha sido eliminado de manera exitosa")
    }).catch((err)=>{
        res.status(400)
        res.send("No es posible eliminar el vehiculo: " + err)
    })   
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
