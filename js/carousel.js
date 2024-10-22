$('#recipeCarousel').carousel({
  interval: 3000
});

$('#recipeCarousel .carousel-item').each(function(){
    var minPerSlide = 3;
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings('.carousel-item:first'); // Garantir que só os itens de slide sejam clonados
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i = 0; i < minPerSlide; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings('#recipeCarousel .carousel-item:first'); // Garantir que só os itens de slide sejam clonados
        }
        
        next.children(':first-child').clone().appendTo($(this));
    }
});

document.querySelectorAll('.carousel-control-prev, .carousel-control-next').forEach(button => {
  button.addEventListener('click', () => {
      setTimeout(() => button.blur(), 100); // Retira o foco após o clique
  });
});