let boton = document.getElementById("boton");
let html = "";
i = 0;

const agregar = () => {
html += `<div id="divi${[i]}" class="divi" style="background-color: blue">`;
html += "</div>";
document.getElementById("nuevo").innerHTML = html;
    i++;

    const color0 = () => {
    document.getElementById("divi0").style.backgroundColor = "red";
};

document.getElementById("divi0").onclick = function () {
    color0();
};
const color1 = () => {
    document.getElementById("divi1").style.backgroundColor = "red";
};

document.getElementById("divi1").onclick = function () {
    color1();
};

const color2 = () => {
    document.getElementById("divi2").style.backgroundColor = "red";
};

document.getElementById("divi2").onclick = function () {
    color2();
};

const color3 = () => {
    document.getElementById("divi3").style.backgroundColor = "red";
};

document.getElementById("divi3").onclick = function () {
    color3();
};
const color4 = () => {
    document.getElementById("divi4").style.backgroundColor = "red";
};

document.getElementById("divi4").onclick = function () {
    color4();
};

const color5 = () => {
    document.getElementById("divi5").style.backgroundColor = "red";
};

document.getElementById("divi5").onclick = function () {
    color5();
};
};

boton.onclick = function () {
agregar();
};
