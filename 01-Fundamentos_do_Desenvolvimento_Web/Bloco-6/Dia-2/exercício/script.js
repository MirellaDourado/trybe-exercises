const submitBtn = document.querySelector('#submit-btn');
const photosRights = document.querySelector('#rights')
const photos = document.querySelector('#photos')

function buttonSubmit(targetBtn) {
  targetBtn.preventDefault(targetBtn)
}
submitBtn.addEventListener('click',buttonSubmit)

function filesSub() {
  if (photosRights.checked){
    photos.style.display = 'block'
  } else {
    photos.style.display = 'none'
  }
}
photosRights.addEventListener('click', filesSub)
