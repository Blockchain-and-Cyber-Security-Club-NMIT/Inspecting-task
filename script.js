
const elementToMonitor = document.querySelector('.hidden');
const damagedBlock = document.querySelector('#damagedBlock');
const damagedId = document.querySelector('#damagedId')

let previousDisplay = window.getComputedStyle(elementToMonitor).getPropertyValue('display');
let previousId = '!!!!!!';

function checkDisplayChange() {
    const currentDisplay = window.getComputedStyle(elementToMonitor).getPropertyValue('display');
    if (damagedId.innerText !== previousId) {
        if(currentDisplay == "block"){
            console.log("Get to the volunter for the next step !!!");
        }
        previousId = damagedId.innerText;
    }
    if (currentDisplay !== previousDisplay) {
        damagedBlock.innerHTML = "This is a general block in the blockchain network containing data and transaction records.";
        previousDisplay = currentDisplay;
    }
}

setInterval(checkDisplayChange, 1000);

const trigger = document.querySelectorAll(".block");
const popup = document.querySelectorAll(".popup");
const close = document.querySelectorAll(".close");
trigger.forEach((block, index) => {
    block.addEventListener('click', () => {
        popup[index].style.display = 'block';
    })
})

close.forEach((item, index) => {
    item.addEventListener('click', () => {
        popup[index].style.display = "none";
    })
})

