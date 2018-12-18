;(function() {

    const btnAjuda = $("#btnAjuda")
    btnAjuda.on("click", function() {

        const ajudas = [{conteudo: "caelum"},
        {conteudo: "Teste"}]

        ajudas.forEach(function(ajuda){
        adicionaCartaoNoMural(ajuda)
        })
    })
    btnAjuda.removeClass("no-js")
}) ()

/* ESTA OK */