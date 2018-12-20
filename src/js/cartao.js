/*(function() {

const btn = document.querySelector(".opcoesDoCartao-remove")

btn.addEventListener("click", function() {
    const cartao = btn.parentNode.parentNode

    cartao.classList.add("cartao--some")
    cartao.addEventListener("transitionend", function(){
        cartao.remove()
    })
})
})()*/

/* TODOS OS BOTÕES */

;(function() {
    const btns = document.querySelectorAll(".opcoesDoCartao-remove")
    for (let i=0; i<btns.length; i++) {
        btns[i].addEventListener("click", function() {
        const cartao = btns[i].parentNode.parentNode

        cartao.classList.add("cartao--some")
        cartao.addEventListener("transitionend", function(){
            cartao.remove()
        })
      })
    }
})()

/* ---- OCULTA OPÇÕES ---- */
;(function(){
    const cartoes = document.querySelectorAll(".cartao")
    for(let i=0; i<cartoes.length; i++) {
        const cartao = cartoes[i]

        cartao.addEventListener("focusin", function() {
            cartao.classList.add("cartao--focado")
        })
        cartao.addEventListener("focusout", function(){
            cartao.classList.remove("cartao--focado")
        })
    }
})()

/* ---- COM forEach ---- */
/*;(function(){
    const cartoes = document.querySelectorAll(".cartao")
    cartoes.forEach(function(cartao))

        cartao.addEventListener("focusin", function() {
            cartao.classList.add("cartao--focado")
        })
        cartao.addEventListener("focusout", function(){
            cartao.classList.remove("cartao--focado")
        })
    }
})()
*/

/* ---- Alterando Cores ----*/
/*
const btnsCores = document.querySelectorAll(".cartoes .opcoes .cor")
    btnsCores.forEach(function(btnCor){
        btnCor.addEventListener("Click", function(){
            const cartao = btnCor.parentNode.parentNode
            cartao.styles.backgroundColor = btnCor.getAttribute("data-cor")
        })
    })
*/

;(function(){
const cartoes = document.querySelectorAll(".cartao")
    cartoes.forEach(function(cartao)
    {
        cartao.addEventListener("change", function(eventoClique)
        {
            const elemento = eventoClique.target
            if(elemento.classList.contains("opcoesDoCartao-radioTipo")) 
            {
                cartao.style.backgroundColor = elemento.getAttribute("value")
            }
        })

        cartao.addEventListener("keydown", function mudarCor({key, target})
        {
            if(key == "Enter" || key == " ")
            {
                target.click()
            }
        })

        cartao.addEventListener("click", function remover(evento)
        {
            const elemento = evento.target
            if(elemento.classList.contains("remover"))
            {
                cartao.classList.add("some-cartao")
                cartao.addEventListener("transitionend", function()
                {
                    cartao.remove()
                })
            }
        })
    })
})()