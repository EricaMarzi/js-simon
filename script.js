/*
### Descrizione:

Tutte le validazioni sono da considerarsi bonus.
#### Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
#### BONUS:
* Come detto, le validazioni 
* Volendo, potreste provare a farlo con degli input che compaiono in pagina dopo che scompaiono i numeri, invece che coi prompt
*/

const printCountDown = document.getElementById("count-down");
const printRandomize = document.getElementById("random-numbers");
const title = document.getElementById("title");

const inputGroup = document.getElementById("input-group");
const buttonInput = document.getElementById("button");
const firstInput = document.getElementById("value-1");
const secondInput = document.getElementById("value-2");
const thirdInput = document.getElementById("value-3");
const fourthInput = document.getElementById("value-4");
const fifthInput = document.getElementById("value-5");

//! Funzioni ------------------
const pushInArray = () => {
    userNumbers.push(parseInt(firstInput.value))
    userNumbers.push(parseInt(secondInput.value))
    userNumbers.push(parseInt(thirdInput.value))
    userNumbers.push(parseInt(fourthInput.value))
    userNumbers.push(parseInt(fifthInput.value))
}

const compare = () => {
    const comparate = []
    for(let i = 0; i < numbers.length; i++) {
        //prendi i numeri dell'array userNumbers e falli girare su numbers
        
        if (userNumbers[0] === numbers[i]
            || userNumbers[1] === numbers[i]
            || userNumbers[2] === numbers[i]
            || userNumbers[3] === numbers[i]
            || userNumbers[4] === numbers[i]){
            console.log(numbers[i]);
            comparate.push(numbers[i]);
            title.innerText = "Hai indovinato " + comparate;
        } else {
            title.innerText = "Hai perso";

        }
    }
    console.log(comparate);
}

//! ---------------------------
// ✓ Visualizzare in pagina 5 numeri casuali.Da lì parte un timer di 30 secondi.
const numbers = [];
while (numbers.length < 5) {
    const randomize = Math.floor(Math.random() * 100) +1;
    
    if(!numbers.includes(randomize)) {
        numbers.push(randomize);
    }
}
console.log(numbers);

let listItem = "<ul>";
for (let i = 0 ; i < numbers.length; i++) {
    listItem += `<li>${numbers[i]}</li>`;
}
listItem += "</ul>";
printRandomize.innerHTML = listItem;



// ✓ Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). 
let cd = 5; //! RICORDATI DI RIMETTERE 30
const countDown = setInterval(() => {
    printCountDown.innerText = --cd
    if (cd <= 0) {
        clearInterval(countDown);
        printRandomize.innerText = "";
        printCountDown.classList.add("d-none");
        title.innerText = "Inserisci i numeri!";
        inputGroup.classList.remove("d-none");
    }
}, 1000);


// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. 

const userNumbers = [];
buttonInput.addEventListener("click", function(e) {
    e.preventDefault();

    pushInArray();
    console.log(userNumbers);

    compare();

})
