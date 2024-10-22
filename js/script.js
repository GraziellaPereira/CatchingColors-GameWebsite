// Animação do botão de download ao ser clicado
document.getElementById("downloadBtn").addEventListener("click", function() {
    alert("O download está começando! Prepare-se para entrar em uma aventura épica!");
});

// Função para fazer o efeito de "scroll suave" ao clicar nos links do menu
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Animações da página ao rolar
const elementsToAnimate = document.querySelectorAll('.animate__animated');

window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    elementsToAnimate.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            element.classList.add('animate__fadeIn');
        }
    });
});





