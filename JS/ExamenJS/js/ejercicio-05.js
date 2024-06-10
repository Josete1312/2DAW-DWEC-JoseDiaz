document.addEventListener("DOMContentLoaded",function() {

    document.getElementById("solucion").addEventListener("click",function() {
        let valor1=document.getElementById("vala").value;
        let valor2=document.getElementById("valb").value;
        let valor3=document.getElementById("valc").value;
        let solucion1=document.getElementById("sol1");
        let solucion2=document.getElementById("sol2");

		let xmlEcuacion='<?xml version="1.0" encoding="UTF-8"?><ecuacion><segundo><a>'+valor1+'</a><b>'+valor2+'</b><c>'+valor3+'</c></segundo></ecuacion>';

        fetch("./php/ejercicio05.php", {
            method: "POST",
            headers: {
                "Content-Type":"application/xml",
            },
            body: xmlEcuacion,
        })
        .then(response => response.text())
        .then(responseText => {
            let parsear=new DOMParser();
            let xml=parsear.parseFromString(responseText,"text/xml");
            let sol1=xml.getElementsByTagName("sol1")[0].textContent;
            let sol2=xml.getElementsByTagName("sol2")[0].textContent;
            solucion1.value=sol1;
            solucion2.value=sol2;
        })
        .catch(error => {
            console.error("error:",error);
        });
    });
});