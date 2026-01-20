function adicionar() { 
    //recuperar os valores do formulário, NOME, QUANTIDADE E VALOR
    //calcular o preço, o nosso subtotal
    //adicionar no carrinho
    //atualizar o valor total da compra

    let nome_do_produto = produto.split('-')[0];
    let produto = document.getElementById('produto').value;
    let valorUnitario = produto.split('R$')[1];
    let quantidade_do_produto = document.getElementById('quantidade');
    alert(nome_do_produto.value);
    alert(quantidade_do_produto.value);
    alert(valorUnitario);
    let preco = quantidade.value * valorUnitario;
    alert(preco);
} 


function limpar() {

}