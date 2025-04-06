function calculoIMC(){
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    let valorIMC = peso /(altura * altura) ;
   
    document.getElementById("resultado").textContent = "Seu IMC é : " + valorIMC;
 

}