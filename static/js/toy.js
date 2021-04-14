const miniImgs = document.querySelectorAll('.mini_container')
const mainImg = document.querySelector('.norm_image img')

miniImgs.forEach(el => {
  el.addEventListener('click', event => {
    miniImgs.forEach(img => img.classList.remove('mini_container--active'))
    el.classList.add('mini_container--active')
    const currentUrl = el.querySelector('img').getAttribute('src')
    mainImg.setAttribute('src', currentUrl)
  })
})
