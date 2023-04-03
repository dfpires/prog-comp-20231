function verificaChecagem(texto){
    if (texto == "padrao"){
        document.getElementById("qtdePadrao").disabled = 
        !document.getElementById("qtdePadrao").disabled
    }
    if (texto == "kit"){
        document.getElementById("qtdeKit").disabled = 
        !document.getElementById("qtdeKit").disabled
    }
    if (texto == "suplemento"){
        document.getElementById("qtdeSuplemento").disabled = 
        !document.getElementById("qtdeSuplemento").disabled
    }
    if (texto == "arroz"){
        document.getElementById("qtdeArroz").disabled = 
        !document.getElementById("qtdeArroz").disabled
    }
}

function calcularAdicional(){
    let total = 0
    // está checado?
    if (document.getElementById("padrao").checked){
        total = total + 50 * document.getElementById("qtdePadrao").value
    }
    // está checado ?
    if (document.getElementById("kit").checked){
        total = total + 25 * document.getElementById("qtdeKit").value
    }
    // está checado ?
    if (document.getElementById("suplemento").checked){
        total = total + 10 * document.getElementById("qtdeSuplemento").value
    }
    // está checado ?
    if (document.getElementById("arroz").checked){
        total = total + 5 * document.getElementById("qtdeArroz").value
    }
    document.getElementById("total").innerHTML = "O total é " + total
}