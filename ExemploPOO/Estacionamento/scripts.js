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

const Parquimetro = {
    depositar: function () {
        let valor = parseFloat(document.getElementById("valorEstacionado").value.replace(",", "."));
        let tempo = 0;
        let valorUsado = 0;

        if (valor >= 3.00) {
            tempo = 120;
            valorUsado = 3.00;
        } else if (valor >= 1.75) {
            tempo = 60;
            valorUsado = 1.75;
        } else if (valor >= 1.00) {
            tempo = 30;
            valorUsado = 1.00;
        } else {
            tempo = 0;
            valorUsado = 0.00;
        }


        let troco = (valor - valorUsado).toFixed(2);


        let textoTempo = tempo === 0
            ? "Tempo de estacionamento: Valor insuficiente"
            : tempo === 120
                ? "Tempo de estacionamento: 120 minutos (Tempo máximo permitido)"
                : `Tempo de estacionamento: ${tempo} minutos`;

        document.getElementById("tempo").innerText = textoTempo;
        document.getElementById("deposito").innerText = `Valor depósito: R$ ${valorUsado.toFixed(2).replace(".", ",")}`;
        document.getElementById("troco").innerText = `Troco R$ ${troco.replace(".", ",")}`;
    }
}


const vlrDep = new DepositoParquimetro();
const parquimetro = new Parquimetro(vlrDep);