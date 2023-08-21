// ===================== Mobile Menu ===================== //
const burger = document.querySelector('.menu__icon')
const menu = document.querySelector('.menu')
const body = document.body

if (burger && menu) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('active')
        menu.classList.toggle('active')
        body.classList.toggle('lock')
    })

    menu.addEventListener('click', e => {
      if (e.target.classList.contains('menu')) {
        menu.classList.remove('active')
        burger.classList.remove('active')
        body.classList.remove('lock')
      }
    })
  
    menu.querySelectorAll('.menu__link').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('active')
        burger.classList.remove('active')
        body.classList.remove('lock')
      })
    })
}


// ===================== Header Blur ===================== //
const scrollHeader = () => {
  const header = document.getElementById('header')
  this.scrollY >= 100 ? header.classList.add('blur-header') : header.classList.remove('blur-header')
}
window.addEventListener('scroll', scrollHeader)


// ===================== Smooth Transition By ID ===================== //
const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
	anchor.addEventListener('click', event => {
		event.preventDefault();

		const blockID = anchor.getAttribute('href').substring(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
})


// =================== Accordion =================== //
function accordion() {
  const items = document.querySelectorAll('.faq__button')

  items.forEach(item => {
      item.addEventListener('click', () => {
          const parent = item.parentNode

          if (parent.classList.contains('active')) {
              parent.classList.remove('active')
            } else {
              document.querySelectorAll('.faq__item').forEach(child => child.classList.remove('active'))
              parent.classList.add('active')
          }
      })
  })
}
accordion()


// =================== Swiper =================== //
const swiper = new Swiper(".testimonials__swiper", {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  grabCursor: true,

  autoplay: {
    delay: 3000,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
   },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});