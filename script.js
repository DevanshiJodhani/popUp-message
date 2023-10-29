
let popUp = document.querySelector('.popup-msg');
let submitBtn = document.querySelector('.submit');

function openpopup() {
    popUp.classList.add('open-popup');

}

function closepopup() {
    popUp.classList.remove('open-popup');
    
}

submitBtn.addEventListener('click', openpopup);

let okBtn = document.querySelector('.popup');
okBtn.addEventListener('click', closepopup)