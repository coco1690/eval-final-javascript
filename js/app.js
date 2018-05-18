//------------------------------------------//
//Animacion de teclas//
function mDown(obj) {
    
    obj.style.height = "61.50px";
}

function mUp(obj) {
   
    obj.style.height = "62.91px";
}

function mDownSuma(obj) {
    
    obj.style.height = "99%";
}

function mUpSuma(obj) {
   
    obj.style.height = "100%";
}

//---------------------------------------//
var numero1,numero2,resultado;
document.getElementById("display").innerHTML=0;
document.getElementById("7").onclick = display7;
document.getElementById("8").onclick = display8;
document.getElementById("9").onclick = display9;
document.getElementById("4").onclick = display4;
document.getElementById("5").onclick = display5;
document.getElementById("6").onclick = display6;
document.getElementById("1").onclick = display1;
document.getElementById("2").onclick = display2;
document.getElementById("3").onclick = display3;
document.getElementById("0").onclick = display0  ;
document.getElementById("punto").onclick = displaypunto;
document.getElementById("igual").onclick = displayigual;
document.getElementById("mas").onclick = displaymas;
document.getElementById("menos").onclick = displaymenos;
document.getElementById("por").onclick = displaypor;
document.getElementById("dividido").onclick = displaydividido;
document.getElementById("on").onclick = displayon;
document.getElementById("sign").onclick = displaysign;




function display7() { 
    var numero=document.getElementById("display").innerHTML;  
    if (numero==0||numero==null) {document.getElementById('display').innerHTML=7;}
    else{document.getElementById('display').innerHTML+=7;}


    
}    

function display8() {
    var numero=document.getElementById("display").innerHTML;
    if (numero==0||numero==null) {document.getElementById('display').innerHTML=8;}
    else{document.getElementById('display').innerHTML+=8;}
}
function display9() {
    var numero=document.getElementById("display").innerHTML;
    if (numero==0||numero==null) {document.getElementById('display').innerHTML=9;}
    else{document.getElementById('display').innerHTML+=9;}
}

function display4() {
    var numero=document.getElementById("display").innerHTML;
    if (numero==0||numero==null) {document.getElementById('display').innerHTML=4;}
    else{document.getElementById('display').innerHTML+=4;}
}

function display5() {
    var numero=document.getElementById("display").innerHTML;
    if (numero==0||numero==null) {document.getElementById('display').innerHTML=5;}
    else{document.getElementById('display').innerHTML+=5;}
}

function display6() {
    var numero=document.getElementById("display").innerHTML;
    if (numero==0||numero==null) {document.getElementById('display').innerHTML=6;}
    else{document.getElementById('display').innerHTML+=6;}
}

function display1() {
    var numero=document.getElementById("display").innerHTML;
    if (numero==0||numero==null) {document.getElementById('display').innerHTML=1;}
    else{document.getElementById('display').innerHTML+=1;}
}

function display2() {
    var numero=document.getElementById("display").innerHTML;
    if (numero==0||numero==null) {document.getElementById('display').innerHTML=2;}
    else{document.getElementById('display').innerHTML+=2;}
}

function display3() {
    var numero=document.getElementById("display").innerHTML;
    if (numero==0||numero==null) {document.getElementById('display').innerHTML=3;}
    else{document.getElementById('display').innerHTML+=3;}
}

function display0() {
    var numero=document.getElementById("display").innerHTML;
    if (numero==0||numero==null) {document.getElementById('display').innerHTML=0;}
    else{document.getElementById('display').innerHTML+=0;}
}

function displaypunto() {
    document.getElementById("display").innerHTML +=".";
}

function displaymas() {
    var numero=document.getElementById("display").innerHTML;
    numero1=document.getElementById("display").innerHTML=numero+"+"; 
    document.getElementById("display").innerHTML="";

}

function displaymenos() {
    var numero=document.getElementById("display").innerHTML;
    numero1=document.getElementById("display").innerHTML=numero+"-"; 
    document.getElementById("display").innerHTML="";
}
function displaypor() {
    var numero=document.getElementById("display").innerHTML;
    numero1=document.getElementById("display").innerHTML=numero+"*"; 
    document.getElementById("display").innerHTML="";
}
function displaydividido() {
    var numero=document.getElementById("display").innerHTML;
    numero1=document.getElementById("display").innerHTML=numero+"/"; 
    document.getElementById("display").innerHTML="";
}

function displayigual() {
var numero=document.getElementById("display").innerHTML;
numero2=document.getElementById("display").innerHTML=numero; 
resultado=numero1+numero2;
resultado=resultado .substring(0,8);
resultado= eval(resultado );
document.getElementById("display").innerHTML=resultado; 
}

//_______________________________________________________________________//

function displayon() {
document.getElementById("display").innerHTML=0;

}

function displaysign() {   
var numero=document.getElementById("display").innerHTML; 
document.getElementById("display").innerHTML="-"+numero;

}
