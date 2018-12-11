var botaoLinhaBloco = document.querySelector("#btnMudaLayout")

function alteraNome() {
    if (botaoLinhaBloco.textContent === "Blocos") {
        botaoLinhaBloco.textContent = "Linhas"
    } else {
        botaoLinhaBloco.textContent = "Blocos"
    }
}

var mural = document.querySelector(".mural")

function mudaClasse() {
    mural.classList.toggle("mural--linha")
}

/*
botaoLinhaBloco.addEventListener("click", mudaClasse)
botaoLinhaBloco.addEventListener("click", alteraNome)*/

botaoLinhaBloco.addEventListener("click", function() {
    mudaClasse()
    alteraNome()
})