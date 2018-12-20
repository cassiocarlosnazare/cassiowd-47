;(function() 
    {
        const form = document.querySelector(".formNovoCartao")
        let numeroDoCartao = 0

        form.addEventListener("submit", function(evento)
        {
            evento.preventDefault()

            const textArea = form.querySelector(".formNovoCartao-conteudo")
            const isTextAreaVazio = textArea.value.trim().length === 0

            if(isTextAreaVazio)
                {
                    const msgErro = document.createElement("div")
                    msgErro.classList.add("formNovoCartao-msg")
                    msgErro.textContent = "Formulário inválido. Não digite vários nada!"

                    const btnSubmit = form.children[form.children.length-1]
                    form.addEventListener("animationend", function(event)
                    {
                        event.target.remove()
                    })
                    form.insertBefore(msgErro, btnSubmit)
                } else {
                    /*window.adicionarCartaoNoMural({conteudo: textArea.value})*/
                    cartao.criaCartao({conteudo: textArea.value})

                     textArea.value = " "
                } 
       
            })
        form.classList.remove("no-js")
    })()

/*PREVENTE DEFULT: Não deixa a pagina recarregar */
/*createElement: Espera receber uma string - normalmente tag HTML */
/*append = inclui um elemento JQuery no final e prepend = inclui no elemento JQuery no inicio
Exemplo: $(".mural").append(cartao)*/

