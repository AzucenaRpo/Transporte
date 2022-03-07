var form = document.forms.namedItem("formulario_V")
form.addEventListener("submit", function(ev){
    ev.preventDefault();
    data = {
        "placa": document.getElementById("placa").value,
        "marca": document.getElementById("marca").value,
        "modelo": document.getElementById("modelo").value,
        "ano": document.getElementById("ano").value,
        "color": document.getElementById("color").value,
        "cilindraje": document.getElementById("cilindraje").value,
        "cantPasajeros": document.getElementById("cantPasajeros").value,
        "tipoVehiculo": document.getElementById("tipoVehiculo").value
    }

    fetch('http://localhost:3000/nuevo_vehiculo', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)
    })
    .then(result => {
        result.text().then((msg) => alert(msg))
    })
    .catch(function (err) {
        alert('Error al enviar la petición: ' + err)
    });
})