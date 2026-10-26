# Specificatie: Projectoverzicht-pagina (Challenge 4)

## Doel
Een projectenpagina toevoegen aan de bestaande portfolio waarop minimaal drie
projecten overzichtelijk worden gepresenteerd, in dezelfde uitstraling als de
rest van de site.

## Wat een bezoeker moet kunnen zien of doen
- Vanaf de homepage doorklikken naar de projectenpagina via de projectkaarten.
- Op de projectenpagina minimaal drie projecten zien met naam, korte omschrijving
  en gebruikte technieken.
- Terug navigeren naar de homepage.
- De pagina moet ook op een telefoon goed leesbaar zijn (responsive grid).

## Te bouwen onderdelen
1. Nieuwe pagina `projecten.html` met dezelfde basisstructuur als `index.html`.
2. Sectie "Alle projecten" met een project-grid van drie kaarten.
3. Per kaart: projectnaam, omschrijving en technieken.
4. Klikbare projectkaarten op de homepage die naar `projecten.html` linken.
5. CSS voor klikbare kaarten en de techniekenregel.
6. Aanpassing van `js/main.js` zodat deze ook op de projectenpagina foutloos werkt.

## Bestaande bestanden die waarschijnlijk veranderen
- `index.html` - kaarten klikbaar maken en inhoud aanvullen
- `css/style.css` - `.project-card-link` en `.project-technieken`
- `js/main.js` - footertekst, formulier-guard en navigatie

## Nieuwe bestanden
- `projecten.html`

## Definition of done
- `projecten.html` bestaat en toont minimaal drie projecten met naam,
  omschrijving en technieken.
- De homepage linkt naar `projecten.html` en de teruglink werkt.
- De vormgeving sluit aan bij de bestaande portfolio.
- Er zijn geen JavaScript-fouten op beide pagina's.
- De bestaande functionaliteiten (smooth scroll, contactformulier,
  footer-jaar) werken nog.
