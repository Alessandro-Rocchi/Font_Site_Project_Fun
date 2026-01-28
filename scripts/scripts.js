/*const font_list= [
        'Arial', 
        'Courier New', 
        'Georgia', 
        'Impact', 
        'Times New Roman', 
        'Verdana', 
        'Trebuchet MS',
        'Comic Sans MS',
        'Lucida Console',
        'Palatino Linotype',
        'Tahoma',
        'Garamond',
        'Bookman',
        'Candara',
        'Calibri',
        'Futura',
        'Helvetica',
        'Optima',
        'Didot',
        'Rockwell'
    ];*/

const phrase1 = document.getElementById('phrase1');
const phrase2 = document.getElementById('phrase2');
const phrase3 = document.getElementById('phrase3');
const button = document.getElementById('btnShuffle');
let arrayDati = [];

async function caricaDati() {
  try {
    const risposta = await fetch('./font_database/font.json');
    
    arrayDati = await risposta.json();

    Randomfont();
    
  } catch (errore) {
    console.error("Errore nel caricamento:", errore);
  }
}


function Randomfont(){
    if (arrayDati.length === 0) {
        console.error("L'array dei dati è vuoto. Assicurati che i dati siano stati caricati correttamente.");
        return;
    }
    const randomFont1 = arrayDati[Math.floor(Math.random() * arrayDati.length)];
    const randomFont2 = arrayDati[Math.floor(Math.random() * arrayDati.length)];
    const randomFont3 = arrayDati[Math.floor(Math.random() * arrayDati.length)];
    phrase1.style.fontFamily = randomFont1;
    phrase2.style.fontFamily = randomFont2;
    phrase3.style.fontFamily = randomFont3;
}

button.addEventListener('click', Randomfont);

window.addEventListener('keydown', (event) => {
    if (event.key === '32' || event.code === 'Space') {
        event.preventDefault(); 
        button.click();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    console.log("Pagina caricata, avvio il caricamento dati...");
    caricaDati();
});