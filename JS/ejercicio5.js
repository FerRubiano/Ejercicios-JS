const imagen1 = document.getElementById("imagen1");
const imagen2 = document.getElementById("imagen2");

imagen2.style.visibility = "hidden";

const show = () => {
  if (imagen2.style.visibility == "hidden") {
    imagen2.style.visibility = "visible";
  } else {
    imagen2.style.visibility = "hidden";
  }
};

imagen2.onclick = function(){
    cerrarSesion();
}