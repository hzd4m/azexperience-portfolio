// Função para animações de entrada (Fade In)
const fadeInAnimation = () => {
    const elements = document.querySelectorAll('.fade-in');
    const revealElement = () => {
        const windowHeight = window.innerHeight;
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight * 0.8) {
                element.classList.add('visible');
            }
        });
    };

    // Inicializa a animação e adiciona evento de rolagem
    revealElement();
    window.addEventListener('scroll', revealElement);
};

// Função para animações de zoom ao rolar
const zoomAnimation = () => {
    const elements = document.querySelectorAll('.zoom-in');
    const zoomElement = () => {
        const windowHeight = window.innerHeight;
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight * 0.8) {
                element.classList.add('zoomed');
            }
        });
    };

    // Inicializa a animação e adiciona evento de rolagem
    zoomElement();
    window.addEventListener('scroll', zoomElement);
};

// Função para animações de deslizamento (Slide In)
const slideInAnimation = () => {
    const elements = document.querySelectorAll('.slide-in');
    const slideElement = () => {
        const windowHeight = window.innerHeight;
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight * 0.8) {
                element.classList.add('slided');
            }
        });
    };

    // Inicializa a animação e adiciona evento de rolagem
    slideElement();
    window.addEventListener('scroll', slideElement);
};

// Inicializa todas as animações
document.addEventListener('DOMContentLoaded', () => {
    fadeInAnimation();
    zoomAnimation();
    slideInAnimation();
});
