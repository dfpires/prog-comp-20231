function exe5(){
    // recuperar valores nro1 e nro2 do usuário
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    // recupera o valor da opção escolhida
    let opcao = Number(document.getElementById("opcao").value)
    // operar nos números de acordo com escolha do usuário
    let resultado
    switch(opcao) {
        case 1: resultado = (nro1 + nro2) / 2
                break // não entra nos cases abaixo
        case 2: if (nro1 >= nro2){
                    resultado = nro1 - nro2 // nro1 é maior
                }
                else {
                    resultado = nro2 - nro1 // nro2 é maior
                }
                break
        case 3: resultado = nro1 * nro2
                break
        case 4: if (nro2 != 0){
                    resultado = nro1 / nro2
                }
                else {
                    resultado = "Divisão por zero"
                }
                break
        default: resultado = "Opção inválida"
    }
    // saída dos dados
    document.getElementById("resultado").innerHTML = resultado
}