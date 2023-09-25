window.onload=comienzo;

function comienzo(){
  let VstResuelto=""; 
  let count=0;
    for (let VIntindice= 1; count< 100; VIntindice++) { 
      if(numerosPrimos(VIntindice))
      VstResuelto +=  VIntindice.toString() + "|"; 
      count++; 
      document.formulario.primos.value=VstResuelto
    } 
      
  }

function numerosPrimos(numero){
    let VboPrimo=true;
    for(let VIntindice=2; VIntindice<numero; VIntindice++){
      if(numero%VIntindice==0)
        VboPrimo=false;
      
      return VboPrimo;
    }
  }