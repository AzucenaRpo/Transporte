class Vehiculo{

    constructor(){
    }

    constructorInstancia(placa, marca, modelo, ano, color, cilindraje, cantPasajeros, tipoVehiculo){
        this.placa = placa
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.color = color
        this.cilindraje = cilindraje
        this.cantPasajeros = cantPasajeros
        this.tipoVehiculo = tipoVehiculo

        return this;
    }

}
module.exports = Vehiculo;