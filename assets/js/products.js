// Array para armazenar os dados dos seus produtos
const produtos = [
    {
        nome: "Space Ship 01",
        categoria: "Workstation",
        preco: 3000.00,
        imagem: "assets/img/setup/01.png"
    },
    {
        nome: "Space Ship 02",
        categoria: "Workstation",
        preco: 4200.00,
        imagem: "assets/img/setup/02.png"
    },
    {
        nome: "Space Ship 03",
        categoria: "Workstation",
        preco: 3800.00,
        imagem: "assets/img/setup/03.png"
    },
    {
        nome: "Space Ship 04",
        categoria: "Workstation",
        preco: 2250.00,
        imagem: "assets/img/setup/04.png"
    },
    {
        nome: "Space Ship 05",
        categoria: "Workstation",
        preco: 3499.00,
        imagem: "assets/img/setup/05.png"
    },
    {
        nome: "Space Ship 06",
        categoria: "Workstation",
        preco: 5000.00,
        imagem: "assets/img/setup/06.png"
    },

    {
        nome: "Monitor 01",
        categoria: "Monitores",
        preco: 500.00,
        imagem: "assets/img/monitores/01.png"
    },
    {
        nome: "Monitor 02",
        categoria: "Monitores",
        preco: 899.00,
        imagem: "assets/img/monitores/02.png"
    },
    {
        nome: "Monitor 03",
        categoria: "Monitores",
        preco: 450.00,
        imagem: "assets/img/monitores/03.png"
    },
    {
        nome: "Monitor 04",
        categoria: "Monitores",
        preco: 599.00,
        imagem: "assets/img/monitores/04.png"
    },
    {
        nome: "Monitor 05",
        categoria: "Monitores",
        preco: 399.00,
        imagem: "assets/img/monitores/05.png"
    },
    {
        nome: "Monitor 06",
        categoria: "Monitores",
        preco: 999.00,
        imagem: "assets/img/monitores/06.png"
    },

    {
        nome: "Mouse 01",
        categoria: "Mouse",
        preco: 199.00,
        imagem: "assets/img/mouse/01.png"
    },
    {
        nome: "Mouse 02",
        categoria: "Mouse",
        preco: 599.00,
        imagem: "assets/img/mouse/02.png"
    },
    {
        nome: "Mouse 03",
        categoria: "Mouse",
        preco: 350.00,
        imagem: "assets/img/mouse/03.png"
    },
    {
        nome: "Mouse 04",
        categoria: "Mouse",
        preco: 399.00,
        imagem: "assets/img/mouse/04.png"
    },
    {
        nome: "Mouse 05",
        categoria: "Mouse",
        preco: 289.00,
        imagem: "assets/img/mouse/05.png"
    },
    {
        nome: "Mouse 06",
        categoria: "Mouses",
        preco: 699.00,
        imagem: "assets/img/mouse/06.png"
    },

    {
        nome: "Teclado 01",
        categoria: "Teclados",
        preco: 459.00,
        imagem: "assets/img/teclados/01.png"
    },
    {
        nome: "Teclado 02",
        categoria: "Teclados",
        preco: 299.00,
        imagem: "assets/img/teclados/02.png"
    },
    {
        nome: "Teclado 03",
        categoria: "Teclados",
        preco: 500.00,
        imagem: "assets/img/teclados/03.png"
    },
    {
        nome: "Teclado 04",
        categoria: "Teclados",
        preco: 899.00,
        imagem: "assets/img/teclados/04.png"
    },
    {
        nome: "Teclado 05",
        categoria: "Teclados",
        preco: 399.00,
        imagem: "assets/img/teclados/05.png"
    },
    {
        nome: "Teclado 06",
        categoria: "Teclados",
        preco: 599.00,
        imagem: "assets/img/teclados/06.png"
    },

    {
        nome: "Celular 01",
        categoria: "Celulares",
        preco: 599.00,
        imagem: "assets/img/celulares/01.png"
    },
    {
        nome: "Celular 02",
        categoria: "Celulares",
        preco: 999.00,
        imagem: "assets/img/celulares/02.png"
    },
    {
        nome: "Celular 03",
        categoria: "Celulares",
        preco: 1599.00,
        imagem: "assets/img/celulares/03.png"
    },
    {
        nome: "Celular 04",
        categoria: "Celulares",
        preco: 2000.00,
        imagem: "assets/img/celulares/04.png"
    },
    {
        nome: "Celular 05",
        categoria: "Celulares",
        preco: 6599.00,
        imagem: "assets/img/celulares/05.png"
    },
    {
        nome: "Celular 06",
        categoria: "Celulares",
        preco: 2799.00,
        imagem: "assets/img/celulares/06.png"
    },
    
];


// Seleciona o container onde os produtos serão exibidos
const containerProdutos = document.getElementById("produtosGrid");

// Função para renderizar os cards de produtos
function renderizarProdutos() {
    containerProdutos.innerHTML = ''; // Limpa o conteúdo anterior

    produtos.forEach(produto => {
        const cardProduto = document.createElement('div'); // Cria o elemento div
        cardProduto.classList.add('border', 'rounded-lg'); // Adiciona classes CSS

        const imgProduto = document.createElement('img');
        imgProduto.classList.add('rounded-t-lg', 'w-full', 'items-center',);
        imgProduto.src = produto.imagem;
        imgProduto.alt = produto.nome;
        cardProduto.appendChild(imgProduto); // Adiciona a imagem ao div
        
        const categoriaProduto = document.createElement('p');
        categoriaProduto.classList.add('categoriaProduto', 'text-white', 'text-sm', 'text-center', 'bg-violet-600', 'rounded-b-lg', 'px-2', 'py-1');
        categoriaProduto.textContent = produto.categoria;
        cardProduto.appendChild(categoriaProduto); // Adiciona a categoria ao div
        
        const nomeProduto = document.createElement('p');
        nomeProduto.classList.add('nomeProduto', 'text-white', 'text-lg', 'mb-[4px]', 'ml-[4px]');
        nomeProduto.textContent = produto.nome;
        cardProduto.appendChild(nomeProduto); // Adiciona o nome ao div

        const precoProduto = document.createElement('p');
        precoProduto.classList.add('precoProduto', 'text-2xl', 'text-violet-600', 'ml-[4px]');
        precoProduto.textContent = `R$ ${produto.preco.toFixed(2)}`;
        cardProduto.appendChild(precoProduto); // Adiciona o preço ao div

        const buyNowBtn = document.createElement('button');
        buyNowBtn.classList.add('buyNow', 'bg-[#BF15EE]', 'px-6', 'py-1', 'w-full', 'text-white', 'rounded-b-lg');
        buyNowBtn.textContent = 'Comprar Agora';
        buyNowBtn.onclick = () => adicionarNoCarrinho(produto.nome);
        cardProduto.appendChild(buyNowBtn); // Adiciona o botão ao div

        containerProdutos.appendChild(cardProduto); // Insere o div no container
    });
};

document.addEventListener('DOMContentLoaded', function () {
    renderizarProdutos();
});