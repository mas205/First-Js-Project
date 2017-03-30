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
        resultado2 = nnum1+nnum2;       
        $("#pRes2").html("Resultado: "+resultado2);
    }    
    }
