//1 hide and show element
// function play(){
//     const homeScreen=document.getElementById('home-screen');
//     homeScreen.classList.add('hidden')

//     const playScreen=document.getElementById('play-screen');
//     playScreen.classList.remove('hidden');
// }




// 4
function handleKeyboardButtonPressed(event){
    const playerPressed=event.key;
    if(playerPressed==='Escape'){
        gameOver()
    }
    // console.log('button pressed', playerPressed);
    
    // get the expected to press
    const currentAlphabetElement=document.getElementById('current-alphabet')
    const currentAlphabet=currentAlphabetElement.innerText;
    const expectedAlphabet=currentAlphabet.toLowerCase();
    // console.log(playerPressed,expectedAlphabet);

    // check matched or not
    if(playerPressed===expectedAlphabet){
        // console.log('you get a point');
        const currentScore=getTextElementValueById('current-score');
        const updatedScore=currentScore+1;
        setTextElementValueById('current-score',updatedScore);
     
        // start new round
        removeBackgroundColorById(expectedAlphabet)
        continueGame()

    }else{
        // console.log('you missed, you lost a life') 
        const currentLife=getTextElementValueById('current-life');
        const updatedLife=currentLife-1;
        setTextElementValueById('current-life',updatedLife);

        if (updatedLife===0){
            console.log('game over');
            gameOver()
        }
    }
}


// callback function,, keyup hoile handleKeyboardButtonPressed function call hobe
document.addEventListener('keyup', handleKeyboardButtonPressed)


// 3
function continueGame() {

    //2 generate random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet is :', alphabet);

    //2.1 set randomly generated alphabet
    const currentAlphabet = document.getElementById('current-alphabet')
    currentAlphabet.innerText = alphabet;

    //2.2 set background color
    addBackgroundColorById(alphabet);
}

function play() {
    // hide everything show only playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-screen');

    // reset score of life
    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score',0);

    continueGame();
}

function gameOver(){
    hideElementById('play-screen');
    showElementById('final-score');
    // update final score

    // type1 
    // const currentScore=document.getElementById('current-score');
    // const finalGameScore=document.getElementById('game-score');
    // const Score=currentScore.innerHTML;
    // finalGameScore.innerHTML=Score;
    // or type2 
    const currentScore=getTextElementValueById('current-score');
    console.log('current score is ..',currentScore);
    setTextElementValueById('game-score',currentScore);

    // clear the last selected alphabet highlight
    const currentAlphabet=getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}
