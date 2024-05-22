let totalGeral = 0
document.getElementById('lista-produtos').innerHTML = ""
let carrinhoTotal = document.getElementById("valor-total")
carrinhoTotal.innerHTML = "R$0"


function adicionar() {
//recuperar valores = nome do produto, quantidade e valor
let produto = document.getElementById("produto").value;
let nomeProduto = produto.split("-")[0]
let valorUnitario = produto.split("R$")[1]
let quantidade = document.getElementById("quantidade").value;
//lembrnado a pessoa de colocar a quantidade
if (quantidade == "") {
    alert("Insira a quantidade de produtos desejada!");
    return;
}
//calcular o preço, subtotal
let preco = valorUnitario * quantidade;
//adicionar o produto no carrinho, produto e subtotal
let carrinho = document.getElementById('lista-produtos');
carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
<span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
</section>`
//atualizar o grande total
totalGeral += preco;
carrinhoTotal.textContent = `R$${totalGeral}`;
//limpar quantidade depois que adiciona
document.getElementById("quantidade").value = ""
}

function limpar() {
totalGeral = 0
document.getElementById('lista-produtos').innerHTML = ""
document.getElementById("quantidade").value = ""
carrinhoTotal.innerHTML = "R$0"
}