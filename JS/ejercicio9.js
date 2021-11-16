let palabras =prompt("Ingresa una palabra")

const palabras = (palabra) => {
if (palabra == palabra.toUpperCase()) {
    alert(`palabra: ${palabra} está en mayúscula`);
} else if (palabra == palabra.toLowerCase()) {
    alert(`palabra: ${palabra} está en minúscula`);
} else {
    alert(`palabra: ${palabra} está en minúscula y en mayúscula`);
}
};

