const ingresoEdad = () => {
let edadusuario = prompt("Bienvenide, su edad por favor");
let edad = 18;

if (edadusuario >= edad) {
    alert("Bienvenide");

    switch (prompt("Con qué genero se identifica, femenino o masculino")) {
        case "femenino":
        if (edadusuario >= 25) {
            alert("El valor de tu boleta es de $25.000");
        } else alert("El valor de tu boleta es de $20.000");

        break;

        case "masculino":
        if (edadusuario >= 24) {
            alert("El valor de tu boleta es de $30.000");
        } else {
            alert("El valor de tu boleta es de $25.000");
        }

        break;

    default:
        alert("Por favor generar genero");
        break;
    }
} else {
    alert("Debes tener más de 18 años para ingresar");
}
};

ingresoEdad();
