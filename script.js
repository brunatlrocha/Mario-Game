const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    // Removes the 'jump' class after 500 milliseconds (adjust as needed)
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 600);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);
    if (pipePosition <= 120 && marioPosition < 80 ){

      pipe.style.animation = 'nome';  
      pipe.style.left = `${pipePosition}px`;

      mario.style.animation = 'nome';  
      mario.style.bottom = `${pipePosition}px`;

      mario.src = 'game-over.png';
      mario.style.width = '75px';
      mario.style.marginLeft = '50px';

      clearInterval(loop);
    }

}, 10)

document.addEventListener('keydown', jump);
