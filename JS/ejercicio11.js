let boton1 = document.getElementById("boton1");
let boton2 = document.getElementById("boton2");

const consulta = () => {
    let respuesta = prompt("Desea consultar su saldo? Responda si o no");
    if (respuesta == "si") {
    alert("Su saldo es de $1.000.000");
} else if (respuesta == "no") {
    alert("No es posible mostrar su saldo");
} else {
    alert("Ingrese una respuesta valida");
}
};

const compra = () => {
let articulo = prompt(
    "Ingrese el numero del artículo que desea comprar:" +
        "\n" +
        "1. Corvata casa slytherin $40.000" +
        "\n" +
        "2. Combo (capa de la casa, corbata, bufanda, guantes)  $1.090.000" +
        "\n" +
        "3. Camiseta quidditch  $60.000" +
        "\n" +
        "4. Funko pop Harry Potter $80.000" +
        "\n" +
        "5. Gafas colección $90.000"
);

switch (articulo) {
    case "1":
        alert("Artículo agregado a tu carro de compras");
        break;
    case "2":
        alert("Fondos insuficientes para realizar la compra");
        break;
    case "3":
        alert("Artículo agregado a tu carro de compras");
        break;
    case "4":
        alert("Artículo agregado a tu carro de compras");
        break;
    case "5":
        alert("Artículo agregado a tu carro de compras");
        break;
    case 1:
        alert("Artículo agregado a tu carro de compras");
        break;
    default:
        alert("Ingresa una opcion valida");
        break;
}
};

boton1.onclick = function () {
consulta();
};

boton2.onclick = function () {
compra();
};
