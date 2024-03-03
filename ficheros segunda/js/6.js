if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("obtener").addEventListener("click", function() {
        let velo=document.getElementById("velo").value;
        let roza=document.getElementById("roza").value;
        let dis=document.getElementById("dis");
        let info={
            Velocidad: velo,
            Rozamiento: roza
        };

        let xhr=new XMLHttpRequest();
        xhr.open("POST", "./php/ejercicio06.php", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange=function() {
            if (xhr.readyState==4 && xhr.status==200) {
                let datosRespuesta=JSON.parse(xhr.responseText);
                dis.value=datosRespuesta.Distancia;
            }
        };
        xhr.send(JSON.stringify(info));
    });
});
}else if (document.attachEvent) {
    document.attachEvent("onDOMContentLoaded",function() {
    document.getElementById("obtener").attachEvent("onclick",function() {
        let velo=document.getElementById("velo").value;
        let roza=document.getElementById("roza").value;
        let dis=document.getElementById("dis");

        let info= {
            Velocidad: velo,
            Rozamiento: roza
        };

        let xhr=new XMLHttpRequest();
        xhr.open("POST","./php/ejercicio06.php",true);
        xhr.setRequestHeader("Content-Type","application/json");
        xhr.onreadystatechange=function() {
            if (xhr.readyState==4 && xhr.status==200) {
                let datosRespuesta=JSON.parse(xhr.responseText);
                dis.value=datosRespuesta.Distancia;
            }
        };
        xhr.send(JSON.stringify(info));
    });
});
}
