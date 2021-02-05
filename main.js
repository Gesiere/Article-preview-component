const btns = document.querySelectorAll('.button');
const social = document.querySelector('.social-icons')


btns.forEach(btn => {
    btn.addEventListener('click', () => {
        social.classList.toggle('show')
    })
})