var form = document.forms.namedItem("formulario")
form.addEventListener("submit", function(ev){
    ev.preventDefault();
    const data = {
        "nombre": document.getElementById("nombre").value,
        "apellido": document.getElementById("apellido").value,
        "numeroIdenti": document.getElementById("numeroIdenti").value,
        "fechaNacimiento": document.getElementById("fechaNacimiento").value,
        "genero": document.querySelector( 'input[name="genero"]:checked').value == "true",
        "correo": document.getElementById("correo").value,
        "telefono": document.getElementById("telefono").value,
        "licencia": document.querySelector( 'input[name="licencia"]:checked').value == "true",
        "eps": document.querySelector( 'input[name="eps"]:checked').value == "true",
        "arl": document.querySelector( 'input[name="arl"]:checked').value == "true",
    }

    fetch('http://localhost:3000/nuevo_conductor', {
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
        alert('Hubo un error al enviar la petición: ' + err)
    });
})