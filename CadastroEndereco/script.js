//1. ouvir o evento, quando for digitado e o usurio sair do campo ja preenhcer
document.getElementById('cep').addEventListener("blur",(evento)=>{
  const elemento = evento.target;
  const cepInformado = elemento.value;
    //2 validar o CEP
    if(!(cepInformado.length == 8))
        return;
    //3 se estiver valido o cep trazer os dados
    //3.1 Promessa de que o fetch ira buscar o recurso
    fetch(`https://viacep.com.br/ws/${cepInformado}/json`)
        .then(response => response.json())
        .then(data =>{
            //3.2 processamento da pagina
            if(!data.erro){
                document.getElementById('logradouro').value = data.logradouro;
                document.getElementById('bairro').value = data.bairro;
                document.getElementById('cidade').value = data.localidade;
                document.getElementById('estado').value = data.uf;
            }else{
                    alert("CEP não encontrado")
                }
        })
        .catch(error => console.error("Erro ao buscar o CEP: ", error));

})

document.addEventListener("DOMContentLoaded",function(){
    const formularioCliente = document.getElementById("formulario")
    const botaoRestaurados = document.getElementById("restaurarDados")


formularioCliente.addEventListener("submit",function(event){
    event.preventDefault();

    const formData = new FormData(event.target)
    const dados = {}

    formData.forEach((value,key)=>{
        dados[key] = value;
    });

    localStorage.setItem("dadosFormulario",JSON.stringify(dados));

    alert("Dados salvos com sucesso!")

    formulario.reset();//Reseta o formulario
});

botaoRestaurados.addEventListener("click",function(){
    const dadosSalvos = localStorage.getItem("dadosFormulario");

    if(dadosSalvos){
        const dados = JSON.parse(dadosSalvos);
        
        for(const key in dados){
            const campo = document.querySelector(`[name="${key}"]`);
       if (campo) {
                campo.value = dados[key];
            }
        }

        alert("Dados carregados para o formulário.");
    } else {
        alert("Nenhum dado salvo encontrado.");
    }
})

});


