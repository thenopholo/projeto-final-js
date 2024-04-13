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
            div.classList.add('carrinho-item');
            div.innerHTML = `${produto.nome}<br>${produto.preco}`;
            carrinhoItens.appendChild(div);

            let preco = produto.preco.trim();
            preco = preco.replace('R$ ', '').replace(/\./g, '').replace(',', '.');
            total += parseFloat(preco);
        });
        carrinhoTotal.innerHTML = `Total: R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
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
        const isOpen = sidebar.classList.contains('open');

        if (!isOpen) {
            sidebar.classList.add('open');
            body.classList.add('no-scroll');
        } else {
            sidebar.classList.remove('open');
            body.classList.remove('no-scroll');
        }

        atualizarCarrinho();
    });

    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !carrinhoIcone.contains(e.target) && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
        }
    });

    atualizarCarrinho();
});
