# Stappenplan: Projectoverzicht-pagina

## Stap 1 - Voorbereiding controleren
- **Wat:** Lees index.html, css/style.css en js/main.js om de structuur en bestaande stijlen te begrijpen (focus op .project-grid en projectkaarten).
- **Bestand:** index.html, css/style.css, js/main.js (lezen)
- **Waarom:** Zodat wijzigingen op de juiste plek worden aangebracht zonder bestaande code te breken.

## Stap 2 - Nieuwe pagina projecten.html aanmaken
- **Wat:** Maak een nieuwe pagina projecten.html met dezelfde basisstructuur als index.html: DOCTYPE, lang="nl", meta-tags, link naar css/style.css, header (logo + "Terug naar Home" naar index.html), main met sectie "Alle projecten" + project-grid met 3 kaarten (Project 1-3), footer, script naar js/main.js.
- **Bestand:** projecten.html (nieuw)
- **Waarom:** Voldoet aan doel om overzichtspagina te hebben.

## Stap 3 - Projectkaarten op homepage klikbaar maken
- **Wat:** Wijzig index.html: wrap elk <article class="project-card"> (3 stuks) in <a href="projecten.html" class="project-card-link">.
- **Bestand:** index.html (wijzigen)
- **Waarom:** Gebruiker wil vanaf homepage naar overzicht navigeren.

## Stap 4 - CSS aanpassen voor klikbare kaarten
- **Wat:** Voeg in css/style.css .project-card-link { text-decoration: none; color: inherit; display: block; } toe en zorg voor consistente hover (bijv. .project-card-link:hover .project-card, .project-card:hover { box-shadow: ... }).
- **Bestand:** css/style.css (wijzigen)
- **Waarom:** Hele kaart klikbaar zonder standaard linkstyling; behoud visuele feedback.

## Stap 5 - JavaScript controleren en beveiligen
- **Wat:** Controleer js/main.js: zorg dat footer-jaar wordt gezet met 	extContent (geen innerHTML gebruiken). Vervang indien nodig.
- **Bestand:** js/main.js (eventueel wijzigen)
- **Waarom:** Voorkomt potentieel XSS-risico bij dynamisch tekst.

## Stap 6 - Visuele controle
- **Wat:** Open index.html en projecten.html in browser. Test: kaarten klikken, teruglink, grid zichtbaar, responsive look.
- **Bestand:** n.v.t. (testen)
- **Waarom:** Directe verificatie tegen specificatie.

## Stap 7 - Regressietest
- **Wat:** Test homepage functionaliteit: smooth scroll via nav-links, contactformulier (validatie, submit toont status, reset na succes), footer toont correct huidig jaar.
- **Bestand:** index.html, js/main.js (testen)
- **Waarom:** Geen bestaande functionaliteit breken.

## Stap 8 - Afronden en controle
- **Wat:** Controleer: projecten.html bestaat; index.html heeft 3 links naar projecten.html; "Alle projecten" staat in projecten.html; CSS bevat .project-card-link; geen fouten zichtbaar.
- **Bestand:** projecten.html, index.html, css/style.css (controle)
- **Waarom:** Voldoet aan acceptatiecriteria.
