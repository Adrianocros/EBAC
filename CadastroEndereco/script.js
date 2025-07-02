//1. ouvir o evento, quando for digitado e o usurio sair do campo ja preenhcer
document.getElementById('cep').addEventListener("blur",(evento)=>{
  const elemento = evento.target;
  const cepInformado = elemento.value;
    //2 validar o CEP
    if(!(cepInformado.length == 8))
        return;
    //3 se estiver valido o cep trazer os dados
    //3.1 Promessa de que o fetch ira buscar o recurso
    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
        .then(response => response.json())
        .then(data =>{
            //3.2 processamento da pagina
            if(!data.erro){
                document.getElementById('logradouro').value = data.logradouro;
                document.getElementById('bairro').value = data.bairro;
                document.getElementById('cidade').value = data.cidade;
                document.getElementById('estado').value = data.estado;
            }else{
                    alert("CEP não encontrado")
                }
        })
        .catch(error => console.error("Erro ao buscar o CEP: ", error));

})


