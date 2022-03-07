$(document).ready( function () {
    $('#table_vehiculo').DataTable({

       "language": {
           "url": "https://cdn.datatables.net/plug-ins/1.11.5/i18n/es-ES.json"
       },

       "ajax": {
           "url": "http://localhost:3000/consultar_vehiculo",
           "dataSrc": ""
       },

       columns: [
           {data: 'placa'},
           {data: 'marca'},
           {data: 'modelo'},
           {data: 'ano'},
           {data: 'color'},
           {data: 'cilindraje'},
           {data: 'cantPasajeros'},
           {data: 'tipoVehiculo'}
       ]
   });
} );