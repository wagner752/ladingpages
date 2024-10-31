function animateGotas() {
    const gotas = document.querySelectorAll('.gota');
    const scrollPosition = window.scrollY + window.innerHeight;

    gotas.forEach(gota => {
      const gotaTopPosition = gota.getBoundingClientRect().top + window.scrollY;

      // Ativa a animação quando a gota entra na tela
      if (scrollPosition > gotaTopPosition) {
        gota.classList.add('show');
        gota.style.top = gota.getAttribute('data-top'); // Define a posição final da gota
      }
    });
  }

  // Escuta o evento de rolagem para ativar as animações
  window.addEventListener('scroll', animateGotas);

  // Ativa a animação logo na primeira carga, caso a página esteja rolada
  animateGotas();