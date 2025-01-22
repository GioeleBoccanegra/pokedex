# Pokedex Search App

Questa è una semplice applicazione web che consente agli utenti di cercare un Pokémon per nome e visualizzare le sue informazioni di base, tra cui sprite, tipo e statistiche (statistiche base). Utilizza la PokéAPI per recuperare i dati dei Pokémon.
utilizzabile qui: [gioele-boccanegra-pokedex-prima-gen.netlify.app](https://gioele-boccanegra-pokedex-prima-gen.netlify.app/)

## Funzionalità

- Ricerca dei Pokémon per nome tramite un campo di input.
- Visualizzazione delle seguenti informazioni sul Pokémon:
  - **Nome**: Il nome del Pokémon.
  - **Tipo**: Il tipo del Pokémon (ad esempio, Fuoco, Acqua).
  - **Sprite**: Un'immagine del Pokémon.
  - **Statistiche Base**: Le statistiche base del Pokémon (ad esempio, Attacco, Difesa).
- Viene visualizzato un messaggio di errore se il nome inserito non corrisponde a nessun Pokémon.

## Tecnologie Utilizzate

- **HTML** per la struttura della pagina.
- **CSS** per lo stile e il layout.
- **JavaScript** per recuperare i dati dalla PokéAPI e manipolare il DOM per visualizzare i risultati.

## Struttura dei File
# Stili per l'app 
/assets /css style.css 
# Logica per il recupero e la visualizzazione dei dati
/javascript script.js 
# La pagina principale HTML
/index.html 

## Come Usare

1. Apri il file `index.html` in un browser web.
2. Inizia a digitare il nome di un Pokémon nel campo di input (ad esempio, "bulbasaur").
3. Premi il pulsante "Cerca" per recuperare e visualizzare le informazioni sul Pokémon.

### Esempio:

1. Inserisci **"Pikachu"** nel campo di input.
2. Clicca su **"Cerca"**.
3. L'app mostrerà:
   - Il nome "Pikachu".
   - Il tipo "Elettrico".
   - L'immagine dello sprite di Pikachu.
   - Le statistiche base del Pokémon, inclusi Velocità, Attacco, ecc.

## Come Funziona

1. **Fetch Iniziale**: All'avvio della pagina, l'app recupera i nomi dei primi 151 Pokémon dalla PokéAPI.
2. **Ricerca**: Quando l'utente clicca sul pulsante "Cerca", il sistema verifica se il nome inserito corrisponde a un Pokémon disponibile.
3. **Visualizzazione Dati**: Se il Pokémon esiste, recupera i suoi dati dalla PokéAPI e visualizza lo sprite, il tipo e le statistiche base.
4. **Gestione Errori**: Se il nome non esiste, viene mostrato un messaggio di errore.

## Stile

L'app è progettata per essere semplice e reattiva:

- L'app appare correttamente sia su dispositivi mobili che desktop.
- Il contenitore `pokedex` è stilizzato con un bordo tratteggiato per separare visivamente i dati del Pokémon dal resto della pagina.
- Le statistiche di ciascun Pokémon sono visualizzate in un formato chiaro e leggibile.

## Personalizzazione

Puoi modificare quanto segue:

- Il numero di Pokémon visualizzati modificando il parametro `limit=151` nell'URL dell'API.
- **Design e layout** modificando il file CSS (`style.css`).

## Conclusioni

Questa è una semplice ma funzionale app web per cercare e visualizzare i dati dei Pokémon. È un ottimo punto di partenza per chi vuole imparare di più sullo sviluppo web, le API e la gestione dei dati dinamici.

**Autore**: [Gioele Boccanegra]  
**Licenza**: MIT
