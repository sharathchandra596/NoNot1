'use strict';
// element declaration
const player0El=document.querySelector('.player--0')
const player1El=document.querySelector('.player--1')
const score0El=document.getElementById('score--0')
const score1El=document.getElementById('score--1')
const diceEL=document.querySelector('.dice')
const currentscore0El=document.querySelector('#current--0')
const currentscore1El=document.querySelector('#current--1')

// button dedcaration 
const diceBtn=document.querySelector(".btn--roll")   
const holdBtn=document.querySelector(".btn--hold")   
const newgameBtn=document.querySelector(".btn--new")  

let currentscore=0
let activeplayer=0
let scores=[0,0]




// staring conditions 

score0El.textContent=0
score1El.textContent=0
diceEL.classList.add('hidden')

// function

 let switchPlayers=function()
{
    if(activeplayer===0)
    {
        activeplayer=1
    }
    else{
        activeplayer=0
    }
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
}


// dices rool condition 
diceBtn.addEventListener('click', function(){
    // 1. genarate random number
    const randomDiceNum=Math.trunc(Math.random()*6)+1
    console.log(randomDiceNum);
    // 2. display the imge of dice
   
        diceEL.classList.remove("hidden")
        diceEL.src=`dice-${randomDiceNum}.png`
    //3. check whether its 1 
        if(randomDiceNum!==1)
        {
        
            currentscore=currentscore+randomDiceNum
            console.log(currentscore +" this is line 40");
            document.querySelector(`#current--${activeplayer}`).textContent=currentscore
        }
        else{
            document.querySelector(`#current--${activeplayer}`).textContent=0
            currentscore=0

            switchPlayers()
        }

    
})

// hold button function 
holdBtn.addEventListener('click', function(){
   
    scores[`${activeplayer}`]=currentscore+ scores[`${activeplayer}`]
     document.getElementById(`score--${activeplayer}`).textContent=scores[`${activeplayer}`]
    currentscore=0
    document.querySelector(`#current--${activeplayer}`).textContent=0
    if(scores[`${activeplayer}`]>=100)
    {
        document.querySelector('.player--active').classList.add('player--winner')
        document.getElementById(`score--${activeplayer}`).textContent=100
    }

    
    else
    {
        switchPlayers()
    }
    
       

})

 newgameBtn.addEventListener('click', function(){
    scores=[0,0]
    activeplayer=1
    score0El.textContent=0
    score1El.textContent=0
    currentscore0El.textContent=0
    currentscore1El.textContent=0
    player0El.classList.add('player--active')
    currentscore=0
    diceEL.classList.add('hidden')
    document.querySelector('.player--active').classList.remove('player--winner')
 })

