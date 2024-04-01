document.addEventListener('DOMContentLoaded', () => {
    const comprarBtn = document.querySelectorAll('.buyNow');
    const carrinhoIcone = document.querySelector('.carrinho');
    const sidebar = document.createElement('div');
    document.body.appendChild(sidebar);

    // Sidebar Style
    sidebar.style.width = '0';
    sidebar.style.position = 'fixed';
    sidebar.style.top = '0';
    sidebar.style.right = '0';
    sidebar.style.height = '100%';
    sidebar.style.backgroundColor = '#f4f4f4';
    sidebar.style.overflowX = 'hidden';
    sidebar.style.overflowY = 'auto';
    sidebar.style.transition = '0.5s';
    sidebar.style.padding = '0px';

    function atualizarCarrinho() {
        const carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
        sidebar.innerHTML = '<h2>Seu Carrinho</h2>';
        let total = 0;
        carrinho.forEach(produto => {
            const div = document.createElement('div');
            div.innerHTML = `${produto.nome} - ${produto.preco}`;
            sidebar.appendChild(div);
            total += parseFloat(produto.preco.replace('R$ ', '').replace(',', '.'));
        });
        const totalDiv = document.createElement('div');
        totalDiv.innerHTML = `Total: R$ ${total.toFixed(3)}`;
        sidebar.appendChild(totalDiv);
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
        });
    });

    carrinhoIcone.addEventListener('click', () => {
        sidebar.style.width = sidebar.style.width === '0px' ? '250px' : '0px';
        atualizarCarrinho();
    });

    atualizarCarrinho();
});
