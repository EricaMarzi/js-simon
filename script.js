/*
### Descrizione:
Visualizzare in pagina 5 numeri casuali.Da lì parte un timer di 30 secondi.<br>
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). <br>
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. <br>

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
const inputGroup = document.getElementById("input-group")


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
    listItem += `<li>${numbers[i]}</li>`
}
listItem += "</ul>";
printRandomize.innerHTML = listItem;



let cd = 5;
const countDown = setInterval(() => {
printCountDown.innerText = --cd
if (cd <= 0) {
    clearInterval(countDown);
    printRandomize.innerText = "";
    inputGroup.classList.remove("d-none")
}
}, 1000);