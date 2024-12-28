// Função para animação ao clicar nos botões com âncoras
const smoothScroll = () => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
};

// Função para animação de hover nos botões
const buttonHoverEffect = () => {
    const buttons = document.querySelectorAll('.cta-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.1)';
            button.style.boxShadow = '0 4px 10px rgba(0, 123, 255, 0.3)';
            button.style.transition = 'all 0.3s ease';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
            button.style.boxShadow = 'none';
        });
    });
};

// Função para exibir conteúdo dinâmico ao rolar a página (Scroll Reveal)
const scrollReveal = () => {
    const sections = document.querySelectorAll('.section');
    const revealSection = () => {
        const triggerBottom = window.innerHeight / 1.2;
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerBottom) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    };

    // Verifica se a rolagem inicial já deve revelar algo
    revealSection();

    // Reage ao scroll
    window.addEventListener('scroll', revealSection);
};

// Função para controle do vídeo do Hero Section
const manageHeroVideo = () => {
    const video = document.querySelector('.background-video');
    if (video) {
        video.addEventListener('canplay', () => {
            video.play().catch(error => {
                console.error('Erro ao reproduzir o vídeo:', error);
            });
        });
    }
};
// Navbar Toggle
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});

// Inicializa todas as funções
document.addEventListener('DOMContentLoaded', () => {
    smoothScroll();
    buttonHoverEffect();
    scrollReveal();
    manageHeroVideo();
    setupNavbar();  
});

