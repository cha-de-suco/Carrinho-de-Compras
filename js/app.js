let quantidadeProduto = document.getElementById("quantidade")
let carrinho = document.getElementById("lista-produtos")
let total = document.querySelector("#valor-total")

function adicionar() {
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-")[0] //vem antes do hifen, tendo o mesmo como referencia
    let valorUnitario = parseInt(produto.split("R$")[1]) //vem depois do cifrão

    let preco = valorUnitario * quantidadeProduto.value
    total.innerHTML = `R$${preco}`
    carrinho.innerHTML = carrinho.innerHTML + `<div><span class="texto-azul"> ${quantidadeProduto.value}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span></div>`
}

function limpar() {
    quantidadeProduto.value = ''
    carrinho.innerHTML = ``
    total.innerHTML = `R$0`
}