const conexion = require('./conexion')
module.exports = {
    insertarVehiculo(vehiculo){
        return new Promise((resolve,reject)=>{
            conexion.query(
                `INSERT INTO VEHICULO (placa, marca, modelo, ano, color, cilindraje, cantPasajeros, tipoVehiculo) VALUES(?, ?, ?, ?, ?, ?, ?, ?)`,
                [vehiculo.placa, vehiculo.marca, vehiculo.modelo, vehiculo.ano, vehiculo.color, vehiculo.cilindraje, vehiculo.cantPasajeros, vehiculo.tipoVehiculo],
                (err,resultado) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(resultado.insertId)
                }
            })

        })
    },
    listarVehiculo(){
        return new Promise((resolve, reject)=>{
            conexion.query(
                `SELECT * FROM VEHICULO`,
                (err, resultado)=>{
                    if (err) {
                        reject(err)                       
                    } else {
                        resolve(resultado)                        
                    }
                }
            )
        })
    },
    eliminarVehiculo(vehiculo){
        return new Promise((resolve, reject)=>{
            conexion.query(
                `DELETE FROM VEHICULO WHERE PLACA = ?`,
                [vehiculo.placa],
                (err, resultado)=>{
                    console.log(resultado)
                    console.log(resultado.affectedRows)
                    if (err) {
                        reject(err)
                    } else {
                        if (resultado.affectedRows == 0) {
                            reject("El vehiculo a eliminar no existe")
                        }else{
                            resolve(resultado)
                        }                                                
                    }
                }
            )
        })
    }
}