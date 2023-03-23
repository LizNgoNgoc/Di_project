const searchBtn = document.querySelector('.menu__js_img');
const shadow = document.querySelector('.wrapper__shadow');
const searchInput = document.querySelector('.mob__search');
const closeBtn = document.querySelector('.mob__btn_close');
const navBtn = document.querySelector('.nav__js_img')
const navBar = document.querySelector('.mob__nav')
const navCloseBtn = document.querySelector('.nav__btn_close')
const catalogBtn = document.querySelector('.catalog__js_img')
const catalogInfo = document.querySelector('.catalog__nav')



searchBtn.addEventListener('click', () => {
    shadow.classList.remove('mob__none')
    searchInput.classList.remove('mob__none')
    catalogBtn.classList.remove('catalog__index')
})

closeBtn.addEventListener('click', () => {
    shadow.classList.add('mob__none')
    searchInput.classList.add('mob__none')
    catalogBtn.classList.add('catalog__index')
})

navBtn.addEventListener('click', () => {
    shadow.classList.remove('mob__none')
    navBar.classList.remove('mob__none')
})

navCloseBtn.addEventListener('click', () => {
    shadow.classList.add('mob__none')
    navBar.classList.add('mob__none')
})

catalogBtn.addEventListener('click', () => {
    shadow.classList.toggle('mob__none')
    catalogInfo.classList.toggle('mob__none')
})






