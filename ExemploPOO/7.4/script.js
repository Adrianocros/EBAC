//Representa conta bancaria
class ContaBancaria{
    #saldo;
    constructor(){
        this.#saldo = 0;
    }
    //Metodo
    depositar(valor){
        this.#saldo += valor;
    }
    sacar(valor){
        this.#saldo -= valor;
    }
    temSaldoParaSacar(valor){
       return valor <= this.#saldo
    }

    get saldo(){
        return this.#saldo
    }

}

//Caixa eletronico
class CaixaEletronico{
    constructor(){
        this.conta = conta;
    }

    //Metodos
    depositar(){
        //PEgar o valor do deposito
        const valorDeposito = parseFloat(document.getElementById("valorDeposito").value);
        //Fazer o desposito na conta
        this.conta.depositar(valorDeposito);
        //Exibir o valor e atualizar o saldo
        this.mostrarSaldo(this.conta.saldo);
    }

         sacar(){
        //Pegar valor saque
        const valorSaque = parseFloat(document.getElementById("valorSaque").value);
        //Fazer o saque na conta
        if(this.conta.temSaldoParaSacar(valorSaque)){
            this.conta.sacar(valorSaque);
            this.mostrarSaldo(this.conta.saldo);
        }else{
            this.mostrarSaldo("Insuficiente")
        }
       
    }

    mostrarSaldo(saldo){
        document.getElementById("saldo").textContent = `Saldo: R$ ${saldo}`;
        document.getElementById("valorDeposito").value = ''
        document.getElementById("valorSaque").value = ''
    }
}

const conta = new ContaBancaria();
const caixaEletronico = new CaixaEletronico(conta);