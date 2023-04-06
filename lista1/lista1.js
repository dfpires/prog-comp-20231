function calcularSalario(){
    // obter os dados do usuário
    let fixo = Number(document.getElementById("fixo").value)
    let vendas = Number(document.getElementById("vendas").value)
    // calcular a comissão
    let comissao = vendas*4/100
    // calcular o salário total
    let total = fixo + comissao
    document.getElementById("comissao").innerHTML = "Comissão " + comissao
    document.getElementById("total").innerHTML = "Salário total " + total
}