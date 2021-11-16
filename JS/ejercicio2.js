
const traductor = () => {
  let = traductorPalabras = prompt(
    " Digita alguna de estas palabras (Casa, Mesa, Perro, Gato)"
  );
  switch (traductorPalabras) {
    case "Casa":
      alert("House");
      break;
    case "Mesa":
      alert("Table");
      break;
    case "Perro":
      alert("Dog");
      break;
    case "Gato":
      alert("Cat");
      break;
    default:
      alert("Por favor ingresa una palabra del listado");
      break;
  }
};
datos.onclick = function () {
  traductor();
};