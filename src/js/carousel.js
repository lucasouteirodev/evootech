const emblaNode = document.querySelector('.embla') 
const options = { loop: true }  
const plugins = [EmblaCarouselAutoplay()]
const emblaApi = EmblaCarousel(emblaNode, options, plugins)

const emblaNode2 = document.querySelector('.embla2') 
const options2 = { loop: true, direction: 'rtl' }  
const plugins2 = [EmblaCarouselAutoplay({delay: 1000})]
const emblaApi2 = EmblaCarousel(emblaNode2, options2, plugins2) 