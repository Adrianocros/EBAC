function calcularDesconto(){
    //Entrada e dados
    let valorOriginal = document.getElementById("valor").value;
    let desconto      =document.getElementById("desconto").value;   

    //console.log(valorOriginal);
    //console.log(desconto);
 
    
    //Processamento
    let valorDesconto = (valorOriginal * desconto) / 100;
    let valorFinal = valorOriginal - valorDesconto;
    //console.log(valorFinal);
    //Saida
    document.getElementById("resultado").textContent = "Valor final R$ : "+ valorFinal;
}


