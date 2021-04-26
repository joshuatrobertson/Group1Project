/* Login: save email */
function saveEmail(){
  let emailAddress = document.getElementById('email');
  //emailAddress = emailAddress.value;
}

/* Pop-up functionality */
const openModal = document.querySelectorAll('[data-modal-target]');
const closeModal = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');


function openTheModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeTheModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

openModal.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openTheModal(modal)
  })
})

closeModal.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeTheModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeTheModal(modal)
  })
})


