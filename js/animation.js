// =================== GSAP Animation =================== //
const timeline = gsap.timeline()

// ===== About Section ===== //
timeline.fromTo('.about__title', {
  opacity: 0,
  y: -50,
  duration: .7, 
  delay: 0.5
}, {
  opacity: 1,
  y: 0, 
  duration: .7
}).fromTo('.about__text', {
  opacity: 0,
  y: 50, 
  duration: .7, 
  delay: 0.7
}, {
  opacity: 1,
  y: 0, 
  duration: .7
}, "-=0.5").fromTo('.about__btn', {
  opacity: 0, 
  y: 20, 
  duration: .7, 
  delay: 1
}, {
  opacity: 1,
  y: 0, 
  duration: .7
}, "-=0.5").fromTo('.about__image', {
  opacity: 0,
  x: 30, 
  duration: 1, 
  delay: 1
}, {
  opacity: 1,
  x: 0, 
  duration: 1
}, 1)


// ===== Company Logos ===== //
timeline.fromTo('.companies__logo', {
  y: 30,
  opacity: 0,
}, {
  y: 0,
  opacity: 1,
  stagger: 0.25,
  ease: "back",
})


// ===== Service Section ===== //
timeline.fromTo('.services__title', {
  y: 30,
  opacity: 0,
}, {
  y: 0,
  opacity: 1,
  duration: .7
}).fromTo('.services__subtitle', {
  x: 15,
  opacity: 0,
}, {
  x: 0,
  opacity: 1,
  duration: .7
})

timeline.fromTo('.services__item', {
  y: 30,
  opacity: 0,
}, {
  y: 0,
  opacity: 1,
  stagger: 0.25,
  duration: 1,
})


// ===== Get Section ===== //
timeline.fromTo('.get__wrapper', {
  opacity: 0,
}, {
  opacity: 1,
  duration: 0.5,
}).fromTo('.get__title', {
  opacity: 0,
  y: -50,
  duration: .7, 
  delay: 0.5
}, {
  opacity: 1,
  y: 0, 
  duration: .7
}).fromTo('.get__subtitle', {
  opacity: 0,
  y: 50, 
  duration: .7, 
  delay: 0.7
}, {
  opacity: 1,
  y: 0, 
  duration: .7
}, "-=0.5").fromTo('.get__btn', {
  opacity: 0, 
  y: 20, 
  duration: .7, 
  delay: 1
}, {
  opacity: 1,
  y: 0, 
  duration: .7
}, "-=0.5").fromTo('.get__image', {
  opacity: 0,
  x: 30, 
  duration: 1, 
  delay: 1
}, {
  opacity: 1,
  x: 0, 
  duration: 1
})


// ===== Cases Section ===== //
timeline.fromTo('.case__title', {
  opacity: 0,
  y: -50,
  duration: .7, 
  delay: 0.5
}, {
  opacity: 1,
  y: 0, 
  duration: .7
}).fromTo('.case__subtitle', {
  opacity: 0,
  y: 50, 
  duration: .7, 
  delay: 0.7
}, {
  opacity: 1,
  y: 0, 
  duration: .7
}, "-=0.5").fromTo('.case__wrapper', {
  opacity: 0,
}, {
  opacity: 1,
  duration: 0.5,
}).fromTo('.case__item', {
  y: -20,
  x: -20,
  opacity: 0,
}, {
  y: 0,
  x: 0,
  opacity: 1,
  stagger: 0.3,
  duration: .8,
})


// ===== FAQ Section ===== //
timeline.fromTo('.faq__title', {
  opacity: 0,
  y: -50,
  duration: .7, 
  delay: 0.5
}, {
  opacity: 1,
  y: 0, 
  duration: .7
}).fromTo('.faq__subtitle', {
  opacity: 0,
  y: 50, 
  duration: .7, 
  delay: 0.7
}, {
  opacity: 1,
  y: 0, 
  duration: .7
}).fromTo('.faq__item', {
  y: -30,
  opacity: 0,
}, {
  y: 0,
  opacity: 1,
  stagger: .3,
  duration: .8,
})


// ===== Team Section ===== //
timeline.fromTo('.team__title', {
  opacity: 0,
  y: -50,
}, {
  opacity: 1,
  y: 0, 
  duration: .7
}).fromTo('.team__subtitle', {
  opacity: 0,
  y: 50, 
}, {
  opacity: 1,
  y: 0, 
  duration: .7
}).fromTo('.team__item', {
  y: 30,
  opacity: 0,
}, {
  y: 0,
  opacity: 1,
  stagger: .3,
  duration: .8,
}).fromTo('.team__btn', {
  opacity: 0, 
  y: 20, 
}, {
  opacity: 1,
  y: 0, 
  duration: .7
})


// ===== Testimonials Section ===== //
timeline.fromTo('.testimonials__title', {
  opacity: 0,
  y: -50,
  delay: 0.5
}, {
  opacity: 1,
  y: 0, 
  duration: .7
}).fromTo('.testimonials__subtitle', {
  opacity: 0,
  y: 50, 
  delay: 0.7
}, {
  opacity: 1,
  y: 0, 
  duration: .7
}).fromTo('.testimonials__slider', {
  opacity: 0,
  delay: 0.5
}, {
  opacity: 1,
  duration: .7
}).fromTo('.testimonial__text', {
  opacity: 0,
  y: -50,
  delay: 0.5
}, {
  opacity: 1,
  y: 0, 
  duration: .7
}).fromTo('.testimonial__name', {
  opacity: 0,
  y: 50, 
  delay: 0.7
}, {
  opacity: 1,
  y: 0, 
  duration: .7
}).fromTo('.testimonial__pos', {
  opacity: 0,
  y: 50, 
  delay: 0.7
}, {
  opacity: 1,
  y: 0, 
  duration: .7
}).fromTo('.swiper-controls', {
  opacity: 0,
  y: -50, 
  delay: 0.7
}, {
  opacity: 1,
  y: 0, 
  duration: .7
})

// ===== Contact Section ===== //
timeline.fromTo('.contact__wrapper', {
  opacity: 0,
  delay: 0.5
}, {
  opacity: 1,
  duration: .7
}).fromTo('.contact__title', {
  opacity: 0,
  y: -50,
  delay: 0.5
}, {
  opacity: 1,
  y: 0, 
  duration: .7
}).fromTo('.contact__subtitle', {
  opacity: 0,
  y: 50, 
  delay: 0.7
}, {
  opacity: 1,
  y: 0, 
  duration: .7
}).fromTo('.contact__label', {
  opacity: 0,
  y: -25, 
  delay: 0.7
}, {
  opacity: 1,
  y: 0, 
  duration: .7
}).fromTo('.contact__input-wrapper', {
  opacity: 0,
  y: -25, 
  delay: 0.7
}, {
  opacity: 1,
  y: 0, 
  stagger: 0.2,
  duration: .7
}).fromTo('.contact__textarea-wrapper', {
  opacity: 0,
  y: -25, 
}, {
  opacity: 1,
  y: 0, 
  duration: .7
}).fromTo('.contact__btn', {
  opacity: 0,
  y: -25, 
}, {
  opacity: 1,
  y: 0, 
  duration: .7
}).fromTo('.contact__decor', {
  opacity: 0,
  x: 15, 
  delay: 0.7
}, {
  opacity: 1,
  x: 0, 
  duration: .7
})


// ===== Footer Section ===== //
timeline.fromTo('.footer__inner', {
  opacity: 0,
}, {
  opacity: 1,
}).fromTo('.footer__logo', {
  opacity: 0,
  y: -25,
}, {
  opacity: 1,
  y: 0,
}).fromTo('.footer__item', {
  opacity: 0,
  y: -25,
}, {
  opacity: 1,
  y: 0,
  stagger: 0.25,
}).fromTo('.footer__social', {
  opacity: 0,
  y: -25,
}, {
  opacity: 1,
  y: 0,
  stagger: 0.25,
}).fromTo('.footer__title', {
  opacity: 0,
  y: -25,
}, {
  opacity: 1,
  y: 0,
  stagger: 0.25,
}).fromTo('.footer__block', {
  opacity: 0,
  y: -25,
}, {
  opacity: 1,
  y: 0,
  stagger: 0.25,
}).fromTo('.footer__form', {
  opacity: 0,
}, {
  opacity: 1,
}).fromTo('.footer__form-input', {
  opacity: 0,
  y: -25,
}, {
  opacity: 1,
  y: 0,
}).fromTo('.footer__form-btn', {
  opacity: 0,
  y: -25,
}, {
  opacity: 1,
  y: 0,
}).fromTo('.footer__copy', {
  opacity: 0,
  y: -25,
}, {
  opacity: 1,
  y: 0,
})


// =================== GSAP ScrollTrigger =================== //
