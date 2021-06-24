// menuMobile open Close with Toggle()--------------------------------
const menuMobile = document.querySelector('.menuMobile')
const botaoMenu = document.querySelector('.botaoMenu')

let classes = menuMobile.classList

botaoMenu.addEventListener('click', () => {
    let openClose = classes.toggle('aberto')

    if (openClose) {
        botaoMenu.textContent = 'fechar menu toggle'
    } else {
        botaoMenu.textContent = 'abrir menu toggle'
    }
})


// menuMobile open Close with flag variable----------------------------   
const menuMobile2 = document.querySelector('.menuMobile2')
const botaoMenu2 = document.querySelector('.setupButton')

let aberto = false

botaoMenu2.onclick = () => {
    if (!aberto) {
        aberto = true
        menuMobile2.classList.add('aberto')
        botaoMenu2.innerText = 'fechar menu flag vb'
    } else {
        aberto = false
        menuMobile2.classList.remove('aberto')
        botaoMenu2.innerText = 'abrir menu flag vb'
    }
}