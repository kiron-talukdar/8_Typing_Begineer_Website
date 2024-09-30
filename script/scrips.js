// //1 hide and show element
// // function play(){
// //     const homeScreen=document.getElementById('home-screen');
// //     homeScreen.classList.add('hidden')

// //     const playScreen=document.getElementById('play-screen');
// //     playScreen.classList.remove('hidden');
// // }


// ............................  28.4 porjonto code...

// // 4
// function handleKeyboardButtonPressed(event){
//     const playerPressed=event.key;
//     // console.log('button pressed', playerPressed);
    
//     // get the expected to press
//     const currentAlphabetElement=document.getElementById('current-alphabet')
//     const currentAlphabet=currentAlphabetElement.innerText;
//     const expectedAlphabet=currentAlphabet.toLowerCase();
//     console.log(playerPressed,expectedAlphabet);

//     // check matched or not
//     if(playerPressed===expectedAlphabet){
//         console.log('you get a point');

//         // update score 
//         // 1 get current score
//         const currentScoreElement=document.getElementById('current-score')
//         const currentScoreText=currentScoreElement.innerHTML;
//         const currentScore=parseInt(currentScoreText);
//         // console.log('current score', currentScoreText);

//         // 2. increase the score by 1
//         const newScore=currentScore+1;
//         // 3. show the update score
//         currentScoreElement.innerText=newScore;


//         // start new round
//         removeBackgroundColorById(expectedAlphabet)
//         continueGame()

//     }else{
//         console.log('you missed, you lost a life') 
//         // step1 get the current life number
//         const currentLifeElement=document.getElementById('current-life');
//         const currentLifeText=currentLifeElement.innerText;
//         const currentLife= parseInt(currentLifeText);
//         // step2 reduce the life count
//         const newLife=currentLife-1;
//         // step3 display the updated life
//         currentLifeElement.innerText=newLife;
//     }
//     }




// // callback function,, keyup hoile handleKeyboardButtonPressed function call hobe
// document.addEventListener('keyup', handleKeyboardButtonPressed)


// // 3
// function continueGame() {

//     //2 generate random alphabet
//     const alphabet = getARandomAlphabet();
//     // console.log('your random alphabet is :', alphabet);

//     //2.1 set randomly generated alphabet
//     const currentAlphabet = document.getElementById('current-alphabet')
//     currentAlphabet.innerText = alphabet;

//     //2.2 set background color
//     addBackgroundColorById(alphabet);
// }

// function play() {
//     hideElementById('home-screen')
//     showElementById('play-screen')
//     continueGame()
// }