// Espera o DOM carregar
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona todos os elementos com a classe 'hidden'
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            // Se o elemento estiver visível na tela
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                // Opcional: remover a classe se quiser que a animação repita ao subir
                // entry.target.classList.remove('show');
            }
        });
    }, {
        // A animação ativa quando 10% do elemento estiver visível
        threshold: 0.1 
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // Efeito suave ao clicar nos links da navbar (caso o scroll-behavior do CSS falhe em algum browser)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    // Menu Hamburguer Mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
    // Fecha o menu ao clicar em um link (mobile)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
});