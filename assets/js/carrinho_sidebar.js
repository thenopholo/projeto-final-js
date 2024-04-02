document.addEventListener('DOMContentLoaded', () => {
    const comprarBtn = document.querySelectorAll('.buyNow');
    const carrinhoIcone = document.querySelector('.carrinho');
    const sidebar = document.getElementById('sidebar');
    const carrinhoItens = document.getElementById('carrinho-itens');
    const carrinhoTotal = document.getElementById('carrinho-total');

    function atualizarCarrinho() {
        const carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
        carrinhoItens.innerHTML = '';
        let total = 0;
        carrinho.forEach(produto => {
            const div = document.createElement('div');
            div.innerHTML = `${produto.nome} - ${produto.preco}`;
            carrinhoItens.appendChild(div);
            total += parseFloat(produto.preco.replace('R$ ', '').replace(',', '.'));
        });
        carrinhoTotal.innerHTML = `Total: R$ ${total.toFixed(2)}`;
    }

    comprarBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const produto = e.target.closest('div');
            const nome = produto.querySelector('.nomeProduto').innerText;
            const preco = produto.querySelector('.precoProduto').innerText;
            const carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
            carrinho.push({ nome, preco });
            localStorage.setItem('carrinho', JSON.stringify(carrinho));
            atualizarCarrinho();
            sidebar.classList.add('open');
        });
    });

    carrinhoIcone.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        atualizarCarrinho();
    });

    // Evento para fechar o sidebar ao clicar fora
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !carrinhoIcone.contains(e.target) && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
        }
    });

    atualizarCarrinho();
});
