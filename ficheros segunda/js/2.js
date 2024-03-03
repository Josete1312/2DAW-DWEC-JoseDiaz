if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", iniciar);
} else if (document.attachEvent) {
    document.attachEvent("onload", iniciar);
}

function iniciar() {
let poner=document.getElementById("poner");
if (document.addEventListener) {
    poner.addEventListener("click",addTabla);
}else if (document.attachEvent) {
    poner.attachEvent("onclick",addTabla);
}

}

function addTabla() {
let ciudad=document.getElementById("ciudad").value;
let pais=document.getElementById("pais").value;
let habitantes=document.getElementById("habita").value;
let tabla=document.getElementById("tablaciudad");

let elementosTabla=document.querySelector("table");
let elementosTfoot=elementosTabla.getElementsByTagName("tfoot");
let primerTfoot=elementosTfoot[0];
let trTfoot=primerTfoot.getElementsByTagName("tr");
let segundoTr=trTfoot[1];
let tdTrs=segundoTr.getElementsByTagName("td");
let tdRepeticiones=tdTrs[1];

if (tabla && ciudad && pais) {
let thead=tabla.querySelector('thead');
let trs=tabla.getElementsByTagName("tr");
let presente=false;
let contRepeticiones=0;

for (var i = 0; i < trs.length; i++) {
let tds=trs[i].getElementsByTagName("td");

for (var j = 0; j < tds.length; j++) {
    if (tds[j].textContent.includes(ciudad)||tds[j].textContent.includes(pais)) {
        presente=true;
        alert("esta añadido ya");
        contRepeticiones=contRepeticiones+1;
        
        tdRepeticiones.innerHTML=contRepeticiones;
    break;
        }   
    }
}
        if (!presente) {
        let insertarTr=document.createElement("tr");
        let tdPais=document.createElement("td");
        let tdCiudad=document.createElement("td");
        let tdHabitantes=document.createElement("td");
        tdPais.innerHTML=pais;
        tdCiudad.innerHTML=ciudad;
        tdHabitantes.innerHTML=habitantes;
        insertarTr.appendChild(tdPais);
        insertarTr.appendChild(tdCiudad);
        insertarTr.appendChild(tdHabitantes);
        thead.appendChild(insertarTr);
        alert("no esta");
        }
}
}
