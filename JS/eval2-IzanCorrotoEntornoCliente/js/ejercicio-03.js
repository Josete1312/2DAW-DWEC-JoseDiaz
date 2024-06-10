$(document).ready(function() {
$("#aplicar").click(function() {

    var num1=generarNum();
    var num2=generarNum();
    var num3=generarNum();
    var num4=generarNum();

    var rgb1=num1+','+num2+','+num3;
    var rgb2=num2+','+num3+','+num4;
    var rgb3=num3+','+num4+','+num1;
    var rgb4=num4+','+num1+','+num2;


    $("#coches tbody tr:first-of-type td:first-of-type").css("background-color", "rgb(" + rgb1 + ")");
    $("#coches tbody tr:nth-of-type(2) td:nth-of-type(2)").css("background-color", "rgb(" + rgb1 + ")");
    $("#coches tbody tr:nth-of-type(3) td:nth-of-type(3)").css("background-color", "rgb(" + rgb1 + ")");

    $("#coches tbody tr:first-of-type td:nth-of-type(2)").css("background-color", "rgb(" + rgb2 + ")");
    $("#coches tbody tr:nth-of-type(2) td:nth-of-type(3)").css("background-color", "rgb(" + rgb2 + ")");
    $("#coches tbody tr:nth-of-type(4) td:first-of-type").css("background-color", "rgb(" + rgb2 + ")");

    $("#coches tbody tr:first-of-type td:nth-of-type(3)").css("background-color", "rgb(" + rgb3 + ")");
    $("#coches tbody tr:nth-of-type(3) td:first-of-type").css("background-color", "rgb(" + rgb3 + ")");
    $("#coches tbody tr:nth-of-type(4) td:nth-of-type(2)").css("background-color", "rgb(" + rgb3 + ")");
    
    $("#coches tbody tr:nth-of-type(2) td:first-of-type").css("background-color", "rgb(" + rgb4 + ")");
    $("#coches tbody tr:nth-of-type(3) td:nth-of-type(2)").css("background-color", "rgb(" + rgb4 + ")");
    $("#coches tbody tr:nth-of-type(4) td:nth-of-type(3)").css("background-color", "rgb(" + rgb4 + ")");
  });



  function generarNum() {
    var num=Math.random();
    num=Math.floor(num*255);
    return num;
  }
})