const conexion = require('./conexion')

module.exports = {
    insertarConductor(conductor){
        return new Promise((resolve, reject)=>{
            conexion.query(
                `INSERT INTO CONDUCTOR (nombre, apellido, numeroIdenti, fechaNacimiento, genero, correo, telefono, licencia, eps, arl) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [conductor.nombre, conductor.apellido, conductor.numeroIdenti, conductor.fechaNacimiento, conductor.genero, conductor.correo, conductor.telefono, conductor.licencia, conductor.eps, conductor.arl],
                (err, resultado)=>{
                    if (err) {
                        reject(err)
                    } else {
                        resolve(resultado.insertId)
                    }
                }
            )
        })
    },
    listarConductor(){
        return new Promise((resolve, reject)=>{
            conexion.query(
                `SELECT * FROM CONDUCTOR`,
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
    eliminarConductor(conductor){
        return new Promise((resolve, reject)=>{
            conexion.query(
                `DELETE FROM CONDUCTOR WHERE NUMEROIDENTI = ?`,
                [conductor.numeroIdenti],
                (err, resultado)=>{
                    if (err) {
                        reject(err)
                    } else {
                        if (resultado.affectedRows == 0) {
                            reject("El conductor a eliminar no existe")
                        }else{
                            resolve(resultado)
                        }                                                
                    }
                }
            )
        })
    }
}