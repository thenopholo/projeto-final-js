document.addEventListener('DOMContentLoaded', () => {
    const listaDeProdutos = document.getElementById('listaDeProdutos');

    function obterCarrinho() {
        const carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
        return carrinho.map(item => ({
            ...item,
            quantidade: item.quantidade || 1  // Se for null, define como 1
        }));
    }

    function salvarCarrinho(carrinho) {
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
    }

    // Função para converter o preço para número
    function converterPrecoParaNumero(preco) {
        return Number(preco.replace('R$', '').replace(/\./g, '').replace(',', '.'));
    }
    

    function alterarQuantidade(nomeProduto, delta) {
        let carrinho = obterCarrinho();
        const produto = carrinho.find(p => p.nome === nomeProduto);

        if (produto) {
            produto.quantidade = Math.max(1, produto.quantidade + delta);
            salvarCarrinho(carrinho);
            renderizarCarrinho(); // Atualiza a lista de produtos no carrinho
        }
        // Atualizar valor do input number
        const inputQuantidade = document.querySelector(`#listaDeProdutos .produto-carrinho[data-produto="${nomeProduto}"] .input-quantity`);
        if (inputQuantidade) {
            inputQuantidade.value = produto.quantidade;
        }
    }

    function renderizarCarrinho() {
        const carrinho = obterCarrinho();
        listaDeProdutos.innerHTML = ''; // Limpar lista de produtos
        let total = 0;

        carrinho.forEach(produto => {
            const divProduto = document.createElement('div');
            divProduto.className = 'produto-carrinho flex justify-between items-center mb-4';

            // Adicionar nome e preço do produto
            const nomeProduto = document.createElement('h2');
            nomeProduto.textContent = produto.nome;
            nomeProduto.className = 'text-white';

            const precoNumerico = converterPrecoParaNumero(produto.preco);
            const precoProduto = document.createElement('p');
            precoProduto.textContent = `R$ ${(precoNumerico * produto.quantidade).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
            precoProduto.className = 'text-white';

            // Adicionar controle de quantidade
            const controleQuantidade = document.createElement('div');
            controleQuantidade.className = 'flex items-center'; // Alinhar verticalmente


            const botaoSubtrair = document.createElement('button');
            botaoSubtrair.innerHTML = `
            <button
                    id="subtractProduto"
                    class="group cursor-pointer outline-none hover:rotate-180 duration-300 mr-[4px]"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25px"
                        height="25px"
                        viewBox="0 0 24 24"
                        class="stroke-red-400 fill-none group-hover:fill-red-800 group-active:stroke-red-200 group-active:fill-red-600 group-active:duration-0 duration-300"
                    >
                        <path
                        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                        stroke-width="1.5"
                        ></path>
                        <path d="M8 12H16" stroke-width="1.5"></path>
                        <path d="M8 12H16" stroke-width="1.5"></path>
                    </svg>
                </button>
            `;
            botaoSubtrair.onclick = () => alterarQuantidade(produto.nome, -1);

            const inputQuantidade = document.createElement('input');
            inputQuantidade.type = 'number';
            inputQuantidade.className = 'input-quantity text-center w-10 mr-[4px] bg-gray-800 text-white border border-gray-600 rounded-md';
            inputQuantidade.value = produto.quantidade; // Definir valor inicial
            inputQuantidade.onchange = (e) => {
                const novaQuantidade = parseInt(e.target.value, 10);
                alterarQuantidade(produto.nome, novaQuantidade - produto.quantidade);
            };

            const botaoAdicionar = document.createElement('button');
            botaoAdicionar.innerHTML = `
            <button
                    id="addProduto"
                    class="group cursor-pointer outline-none hover:rotate-90 duration-300"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25px"
                        height="25px"
                        viewBox="0 0 24 24"
                        class="stroke-green-400 fill-none group-hover:fill-green-800 group-active:stroke-green-200 group-active:fill-green-600 group-active:duration-0 duration-300"
                    >
                        <path
                        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                        stroke-width="1.5"
                        ></path>
                        <path d="M8 12H16" stroke-width="1.5"></path>
                        <path d="M12 16V8" stroke-width="1.5"></path>
                    </svg>
                </button>
            `;
            botaoAdicionar.onclick = () => alterarQuantidade(produto.nome, 1);

            controleQuantidade.appendChild(botaoSubtrair);
            controleQuantidade.appendChild(inputQuantidade);
            controleQuantidade.appendChild(botaoAdicionar);

            divProduto.appendChild(nomeProduto);
            divProduto.appendChild(precoProduto);
            divProduto.appendChild(controleQuantidade);

            listaDeProdutos.appendChild(divProduto);

            // Linha de separação (se desejar uma linha física entre os produtos)
            const linhaSeparadora = document.createElement('hr');
            linhaSeparadora.className = 'my-2 border-t border-gray-600';
            listaDeProdutos.appendChild(linhaSeparadora);

            // Calcular o total
            total += precoNumerico * produto.quantidade;
        });

        // Exibir o total
        const totalDiv = document.createElement('div');
        totalDiv.className = 'total-carrinho text-white text-2xl font-bold';
        totalDiv.textContent = `Total: R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        listaDeProdutos.appendChild(totalDiv);

        
    }

    renderizarCarrinho();
});