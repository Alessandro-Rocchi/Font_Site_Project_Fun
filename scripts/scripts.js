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
        'Rockwell'
    ];

const phrase1 = document.getElementById('phrase1');
const phrase2 = document.getElementById('phrase2');
const phrase3 = document.getElementById('phrase3');
const button = document.getElementById('btnShuffle');

function Randomfont(){
    const randomFont1 = font_list[Math.floor(Math.random() * font_list.length)];
    const randomFont2 = font_list[Math.floor(Math.random() * font_list.length)];
    const randomFont3 = font_list[Math.floor(Math.random() * font_list.length)];
    phrase1.style.fontFamily = randomFont1;
    phrase2.style.fontFamily = randomFont2;
    phrase3.style.fontFamily = randomFont3;
}

button.addEventListener('click', Randomfont);

window.addEventListener('load', () => {
    button.click();
});

window.addEventListener('keydown', (event) => {
    if (event.key === '32' || event.code === 'Space') {
        event.preventDefault(); 
        button.click();
    }
});