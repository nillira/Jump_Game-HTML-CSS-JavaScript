const personagem = document.querySelector('.personagem');
const pipe = document.querySelector('.pipe');

const jump = () => {
    personagem.classList.add('jump');
    setTimeout(() => {
        personagem.classList.remove('jump');
    }, 500)
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const personagemPosition = +window.getComputedStyle(personagem).bottom.replace('px', '');
    if (pipePosition <= 70 && pipePosition > 0 && personagemPosition < 115) {
        pipe.style.animation = 'nome';
        pipe.style.left = `${pipePosition}px`;

        personagem.style.animation = 'nome';
        personagem.style.left = `${personagemPosition}px`;
        personagem.src = './image/isa1.gif';
        
        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);