function prova(){
    // recupera os dados do usuário
    let anos = Number(document.getElementById("anos").value)
    let linguagem = Number(document.getElementById("linguagem").value)
    // verificações
    let salario = 0
    if ((anos >= 0) && (anos < 5)){
        switch(linguagem){
            case 1: salario = 3000; break;
            case 2: salario = 5000; break;
            case 3: salario = 4000; break;
        }
    }
    else if (anos >= 5){
        switch(linguagem){
            case 1: salario = 6000; break;
            case 2: salario = 8000; break;
            case 3: salario = 7000; break;
        }
    }
    else {
        salario = -1
    }

    if (salario == -1) { // anos estão OK
        alert('Anos de experiência inválido')
    }
    else {
        let expectativa
        if (salario < 4500){
            expectativa = "Alta"
        }
        else if (salario >= 4500 && salario <= 6000){
            expectativa = "Média"
        }
        else {
            expectativa = "Baixa"
        }
        // resultado para usuário
        document.getElementById("salario").innerHTML = salario
        document.getElementById("expectativa").innerHTML = expectativa
    }   
}