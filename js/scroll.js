// Inicializa a variável para monitorar a última posição de rolagem
let lastScrollTop = 0;

// Obtém o elemento navbar
const navbar = document.querySelector('.custom-navbar');

// Adiciona um evento de scroll
window.addEventListener('scroll', function() {
  // Obtém a posição de rolagem atual
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Verifica se a posição de rolagem é maior que zero (não está no topo)
  if (scrollTop > 0) {
    // Esconde a navbar ao descer
    navbar.style.transition = 'top 0.3s';
    navbar.style.top = scrollTop > lastScrollTop ? '-80px' : '0';
  } else {
    // Mostra a navbar ao retornar para o topo
    navbar.style.top = '0';
  }

  // Atualiza a última posição de rolagem
  lastScrollTop = scrollTop;
});
