let keysPressed = [];

function onClickEasterEgg(color){
    document.body.style.background = color;
}

//modal

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

document.addEventListener('keydown', function(event) {    
    if(event.key == '6'){
        keysPressed.push('6');
        console.log(keysPressed);
        if(keysPressed.join() == ['6,6,6']){
            openModal(modal);
            keysPressed = [];
            console.log(modal);
        }
    } else {
        console.log('Wrong button to find the easter egg');
        keysPressed = [];
    }
});