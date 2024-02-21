import '../scss/style.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'


const formContactUs = document.querySelector('.form-contact-us');

formContactUs.addEventListener('submit', (event) => {
    event.preventDefault();
})