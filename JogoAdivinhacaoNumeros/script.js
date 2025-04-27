const numeroSecreto = numerosAleatorios();
const tentativasMaximas = 10;
let tentativasRestantes = tentativasMaximas;

novasTentativas(); 

const botaoChutar = document.getElementById('btnChutar');
botaoChutar.addEventListener('click', chutar);



function numerosAleatorios(){
    return Math.floor(Math.random() * 100) + 1;
}

function chutar(){
    const inputPalpite = document.getElementById('numero');
    const palpite = Number(inputPalpite.value);

    if(!palpiteValido(palpite)){
        mostraMensagem("Digite um numero entre 0 a 100");
        return;
    }

    tentativasRestantes--;

    if(palpite == numeroSecreto){
        mostraMensagem("Parabéns, você acertou!");
        encerrarJogo();
    } else if(tentativasRestantes == 0){
        mostraMensagem(`Você perdeu! O número secreto era ${numeroSecreto}`);
        encerrarJogo();
    } else if(palpite < numeroSecreto){
        mostraMensagem(`O número secreto é maior.`);
    } else {
        mostraMensagem(`O número secreto é menor. `);
    }

    novasTentativas(); 

    inputPalpite.value = '';

    function palpiteValido(palpite){
        return !isNaN(palpite) && palpite >= 0 && palpite <= 100;
    }

    function mostraMensagem(text){
        const elementoMensagem = document.getElementById('mensagem'); 
        elementoMensagem.textContent = text;
    }

    function encerrarJogo(){
        botaoChutar.disabled = true;
        document.getElementById('numero').disabled = true;
    }
}

function novasTentativas() {
    const elementoTentativas = document.getElementById('tentativas');
    elementoTentativas.textContent = `Você tem ${tentativasRestantes} tentativas restantes`;
}
