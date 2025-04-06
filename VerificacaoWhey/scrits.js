function calcularWhey(){
    let porcao = document.getElementById("porcao").value;
    let proteina = document.getElementById("proteina").value;

    let calcular = (porcao / proteina) * 100;

    document.getElementById("resultado").textContent = calcular + " % da dose é composta por proteina	"
}

