var botaoLinhaBloco = document.querySelector("#btnMudaLayout")

botaoLinhaBloco.onclick = alteraNome

function alteraNome() {
    if (botaoLinhaBloco.textContent === "Blocos") {
        botaoLinhaBloco.textContent = "Linhas"
    } else {
        botaoLinhaBloco.textContent = "Blocos"
    }
}

console.log("layout")
