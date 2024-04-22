//* ==========================================================================================================================
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const score = document.querySelector('#score');
const scoreGameover = document.querySelector('#score-gameover');
const gameOver = document.querySelector('#gameover');
const gameBoard = document.querySelector('.game-board');

//* SCORE ==========================================================================================================================
let interval = null; 
let playScore = 0;
const scoreCounter = () => {
    playScore++
    score.innerHTML = `Score:<b>${playScore}</b>`
}

//*GAME START ==========================================================================================================================
        

//*JUMP CONST ==========================================================================================================================
const jump = () => {
    mario.classList.add('jump');

    setTimeout(()=>{
        mario.classList.remove('jump');
    }, 600)
}



//*GAME LOOP ==========================================================================================================================

//SCORE
interval = setInterval(scoreCounter, 200)
//GAME
const loop = setInterval(()=>{

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    
    //*GAME OVER AREA ==========================================================================================================================
    if(pipePosition <= 100 && pipePosition > 0 && marioPosition < 90){
        gameBoard.style.border = 'none'
        pipe.style.animation = 'none';
        pipe.style.display = 'none';
        clouds.style.display = 'none';
        mario.style.display = 'none';
        gameOver.style.display = 'flex';
        gameOver.style.alignItems = 'center';
        pipe.style.left = `${pipePosition}px`; 
        
        mario.style.animation = 'none';
        mario.style.width = '120px';
        mario.style.left = `${marioPosition}px`;
        mario.style.bottom = `${marioPosition}px`;
        mario.src = './images/game-over.png';
        mario.style.marginLeft = "-50px";
        //mario.style.bottom = '80px';

        scoreGameover.innerHTML = `Seu Score foi: <b>${playScore}</b>`;
        clearInterval(loop)
        clearInterval(interval)
    }

}, 10)

document.addEventListener('keydown', jump)