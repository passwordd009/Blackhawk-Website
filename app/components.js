console.log('hello')

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeButton = document.getElementById('close-button');
const overlay = document.getElementById('modal-overlay')
const text = document.getElementById('modal-note')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
        overlay.style.display = "block";
        modal.style.display = "block"
        closeButton.style.display = "block"
        text.style.display = "block"
    })
}) 

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach((modal) => {
        closeModal(modal)
    })
})

closeButton.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal.active')
        modals.forEach((modal) => {
            closeModal(modal)
        })
    })
 

const openModal = (modal) => {
    if(modal ==  null) return
    modal.classList.add('active')
    overlay.classList.add('active')
    closeButton.classList.add('active')
    text.classList.add('active')
}

const closeModal = (modal) => {
    if(modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
    closeButton.classList.remove('active')
    text.classList.remove('active')
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const navbarHeight = document.querySelector('.nav-bar').offsetHeight + 100; 

        window.scrollTo({
            top:target.offsetTop - navbarHeight ,
            behavior: 'smooth'
        });
    });
});