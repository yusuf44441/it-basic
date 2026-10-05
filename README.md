# Portfolio-website

Een persoonlijke portfolio-website gebouwd met HTML, CSS en JavaScript.

## Projectstructuur

```
ITWeek2/
├── index.html      # Hoofdpagina
├── css/
│   └── style.css   # Stijlen
├── js/
│   └── main.js     # Interactie (formulier, smooth scroll, jaar)
└── README.md
```

## Functionaliteiten

- Secties: Home, Over mij, Projecten en Contact
- Responsive projecten-grid met behulp van CSS Grid
- Contactformulier met validatie in JavaScript
- Smooth scroll bij navigatie
- Automatisch huidig jaar in de footer

## Aan de slag

De website heeft geen build-stappen of dependencies nodig. Open `index.html` gewoon in een browser.

### Lokaal serveren (optioneel)

```bash
# Met Python
python -m http.server 8000

# Met Node.js (als `npx` beschikbaar is)
npx serve
```

Ga daarna naar `http://localhost:8000`.

## Aanpassen

- Vervang **Jouw Naam** in `index.html` en `main.js` door je eigen naam.
- Vul de sectie "Over mij" en de projectkaarten in met je eigen tekst.
- Pas kleuren aan in de `:root` variabelen bovenaan `css/style.css`.

## Licentie

Vrij te gebruiken voor educatieve doeleinden.