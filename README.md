# Portfolio-website

Een persoonlijke portfolio-website gebouwd met HTML, CSS en JavaScript.

## Projectstructuur

```
ITWeek2/
├── index.html               # Hoofdpagina
├── projecten.html           # Projectoverzicht (Challenge 4)
├── css/
│   └── style.css            # Stijlen
├── js/
│   └── main.js              # Interactie (formulier, smooth scroll, jaar)
├── SPECIFICATIE_PROJECTEN.md # Specificatie van de projectenpagina
├── STAPPENPLAN_PROJECTEN.md  # Stappenplan van de uitvoering
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

## Ontwikkelgeschiedenis (Challenge 4)

De opdracht is uitgevoerd volgens de werkwijze
**Analyseer -> Specificeer -> Plan -> Bouw -> Controleer**. Hieronder staat
wat er met OpenCode is besproken en welke keuzes zijn gemaakt.

### 1. Analyseren
OpenCode analyseerde eerst de bestaande portfolio zonder bestanden aan te
passen. Belangrijkste bestanden: `index.html` (structuur en secties),
`css/style.css` (kleuren, `.container`, `.project-grid`, `.project-card`) en
`js/main.js` (footer-jaar, contactformulier, smooth scroll). Alleen
`index.html`, `css/style.css` en `js/main.js` hoefden te veranderen; de
projectenpagina was een nieuw bestand.

### 2. Specificeren
Er is een specificatie opgesteld (`SPECIFICATIE_PROJECTEN.md`) met het doel,
wat een bezoeker moet kunnen zien, welke onderdelen gebouwd worden en de
definition of done. Deze is gecontroleerd voordat er code werd geschreven.

### 3. Plannen
Het plan staat in `STAPPENPLAN_PROJECTEN.md`: kleine stappen met per stap wat
er gebeurt, welk bestand verandert en waarom.

### 4. Bouwen en controleren
Er is stap voor stap gewerkt: eerst `projecten.html`, daarna de klikbare
kaarten op de homepage, toen de CSS en als laatste `js/main.js`. Na elke stap
is de pagina in de browser bekeken en getest.

### Keuzes en aanpassingen van AI-voorstellen
- OpenCode stelde aanvankelijk voor om de footer-tekst via `innerHTML` te
  vullen. Omdat dynamische tekst via `innerHTML` een XSS-risico geeft, is
  gekozen voor `textContent`. Daarbij bleek de entiteit `&copy;` letterlijk
  getoond te worden; daarom is het echte teken `(c)` gebruikt.
- De smooth-scrollcode zette met `preventDefault()` **alle** links in de
  navigatie uit. Daardoor zou de "Terug naar Home"-link op `projecten.html`
  niet meer werken. Dit voorstel is aangepast: alleen echte ankerlinks
  (`href` begint met `#`) worden nog afgevangen.
- De formuliercode in `main.js` ging ervan uit dat `#contact-form` bestaat.
  Omdat dat element op `projecten.html` niet voorkomt, gaf dat een
  JavaScript-fout. Er is een `if (form && status)`-guard toegevoegd.

### Testen
- Beide pagina's in de browser geopend: geen JavaScript-fouten.
- Footer toont het juiste jaar en `(c)` in plaats van `&copy;`.
- Klikken op een projectkaart opent `projecten.html`; "Terug naar Home" werkt.
- Contactformulier op de homepage: validatie en statusmelding werken nog.
- Smooth scroll vanaf de navigatie werkt nog.

## Aanpassen

- Vervang **Jouw Naam** in `index.html` en `main.js` door je eigen naam.
- Vul de sectie "Over mij" en de projectkaarten in met je eigen tekst.
- Pas kleuren aan in de `:root` variabelen bovenaan `css/style.css`.

## Licentie

Vrij te gebruiken voor educatieve doeleinden.