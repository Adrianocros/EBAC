alert("Valor da Conta");
//console.log("Olá JavaScript no console");

//Entrada
const valorJanta = prompt("Valor do jantar R$: ")
//Processamento
const valorGarson = Number(valorJanta) * 0.10;
const valorTotal  = Number(valorJanta) + valorGarson;

//Saida
alert("Valor total R$: " + valorTotal);
