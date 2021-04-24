/* Login: save email */
function saveEmail(){
  let emailAddress = document.getElementById('email');

  /* Delete later !!!!!! */
  let storeEmail = document.getElementById('storeEmail');
  storeEmail.innerHTML = emailAddress.value;

}

/* Pop-up functionality */
const openModal = document.querySelectorAll('[data-modal-target]')
const closeModal = document.querySelectorAll('[data-close-button]')
const appInfoOverlay = document.getElementById('appInfoOverlay')
const devInfoOverlay = document.getElementById('devInfoOverlay')
const contactOverlay = document.getElementById('contactOverlay')

function openTheModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  appInfoOverlay.classList.add('active')
  devInfoOverlay.classList.add('active')
  contactOverlay.classList.add('active')
}

function closeTheModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  appInfoOverlay.classList.remove('active')
  devInfoOverlay.classList.remove('active')
  contactOverlay.classList.remove('active')
}

openModal.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openTheModal(modal)
  })
});

closeModal.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.appInfo')
    closeTheModal(modal)
  })
});

appInfoOverlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.appInfo.active')
  modals.forEach(modal => {
    closeTheModal(modal)
  })
});

devInfoOverlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.appInfo.active')
  modals.forEach(modal => {
    closeTheModal(modal)
  })
});

contactOverlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.appInfo.active')
  modals.forEach(modal => {
    closeTheModal(modal)
  })
});
