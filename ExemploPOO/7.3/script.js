//Objeto literal
const pessoa = {nome: "Adriano", idade:39}


//criando uma classe

class Veiculo {
    //metodo construtor
    constructor(marca,modelo,ano){
        this.marca =marca;
        this.modelo = modelo;
        this.ano = ano;

        //Atributo privado acessado somente pela propria classe
        this._ligado = false;

    }
    //Atributos
    ligar(){
        this._ligado = true;
        console.log("O veiculo esta ligado!")
    }
    desligado(){
        this._ligado = false;
        console.log("O veiculo esta desligado!")
    }

    //Metodo getter para obeter valor  e retorno a atributo
    get ligado(){
        return this._ligado;
    }


}

/*
const veiculoNovo = new Veiculo("Honda","Civic",2025)
console.log(veiculoNovo);
veiculoNovo.ligar();
veiculoNovo.desligado();
console.log("O veiculo esta ligado?",veiculoNovo.ligado)*/

//Herança
class Moto extends Veiculo{
    constructor(marca,modelo,ano){
        super(marca,modelo,ano);
    }
}


class Carro extends Veiculo{
    constructor(marca,modelo,ano, numeroDePortas){
        super(marca,modelo,ano);
        this.numeroDePortas = numeroDePortas;
    }
    abrirPortas(){
        console.log("As Portas do carro forma abertas")
    }
}



const carro = new Carro("Honda","Civic",2025)
const moto = new Moto("Yamaha","MT-07",2025)

carro.ligar();
carro.desligado();
carro.abrirPortas();

console.log("O Carro esta lidago?",carro.ligado)






