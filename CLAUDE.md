# HELIOS-Website — Projektkontext

Astro-Nachbau von https://www.helios-hilfen.de (WordPress, Uncode-Theme) für
HELIOS Hilfen GmbH, Bad Vilbel (Tochter von IEV, siehe `../08-01-iev-website`).
Auftrag (23.10.2026): Seite 1:1 nachbauen, inklusive Animationen. Maße und
Farben sind am Original bei 1440px Breite gemessen.

## Stack
- Astro 7, statisch, Bilder über `astro:assets` (AVIF/WebP)
- Montserrat (variabel, @fontsource-variable), selbst gehostet
- Deployment: Cloudflare Workers (statische Assets, `wrangler.jsonc`)
- `build.format: 'file'` + `trailingSlash: 'never'`

## Aufbau
- One-Pager `src/pages/index.astro`: Hero, Vision/Leitbild, Leistungen
  (Akkordeon), Team. Dazu Impressum, Datenschutz, 404
- Inhalte zentral in `src/data/site.ts` (Kontakt, Abschnitte, Team, Leistungen)
- Bilder aus dem Kundenordner (`05_images`), Logo aus
  `02_final_documents/HELIOS/_Logo/RGB/export/SVG` (cls-Klassen → feste Füllfarben)

## Animationen (`src/scripts/motion.ts`, Werte wie Uncode)
- `data-anim`: fade (1s), ltr/rtl (100px seitlich), btt (100px von unten),
  zoom (ab 50%); optional `--dur` / `--delay` per style
- `SplitHeading.astro`: Wörter einzeln; `[[…]]` = Hervorhebung, wird Wort
  für Wort gezeichnet (400ms + 200ms je Wort). Varianten label/marker/underline,
  `curtain` = Wörter steigen aus Maske (0.8s, 50ms versetzt)
- `data-parallax="speed"` wie Rellax, `data-parallax-center` = Ruhelage in der
  Bildschirmmitte; nur ab 960px. Parallax nie auf dasselbe Element wie
  `data-anim` setzen (Animation überschreibt transform) – immer verschachteln
- Header schrumpft beim Scrollen (134 → 87px), Scrollspy für Menü und
  Punkt-Navigation rechts
- Alles nur mit JS (`.js` am `<html>`) und ohne „Bewegung reduzieren“

## Bewusste Abweichungen vom Original
- Kein Cookie-Banner (keine Cookies, kein Tracking)
- Footer schlicht grau (#f7f7f7) ohne animierten Farbverlauf (Wunsch 23.10.2026)
- Google Maps im Footer erst nach Klick („Karte laden“)
- Datenschutzerklärung ist ein Platzhalter: der alte Text (Datenschutz-
  Generator.de) beschreibt WordPress, Cookies und Statistik → vor Livegang
  für das neue Setup neu erstellen
- Leistungen haben sprechende Anker (`/#familienhilfe` usw.), die den
  Eintrag öffnen

## Design-Entwürfe (23.10.2026, noch nicht freigegeben)
- `/entwurf-a` („Zukunft in Sicht“) und `/entwurf-b` („Nah am Menschen“):
  zwei Vorschläge für eine neue Startseite, HELIOS-CI (Orange, Montserrat)
- Eigenes Layout `DraftLayout.astro` + `draft-base.css` (noindex), Zusatzdaten
  in `src/data/entwurf.ts`, Fotos aus `05_images/Stock-Fotos` in
  `src/assets/images/entwurf/`. Die bestehende Startseite ist unverändert
- Neu formulierte Texte (Ablauf-Schritte, Zielgruppen-Zeilen, Headlines)
  vom Kunden freigeben lassen
- `/entwurf-c`: die bestehende Startseite, gezielt verbessert (gleiche
  Komponenten). Unterschiede nur über `variant="c"`-Props und
  `src/styles/redesign-c.css` (alles unter `[data-variant='c']`), die
  Originalseite bleibt unverändert
- `/entwurf-d` („Pergament & Sonne“): Anmutung nach einer Refero-Stilreferenz
  (Monad: Pergament-Grund, Serife 400, Monospace-UI, Pillen, Haarlinien,
  Pastell-Schleier). Schriften Source Serif 4 + JetBrains Mono (nur hier,
  weicht von Montserrat ab). Interaktives Fluss-Diagramm Zielgruppe → Sonne →
  Hilfen; Styles global unter `.d` in der Seite selbst
- `/entwurf-e` („Zink & Orange“): Anmutung nach Refero-Stil „Awesomic“
  (Zink-Graustufen, ein Orange-Akzent, Montserrat 600, 36px-Karten,
  Haarlinien). Wechselndes Wort in der Headline, Anfrage-Feld öffnet eine
  E-Mail mit dem Anliegen, Bild-Galerie mit Auto-Weiterblättern. Styles
  global unter `.e` in der Seite selbst
- `/entwurf-f` („Familienähnlichkeit“): Stimmung der IEV-Website, aber
  jünger. Geteilt mit IEV: Anthrazit/Creme, Abschnittskopf links/rechts,
  Kennzahlen, Statement mit Wort-Einfärben, magnetische Knöpfe, Creme-Footer.
  Anders: Montserrat 800 statt Serife, Orange/Gelb statt Rot, Pillen und
  große Radien, Fotos mit Bogen oben, Leistungen als Tabs, „o“ als Sonne statt
  roter i-Punkt. Styles global unter `.f` in der Seite selbst
  - Stand 26.10.2026 (Kundenwunsch): Texte und Navigation 1:1 von der
    Live-Seite (Willkommen, Unser Leitbild, Leistungen, Unser Team), Logo größer
    (64px Nav), Animationen nach Logo-Bedeutung: Das Icon ist eine Sonne, die
    Strahlen abgibt. `src/components/HeliosMark.astro` zerlegt das Logo
    (CMYK-SVG) in Sonne, drei Strahlen und Schriftzug; Strahlen skalieren aus
    dem Sonnen-Mittelpunkt (52/74 im Logo-viewBox)

## Offene Punkte
- Datenschutzerklärung neu erstellen
- Team: alle vier Karten nutzen dasselbe Avatar-Bild (wie im Original)
- „Clearing - in Arbeit“ ist im Original so betitelt

## Befehle
```
npm install
npm run dev      # lokaler Dev-Server (Launch-Config „helios-dev“, Port 4323)
npm run build    # Production-Build nach dist/
npx wrangler deploy
```
