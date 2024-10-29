
// Selecionar todos os links clicáveis (cards e links da navbar)
const clickableElements = document.querySelectorAll('a.nav-link, .navbar-brand, .botaoNavbar, .cardPerfil, .cardSociais, .cardLanding, .cardServicos');

// Selecionar o bloco de transição
const transitionBlock = document.getElementById('transition-block');

// Adicionar evento de clique aos links
clickableElements.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault(); // Prevenir que o link navegue instantaneamente
        
        const link = event.target.closest('a').href; // Pega o link que foi clicado

        // Ativar a animação do retângulo para crescer de cima para baixo
        transitionBlock.style.height = "100%";

        // Aguarde o fim da animação (800ms), depois redirecione
        setTimeout(() => {
            window.location.href = link; // Redireciona para o link clicado
        }, 800); // O tempo deve coincidir com o transition do CSS
    });
});

window.addEventListener('load', () => {
    const transitionBlock = document.getElementById('transition-block');
    
    setTimeout(() => {
        transitionBlock.style.height = "0%"; // Reduz a altura para 0, revelando os elementos
    }, 100); // Pequeno delay para garantir que o retângulo apareça antes de começar a esconder
});