let boton = document.getElementById("boton");

const revision = () => {
let frase = prompt("Escriba la frase");

if (frase==frase.toUpperCase()) {
    alert("Frase en mayusculas");
} else if (frase==frase.toLowerCase()) {
    alert ("Frase en minusculas");
}else{
    alert("Frase con mayusculas y minusculas")
}
};


boton.onclick= function ()  {
    revision();
};

