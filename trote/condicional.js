function condicional(){
    // recupera a qtde de kits entregues
    let kits = Number(document.getElementById("kits").value)
    // calcula quantos pontos a equipe ganhou
    let pontos
    if (kits >=  80){
        pontos = 5000
    }
    else if ((kits < 80) && (kits >= 64)){
        pontos = 4000
    }
    else if ((kits < 64) && (kits >= 40)){
        pontos = 2500
    }
    else if ((kits < 40) && (kits >= 16)){
        pontos = 1000
    }
    else if ((kits < 16) && (kits >= 0)){
        pontos = 0
    }
    else {
        pontos = -1 // indica que a qtde de kits é negativa
    }
    // mostra resultado ao usuário
    if (pontos == -1){
        document.getElementById("pontos").innerHTML = "Impossível calcular"
    }
    else {
        document.getElementById("pontos").innerHTML = "A pontuação da equipe é " + pontos
    }
}