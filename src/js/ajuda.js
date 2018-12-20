/*;(function() {

    const btnAjuda = $("#btnAjuda")
    btnAjuda.on("click", function() {

        const ajudas = [{conteudo: "caelum"},
        {conteudo: "Teste"}]

        ajudas.forEach(function(ajuda){
        cartao.criaCartao(ajuda)
        })
    })
    btnAjuda.removeClass("no-js")
}) () */

/* NOVA AJUDA */
;(function(){ 
    const btnAjuda = $("#btnAjuda") /* Declaro a Constante */
    btnAjuda.on("click", function(){ /* Ouvindo o Evento */
        const xhr = new XMLHttpRequest() /* Crio o Request para o Servidor - Assincrono */
        xhr.open("GET", "https://ceep.herokuapp.com/cartoes/instrucoes") /* Obter o arquivo */
        xhr.responseType = "json" /* Tipo de Requisição */
        xhr.send() /* Resposta dessa Requisição */
        xhr.addEventListener("load", function(){ /* Ouve a Resposta do Servidor e Ganha um novo atributo */
            const objeto = xhr.response
            const ajudas = objeto.instrucoes

            ajudas.forEach(function(ajuda){ /* Percorre o Array */
                cartao.criaCartao(ajuda) /* Adiciona o Cartão */
            })
        })
    })
    btnAjuda.removeClass("no-js")
})()