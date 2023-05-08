
function mediaIdades(){
    let conta = 1
    let soma = 0
    let qtde = Number(prompt('Informe qtde'))
    while (conta <= qtde){
        let idade = Number(prompt('Informe uma idade'))
        conta = conta + 1 // incremento
        soma = soma + idade
    }
    alert("A média das idades é " + soma / qtde)
}

function exe3(){
    let idade;
    let f1 = 0; let f2 = 0; let f3 = 0; let f4 = 0; let f5 = 0;
    let conta = 1 // contador do while
    while (conta <=8) {
        idade = Number(prompt(`Informe a idade ${conta}`))
        if ((idade >= 0) && (idade <= 15)){
            f1++ // f1 = f1 + 1
        }
        else if ((idade >= 16) && (idade <= 30)){
            f2++
        }
        else if ((idade >= 31) && (idade <= 45)){
            f3++
        }
        else if ((idade >= 46) && (idade <= 60)){
            f4++
        }
        else if (idade > 60){
            f5++
        }
        conta++ // conta = conta + 1
    }
    // mostra o resultado
    // template string
    alert(`Fx1: ${f1} Fx2: ${f2} Fx3: ${f3} Fx4: ${f4} Fx5: ${f5}`)
    alert(`% Fx1: ${f1/8*100} %Fx5: ${f5/8*100}`)
}
function exe4(){
    let numero = Number(prompt(`Informe um número`))
    let conta = 0
    let resultado
    let saida = ""
    while(conta <= 10){
        resultado = numero * conta
        // acumulador
        saida = saida + `\n ${numero} X ${conta} = ${resultado}`
        conta++
    }
    alert(saida)
}

function exe5(){
    let conta1 = 1
    while (conta1 <= 10){
        let conta2 = 0
        let saida = "" 
        while (conta2 <= 10){
            saida = saida + `\n ${conta1} x ${conta2} = ${conta1*conta2}` 
            conta2++
        }
        alert(saida)
        conta1 ++
    }
}

function exe1(){
    let conta = 1; let conta2 = 1
    let A, B, C, D, aux
    while (conta2 <= 5){
        A = Number(prompt('Informe A'))
        B = Number(prompt('Informe B'))
        C = Number(prompt('Informe C'))
        D = Number(prompt('Informe D'))
        let conta = 1
        while (conta <= 4){
            if (A>B) { aux = A; A = B; B = aux;}
            if (B>C) { aux = B; B = C; C = aux;}
            if (C>D) { aux = C; C = D; D = aux;}
            conta++
        }
        alert(`Crescente ${A}, ${B}, ${C} e ${D}`)
        alert(`Decrescente ${D}, ${C}, ${B} e ${A}`)
        conta2++
    }
}

function exe2(){
    let preco = 5.0; let qtde = 120; 
    const desconto = 200;
    let saida = "<table> <tr> <th> Preço </th> <th> Qtde </th> <th> Desconto </th> <th> Lucro </th> </tr>"
    while (preco >= 1){
        lucro = (preco * qtde) - desconto
        saida += `<tr> <td> ${preco} </td> <td> ${qtde} </td> <td> ${desconto} </td> <td> ${lucro} </td> </tr>`
        preco = preco - 0.50
        qtde = qtde + 26

    }
    saida += "</table>"
    document.getElementById("saida").innerHTML = saida
}