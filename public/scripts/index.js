function submit() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("mail").value;
    const fecha = document.getElementById("fecha").value;
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value;

    const data = {
        nombre, email, fecha, asunto, mensaje
    }

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/citas-medicas");
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            if(xhr.status === 201) {
                alert("Reserva exitosa.");
            } else {
                alert("Error al enviar los datos.");
            }
        }
    }
    xhr.send(JSON.stringify(data));
}

document.getElementById("submitForm").addEventListener('click', submit);