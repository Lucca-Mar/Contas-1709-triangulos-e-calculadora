var tipical= parseInt(prompt("qual conta você gostaria de fazer? 1-soma 2-subtração 3-multiplicação 4-divisão 5- Area do quadrado 6- Area do triângulo 7- Area do retângulo"))

var a = parseFloat(prompt("Digite o valor de A:"));
var b = parseFloat(prompt("Digite o valor B:"));

if (tipical==1){
    soma();

}
  if (tipical==2){
    subtracao();
  }
if (tipical==3){
    divisao();
} 
if (tipical==4){
    multiplicacao();
} 
if (tipical==5){
    areaquadrado();
}
if (tipical==6){
    areatriangulo();
}  
if (tipical==7){
     arearetangulo();
} 



function soma(a, b){
    return a + b;
}
function subtracao(a, b){
    return a - b;
}
function divisao(a, b){
    return a / b;
}
function multiplicacao(a , b){
    return a * b;
}
function areaquadrado(a, b){
    return a * b;
}
function areatriangulo(a, b){
    return (a * b)/2;
}
function arearetangulo(a, b){
    return a * b;
}


if (tipical==1){

    console.log(soma( a, b ) + " é seu resultado");
    
}
if (tipical==2){

    console.log(subtracao( a, b ) + " é seu resultado");
    
}
if (tipical==3){

    console.log(divisao( a, b ) + " é seu resultado");
    
}
if (tipical==4){

    console.log(multiplicacao( a, b ) + " é seu resultado");
    
}
if (tipical==5){

    console.log(areaquadrado( a, b ) + " é seu resultado");
    
}
if (tipical==6){

    console.log(areatriangulo( a, b ) + " é seu resultado");
    
}
if (tipical==7){

    console.log(arearetangulo( a, b ) + " é seu resultado");
    
}
