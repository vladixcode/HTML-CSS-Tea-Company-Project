// setup nav
const navBtn = document.getElementById('nav-btn')
const navbar = document.getElementById('navbar')
const navClose = document.getElementById('nav-close')
const exploreBtn = document.querySelector('.banner-btn')

// show nav
navBtn.addEventListener('click', () => {
  navbar.classList.add('showNav')
})

// close nav
navClose.addEventListener('click', () => {
  navbar.classList.remove('showNav')
})

// explore button smooth scrolling
exploreBtn.addEventListener('click', () => {
  document.querySelector('.explore-goto').scrollIntoView({
    behavior: 'smooth',
  })
})

// setup date in the footer
document.getElementById('date').innerHTML = new Date().getFullYear()
