
const matrizGastos  = [
    ["Alimentaçao",0],
    ["Transporte",0],
    ["Lazer",0],
    ["Outros",0],
    ["Total",0],
 ]

 //Funçções utilitarias
const obterElemento = (id) => document.getElementById(id);
const somaValor = (total, valor) => total + valor;
const valorNegativo =(valor) => valor < 0;
const limparCampos = () => obterElemento('valor').value = '';
const formataMoeda= (valor) => valor.toFixed(2).replace('.',',');

//Obeter valor do formulario
const obterValorInformado = () => parseFloat(obterElemento('valor').value);
const obterCategoriaInformada = () => obterElemento('categoria').value;

//Obter categoria do da matriz
const obterCategoria = (matriz, nomeCategoria) => matriz.find((item) => item[0] === nomeCategoria)

//Atualiza valores matriz
const atualizaValorCategoria = (categoria, valor) => categoria[1] = somaValor(categoria[1], valor);

const atualizarInteface = () => {
    matrizGastos.forEach(([nome, valor])=>{
      const elemento = obterElemento(nome);
      elemento.textContent = `${nome}: R$ ${formataMoeda(valor)}`;
      elemento.dataset.valor = `${valor}`
    })

}


 /*
 1 Pegar o valor informado
 2 Pegar categoria informada
 3 Impedir numeros negativos
 4 Atualizar valor da categoria de acordo com a selecionada
 4.1 Criar variaveis para controlar ou armazenar valor de cada categoria
 5 Atualizar interface
 6 Limpar campos
 */

function adicionarGasto(){

    const valorInformado = obterValorInformado();
    const categoriaInformada = obterCategoriaInformada();

    if (valorInformado === 0) {
        alert("Digite um valor válido maior que zero.");
        return;
    }

    if(valorNegativo(valorInformado)){
        alert("Valor invalido, O valor nao pode ser negativo");
        return
    }

  
    const categoria = obterCategoria(matrizGastos, categoriaInformada);

    const total = obterCategoria(matrizGastos, "Total");

    if (!categoriaInformada) {
        alert("Selecione uma categoria.");
        return;
    }

  
    atualizaValorCategoria(categoria, valorInformado);
    atualizaValorCategoria(total, valorInformado);
    atualizarInteface();
    limparCampos();
}
