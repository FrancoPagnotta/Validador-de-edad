let free = false;

const validarCliente = (time) => {
    edad = prompt("¿Cual es tu edad?");
    if (edad >= 18) {
        if (time >= 2 && time < 7 && free == false) {
            alert("Eres la primer persona despues de las 2 AM y por ende puedes pasar gratis.");
            free = true;
        } else {
            alert(`Son las ${time}:00hs , por lo tanto puedes pasar pero debes pagar la entrada`);
        }
    } else {
        alert("No tienes la edad suficiente para ingresar");
    }
}

validarCliente(23);
validarCliente(24);
validarCliente(1);
validarCliente(2);
validarCliente(3);
validarCliente(4);
validarCliente(5);
validarCliente(6);
validarCliente(7);