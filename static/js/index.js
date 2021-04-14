const fileInput = document.querySelector('#ph')

fileInput.addEventListener('change', event => {
  const delete1 = document.querySelector('.photo_placehl')
  const delete2 = document.querySelector('.photo_text')
  if (delete1 && delete2) {
    delete1.remove()
    delete2.remove()
  }
  
  // const labelCont = document.querySelector('.photo_label')
  const label = document.querySelector('.photo_container')
  label.innerHTML = ''
  
  for (let i = 0; i < fileInput.files.length; i++) {
    const reader = new FileReader()
    reader.addEventListener('load', () => {
      const img = ImgComponent(reader.result)
      label.appendChild(img)
    })
    reader.readAsDataURL(fileInput.files[i])
  }
})

function ImgComponent(url) {
  const img = document.createElement('img')
  img.setAttribute('src', url)
  img.classList.add('mini-img')
  return img
}
