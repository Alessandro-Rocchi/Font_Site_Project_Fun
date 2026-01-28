const font_list= [
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
        'Rockwell',
        'Gill Sans',
        'Franklin Gothic Medium',
        'Century Gothic',
        'Baskerville',
        'Copperplate',
        'Brush Script MT',
        'Consolas',
        'Monaco',
        'Lucida Sans Unicode',
        'Segoe UI',
        'Avant Garde',
        'Avenir',
        'Cochin',
        'Perpetua',
        'Trajan Pro',
        'Zapfino',
        'Harrington',
        'Vivaldi',
        'Papyrus',
        'Stencil',
        'Broadway',
        'Algerian',
        'Chiller',
        'Curlz MT',
        'Jokerman',
        'Mistral',
        'Old English Text MT',
        'Rage Italic',
        'Showcard Gothic',
        'Viner Hand ITC',
        'Wingdings',
        'Wingdings 2',
        'Wingdings 3',
        'Webdings',
        'Lucida Handwriting'
    ]

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
    const mixedFonts = [...font_list].sort(() => 0.5 - Math.random());
    const font1 = mixedFonts[0];
    const font2 = mixedFonts[1];
    const font3 = mixedFonts[2];
    phrase1.style.fontFamily = font1;
    phrase2.style.fontFamily = font2;
    phrase3.style.fontFamily = font3;
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