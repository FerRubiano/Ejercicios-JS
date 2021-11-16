let nombre = prompt("Ingresa tu nombre");
alert("Hola" + " " + nombre +" " + "Biembenide a pizza planeta");

const btn = document.getElementById("btn");

const pedidos = () => {
  let pizza = prompt(
    "Selecciona el tamaño de tu pizza: \n Personal \n Mediana \n Familiar"
  );

  if (pizza == "Personal") {
    let pedido1 = prompt("Pollo y Champiñosnes \n Hawaiana \n Carnes ");
    switch (pedido1) {
    case "Pollo y Champiñones":
        let version = prompt("Con queso \n Sin queso");
        let version2 = prompt("Con salsa \n Con borde de bocadillo");
        alert("Tu pedido es una Pizza:\nPersonal\n" + version + "\n" + version2);
        break;
    case "Hawaiana":
        let version3 = prompt("Sin piña \n Sin jamón");
        let version4 = prompt("Con salami \n Sin salami ");
        alert("Tu pedido es una Pizza:\nPersonal\n" + version3 + "\n" + version4 );
        break;
    case "Carnes":
        let version5 = prompt("Sin salami \n Con salami");
        let version6 = prompt("Con cabano \n Sin cabano");
        let version7 = prompt("Con queso \n Sin queso");
        alert("Tu pedido es una Pizza:\nPersonal\n" + version5 + "\n" + version6 + "\n" + version7);
        break;
    default:
        alert("Por favor agrega una opción valida");
        break;
    };
  }

  else if (pizza == "Mediana") {
    let pedido2 = prompt("Mexicana \n Criolla");
    switch (pedido2) {
    case "Mexicana":
        let version8 = prompt("Con nachos \n Sin nachos");
        let version9 = prompt("Con guacamole extra \n Sin guacamole extra");
        alert("Tu pedido es una Pizza:\nMediana\n" + version8 + "\n" + version9);
        break;
    case "Criolla":
        let version10 = prompt("Con maiz \n Sin maiz");
        let version11 = prompt("Con carne molida extra \n con queso ");
        alert("Tu pedido es una Pizza:\nMediana\n" + version10 + "\n" + version11 );
        break;
    default:
        alert("Por favor agrega una opción valida");
        break;
    };
  }
  else if (pizza == "Familiar"){
    let pedido3 = prompt ("Vegetariana \n Carne y Pollo")
    switch (pedido3) {
      case "Vegetariana":
          let version12 = prompt("Con queso \n Sin queso");
          alert("Tu pedido es una Pizza:\nFamiliar\n" + version12);
          break;
      case "Carne y Pollo":
          let version13 = prompt("Con racion de salchipapas \n con racion de champiñones");
          alert("Tu pedido es una Pizza:\nMediana\n" + version13);
          break;
      default:
          alert("Por favor agrega una opción valida");
          break;
  }
}
else {
    alert("Por favor agrega una opción valida");
}
}

btn.onclick = function() {
  pedidos();
};





