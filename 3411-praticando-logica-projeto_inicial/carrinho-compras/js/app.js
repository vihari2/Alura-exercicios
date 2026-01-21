
let totalGeral;
limpar();

function adicionar() { 
    //recuperar os valores do formulário, NOME, QUANTIDADE E VALOR
    //calcular o preço, o nosso subtotal
    //adicionar no carrinho
    //atualizar o valor total da compra

    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1]; 
    let quantidade = document.getElementById('quantidade').value; 
    let preco = quantidade * valorUnitario;

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + ` <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x </span>${nomeProduto}<span class="texto-azul">${preco} </span>
        </section>`;
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total'); 
    campoTotal.textContent = `R$  ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
    //👉 “vá até o campo do formulário com id quantidade
    //👉 e altere o valor que aparece nele”
    //Variável JS não controla input HTML.
    //Input HTML só muda mexendo no DOM.
} 


function limpar() {
totalGeral = 0
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0';
}