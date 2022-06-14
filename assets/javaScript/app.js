
const allPlanet = document.querySelector('.allPlanet');
const estela = document.querySelector('.estela');
const tierra = document.querySelector('.tierra');

allPlanet.addEventListener('click', () => {
    estela.classList.toggle('marteEstela');
    tierra.classList.toggle('marte');
    
})