class DepositoParquimetro{
    #deposito;
    constructor(){
        this.#deposito = 0;
    }

    depositar(valor){
        this.#deposito += valor;
    }

    get deposito(){
        return this.#deposito
    }

}

class Parquimetro {
    constructor() {
        this.vlrDep = vlrDep;
    }

    depositar() {
        const valorEstacionado = parseFloat(document.getElementById("valorEstacionado").value);
       
        const limite = 3.00;
        const depositoAtual = this.vlrDep.deposito;
        let troco = 0;

        if (depositoAtual > limite) {
            troco = valorEstacionado;
        } else if (depositoAtual + valorEstacionado > limite) {
            const permitido = limite - depositoAtual;
            this.vlrDep.depositar(permitido);
            troco = valorEstacionado - permitido;
        } else {
            this.vlrDep.depositar(valorEstacionado);
        }

        this.mostarEstacionamento(this.vlrDep.deposito, troco);
    }

    mostarEstacionamento(deposito, troco = 0) {
        document.getElementById("deposito").textContent = `Valor depósito: R$ ${deposito.toFixed(2)}`;

        let tempo = "";

        if (deposito >= 3.00) {
            tempo = "120 minutos (Tempo máximo permitido)";
        } else if (deposito >= 1.75) {
            tempo = "60 minutos";
        } else if (deposito >= 1.00) {
            tempo = "30 minutos";
        } else {
            tempo = "00:00 minutos";
        }

        document.getElementById("tempo").textContent = `Tempo de estacionamento: ${tempo}`;
        document.getElementById("troco").textContent = `Troco R$ ${troco.toFixed(2)}`;
    }
}

const vlrDep = new DepositoParquimetro();
const parquimetro = new Parquimetro(vlrDep);