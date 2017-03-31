/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$().ready(iniciar);

function iniciar() 
{
    $("#btnP1").click(procesarEj1);
    $("#btnP2").click(procesarEj2);
    $("#btnP3").click(procesarEj3);
    $("#btnP4").click(procesarEj4);
    $("#btnP5").click(procesarEj5);
}
    
function procesarEj1(){
    var txtN1=$("#txtN1").val();
    var txtA1=$("#txtA1").val();
    var Resultado1= txtA1 + ", " + txtN1;
    $("#pRes1").html(Resultado1);
    
}
function procesarEj2(){

    var num1=$("#num1").val();
    var num2=$("#num2").val();

    if(isNaN(num1) || isNaN(num2)){
        $("#pRes2").html("Error, intente devuelta con números");
    }
    
    else{
        nnum1 = parseFloat(num1);
        nnum2 = parseFloat(num2);
        resultado1 = nnum1+nnum2;       
        $("#pRes2").html("Resultado: "+resultado1);
    }    
    }

function procesarEj3(){

    var num1=$("#num3").val();
    var num2=$("#num4").val();
    var num3=$("#num5").val();

    if(isNaN(num1) || isNaN(num2) || isNaN(num3)){
        $("#pRes3").html("Error, intente devuelta con números");
    }
    
    else{
        nnum1 = parseFloat(num1);
        nnum2 = parseFloat(num2);
        nnum3 = parseFloat(num3);
        resultado1 = nnum1+nnum2+nnum3;       
        $("#pRes3").html("Resultado: "+resultado1);
    }    
    }
function procesarEj4(){
    var num1=$("#num6").val();
    var num2=$("#num7").val();
    
    if(isNaN(num1) || isNaN(num2)){
        $("#pRes4").html("Error, intente devuelta con números");
        $("#pRes5").html("Error, intente devuelta con números");
    }
    else {
        nnum1=parseFloat(num1);
        nnum2=parseFloat(num2);
        resultado1=nnum1+nnum2;
        resultado2=nnum1*nnum2;
        $("#pRes4").html("Suma " + resultado1);
        $("#pRes5").html("Multiplicación: " + resultado2);                
    }
}
function procesarEj5(){
    var num1=$("#num8").val();
    
    if(isNaN(num1)){
        $("#pRes6").html("Error, intente devuelta con números");
    }
    else{
        nnum1=parseFloat(num1);
        resultado1=nnum1*nnum1;
        $("#pRes6").html("Area: " + resultado1);
    }
}
