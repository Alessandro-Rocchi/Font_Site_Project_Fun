🖋️ Font: Fuck, Marry, Kill
Salva l'Helvetica, sposa il Futura, elimina il Comic Sans.

Font FMK è un gioco web interattivo che rivisita il classico passatempo "Fuck, Marry, Kill" in chiave tipografica. Metti alla prova i tuoi gusti da designer: ti vengono presentati tre font casuali e devi decidere il destino di ognuno.

🎮 Come si gioca
Le regole sono semplici, ma le scelte sono difficili:

Il Round: Ti vengono mostrati 3 font diversi presi da una lista curata (o tramite Google Fonts API).

La Scelta: Devi assegnare un'azione a ciascun font:

Fuck (L'avventura di una notte): Un font che useresti una volta sola per un progetto pazzo, ma mai per il branding aziendale.

Marry (Il matrimonio): Il tuo "workhorse". Affidabile, leggibile, lo useresti per tutto il resto della tua vita.

Kill (L'omicidio): Deve sparire dalla faccia della terra. Non lo vuoi mai più vedere nel tuo menu dei font.

Il Risultato: Vedi come hanno votato gli altri utenti (opzionale) o passa al prossimo trio.

✨ Funzionalità
🎲 Generazione Casuale: Algoritmo che pesca 3 font diversi ad ogni refresh o nuovo round.

📱 Design Responsivo: Giocabile su desktop e mobile (per giudicare i font ovunque tu sia).

🎨 Anteprima in Tempo Reale: Il nome del font viene renderizzato utilizzando il font stesso.

💾 Local Storage: Tiene traccia del tuo punteggio o delle tue scelte "Kill" più frequenti.

🛠️ Tecnologie Utilizzate
Il progetto è costruito interamente in Vanilla JS, senza dipendenze esterne pesanti.

HTML5: Struttura semantica.

CSS3: Flexbox/Grid per il layout, variabili CSS per il theming e animazioni per le transizioni.

JavaScript (ES6+): Logica di gioco, manipolazione del DOM e gestione degli eventi.

(Opzionale) Google Fonts API: Per caricare dinamicamente i font.

📂 Struttura del Progetto
Plaintext
font-fmk/
│
├── index.html        # Struttura principale
├── style.css         # Stili e animazioni
├── script.js         # Logica del gioco
├── assets/           # Icone e immagini
│   └── fonts.json    # (Opzionale) Database locale dei font
└── README.md         # Documentazione
🚀 Come iniziare
Non è richiesta alcuna installazione complessa (niente Node.js o npm per la versione base).

Clona la repository:

Bash
git clone https://github.com/tuo-username/font-fmk.git
Entra nella cartella:

Bash
cd font-fmk
Avvia il gioco:

Apri semplicemente il file index.html nel tuo browser preferito.

Opzionale: Se usi VS Code, puoi usare l'estensione "Live Server" per un'esperienza di sviluppo migliore.

🔮 Idee Future (Roadmap)
[ ] Modalità "Hardcore": Riconoscere il font solo da una lettera.

[ ] Integrazione Social: Condividi la tua triade "Kill" su Twitter/X.

[ ] Classifica Globale: Qual è il font più odiato al mondo? (Spoiler: Probabilmente Papyrus).

[ ] Dark Mode: Per i designer notturni.

🤝 Contribuire
I contributi sono benvenuti! Se hai un'idea per migliorare il codice o vuoi aggiungere una lista di font oscuri:

Forka il progetto.

Crea il tuo branch (git checkout -b feature/NuovaFeature).

Committa le tue modifiche (git commit -m 'Aggiunta NuovaFeature').

Pusha sul branch (git push origin feature/NuovaFeature).

Apri una Pull Request.

📄 Licenza
Distribuito sotto la licenza MIT. Vedi LICENSE per maggiori informazioni.

<p align="center"> Fatto con ❤️ e un sacco di ☕ </p>
