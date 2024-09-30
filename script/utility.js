
// 1 hide and show element

function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
    return element;
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove("hidden");
}

function addBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getTextElementValueById(elementId) { 
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId)
    const text=element.innerText;
    return text ;
}


// 2 get rendom alphabet
function getARandomAlphabet() {
    // 2.1 create an alphabet array or string(split(''))
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';    //string
    const alphabets = alphabetString.split('');

    // 2.2 get a random index between 0 to 25 and round
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);


    // 2.3 get the value of alphabet index
    const alphabet = alphabets[index];
    // console.log(index, alphabet);
    return alphabet;

}



