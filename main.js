/* abre e fecha o menu quando clikar no menu*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*quando clickar em item do menu, esconda o mesmo*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/*mudar o header da pagina quando der scroll*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY > navHeight) {
    header.classList.toggle('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

/*testimonial slider*/
const swiper = new Swiper('.swiper-container', {
  // If we need pagination
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
})
