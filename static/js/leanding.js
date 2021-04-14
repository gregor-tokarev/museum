const arrowEl = document.querySelector('#arrow')

arrowEl.addEventListener('click', event => {
  window.scrollBy({
    top: 400,
    behavior: 'smooth',
  })
})


const header = document.querySelector('.index_header')
window.addEventListener('scroll', event => {
  const screenHeight = document.documentElement.clientHeight
  const scrolled = document.documentElement.scrollTop
  console.log(screenHeight, scrolled)
  if (screenHeight - scrolled - 100 <= 0) {
    header.classList.add('header--solid')
  } else {
    header.classList.remove('header--solid')
  }
})

const openHeaderButton = document.querySelector('.open')

openHeaderButton.addEventListener('click', event => {
  console.log('some')
  header.classList.toggle('header--open')
})
