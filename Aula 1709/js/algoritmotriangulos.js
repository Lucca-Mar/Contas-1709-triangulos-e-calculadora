var a = parseFloat(prompt("digite o valor de A: "));
var b = parseFloat(prompt("Digite o valor de B: "));
var c = parseFloat(prompt("Digite o valor C:"));

if ((a == b) && (b == c) && (c ==a)){

    console.log(" equilatero");
} 
if ((a == b) && (b != c) ){
 //ajeite o isosceles 
    console.log(" isosceles");
} 
if ((a != b) && (b != c) && (c != a)){

    console.log(" escaleno");
} 

//faça um algoritmo em javascript no qual o usuario digita 3 valores, veja qual triangulo sera formado se 