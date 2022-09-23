const mario = document.querySelector('.mario'); // acessando a class do mario
const pipe = document.querySelector('.pipe');
const fim = document.querySelector('.fim');



const jump = () => {
  mario.classList.add('jump');
  
  setTimeout(() => {
    mario.classList.remove('jump');
  },500)
}
const loop = setInterval ( () => {
  
    console.log("loop");
    fim.src = 'none';

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); // com esse + ele ja converte pra numero

    console.log(marioPosition);

  
    if(pipePosition <= 120 && pipePosition  > 0 && marioPosition  < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        


        mario.src = 'img/jogo/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
        fim.src = 'img/jogo/fim.jpg';

       

        clearInterval(loop);
    }
  
}, 10)


document.addEventListener('keydown', jump);
