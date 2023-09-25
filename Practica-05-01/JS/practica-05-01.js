window.onload=comienzo;

function comienzo(){
  let VstResuelto="";
  for (let VIntindice=1;VIntindice<=100;VIntindice++){ //Aqui te saca los numeros del 1 al 100
    if(numerosPrimos(VIntindice))
      VstResuelto += VIntindice.toString()+"|";
      
      document.formulario.primos.value=VstResuelto //Imprimir los resultados
  }
}

function numerosPrimos(numero){
  let VboPrimo=true;
  for(let VIntindice=2; VIntindice<numero; VIntindice++){ //Aqui calculamos si son primos o no
    if(numero%VIntindice==0)
      VboPrimo=false;
    
    return VboPrimo;
  }
}