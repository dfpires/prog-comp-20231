function trocaSwitch() {
    /* quando a função for executada */
    /* alert('Vamos trocar o switch'); */

    /* vamos recuperar a página HTML aqui no JavaScript */
    /* a variável html vai representar todo o documento */
    let html = document.documentElement;
    /* vamos verificar se no documento HTML tem a classe light 
    será que a lista de classes do documento contém light */
    if (html.classList.contains('light')) {
        /* como tem a class light, vamos retirar */
        html.classList.remove('light');
    }
    else {
          /* como não tem a class light, vamos adicionar */
        html.classList.add('light');
    }

}

function calculaImc(){
    // recupera os dados do usuário que estão nas caixas de texto
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value
    // calcula o imc
    let imc = (peso / (altura * altura))
    alert(imc.toFixed(2))
}