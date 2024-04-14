document.addEventListener('DOMContentLoaded', () => {
    const btnFinalizar = document.getElementById('btnFinalizar');
    const containerForm = document.getElementById('containerForm');

    function criarCard() {
        const card = document.createElement('div');
        card.className = 'card inline-block z-[1] text-white opacity-90 rounded-xl bg-gray-800 px-4 py-4 w-full overflow-y-auto mb-6';
        card.innerHTML = `
        <h2 class="text-white font-bold text-2xl">Informações para Envio</h2>

        <div class="mt-4">
            <label class="text-white" for="name">Nome Completo</label>
            <input placeholder="Seu Nome ou da pessoa que vai receber a entrega." class="w-full bg-gray-900 rounded-md border-gray-700 text-white px-2 py-1" type="text">
        </div>

        <div class="mt-4 flex flex-row space-x-2">
            <div class="flex-1">
                <label class="text-white" for="zip">CEP</label>
                <input placeholder="CEP do local da entrega." class="w-full bg-gray-900 rounded-md border-gray-700 text-white px-2 py-1" id="zip" type="text">
            </div>
        </div>

        <div class="mt-4">
            <label class="text-white" for="address">Endereço</label>
            <textarea placeholder="Endereço do local da entrega." class="w-full bg-gray-900 rounded-md border-gray-700 text-white px-2 py-1" id="address"></textarea>
        </div>

        <div class="mt-4 flex flex-row space-x-2">
            <div class="flex-1">
                <label class="text-white" for="city">Cidade</label>
                <input placeholder="Cidade" class="w-full bg-gray-900 rounded-md border-gray-700 text-white px-2 py-1" id="city" type="text">
            </div>

            <div class="flex-1">
                <label class="text-white" for="state">Estado</label>
                <input placeholder="Estado" class="w-full bg-gray-900 rounded-md border-gray-700 text-white px-2 py-1" id="state" type="text">
            </div>
        </div>

        <div class="mt-4 flex justify-end">
            <button id="btnEntrega" class="cursor-pointer bg-violet-600 px-3 py-2 rounded-md text-white tracking-wider shadow-xl animate-bounce hover:animate-none">Confirmar Entrega</b>
        </div>
        `; // Conteúdo exemplo do novo card
        return card;
    }

    function inserirCardComAnimacao() {
        const novoCard = criarCard();
        novoCard.style.opacity = '0'; // Começar invisível
        containerForm.appendChild(novoCard);

        // Adicionar classe de animação
        novoCard.classList.add('animate__animated', 'animate__fadeInDown');
        novoCard.style.opacity = '1'; // Tornar visível

        novoCard.addEventListener('animationend', () => {
            novoCard.classList.remove('animate__fadeInRight'); // Limpar classe de animação
        });
    }

    btnFinalizar.addEventListener('click', inserirCardComAnimacao);
});
