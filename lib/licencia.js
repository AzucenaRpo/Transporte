class Licencia {

    constructor(numero, categoria, vigencia ){
        this.numero = numero
        this.categoria = categoria
        this.vigencia = new Date(vigencia)
        this.licenciaActiva = true
    }

    validarLicencia(){

        let fechaActual = new Date();

        if (this.vigencia < fechaActual) {
            this.licenciaActiva = false;
        }else{
            this.licenciaActiva = true;
            console.log(this.licenciaActiva);
        }
    }
}