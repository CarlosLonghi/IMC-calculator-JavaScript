export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal h2.title'),
  buttonClose: document.querySelector('.modal button.close'),

  open() {
    // Função compactada "open: function() {}"
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}

// Arrow function em apenas 1 linha não necessita de {}
Modal.buttonClose.onclick = () => Modal.close() //

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
  if (event.key === 'Escape') {
    Modal.close()
  }
}
