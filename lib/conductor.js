class Conductor {

    constructor(){
    };

    constructorInstancia(nombre, apellido, numeroIdenti, fechaNacimiento, genero, correo, telefono, licencia, eps, arl){
        this.nombre = nombre
        this.apellido = apellido
        this.numeroIdenti = numeroIdenti
        this.fechaNacimiento = fechaNacimiento
        this.genero = genero
        this.correo = correo
        this.telefono = telefono
        this.licencia = licencia
        this.eps = eps
        this.arl = arl

        return this;
    };
}

module.exports = Conductor;