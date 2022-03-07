$(document).ready( function () {
     $('#table_conductores').DataTable({

        "language": {
            "url": "https://cdn.datatables.net/plug-ins/1.11.5/i18n/es-ES.json"
        },

        "ajax": {
            "url": "http://localhost:3000/consultar_conductores",
            "dataSrc": ""
        },

        columns: [
            {data: 'nombre'},
            {data: 'apellido'},
            {data: 'numeroIdenti'},
            {data: 'fechaNacimiento'},
            {data: 'genero'},
            {data: 'correo'},
            {data: 'telefono'},
            {data: 'licencia'},
            {data: 'eps'},
            {data: 'arl'}
        ]
    });
});