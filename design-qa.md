# Design-QA – BITTE STIL Baukasten V1.1.1

## Prüfziel

Abgleich des neuen Headers und des ausklappbaren MIT-Lizenztexts mit den vom
Lizenzfinder vorgegebenen Gestaltungs- und Interaktionsmustern.

## Quellen und Umsetzung

- Header-Referenz: `/Users/johanneskoch/Desktop/Bildschirmfoto 2026-08-19 um 20.09.54.png`
- Lizenztext-Referenz: `/Users/johanneskoch/Desktop/Bildschirmfoto 2026-08-19 um 20.07.51.png`
- Implementierung: `bitte-stil-baukasten.html`
- Header-Aufnahme: `audits/evidence/V1_1_1-header-full-1571.png`
- Lizenzdialog-Aufnahme: `audits/evidence/V1_1_1-license-implementation.png`
- Gemeinsame Vergleichsansicht: `audits/evidence/V1_1_1-visual-comparison.png`

## Viewports, Abmessungen und Zustand

- Header: Browser-Viewport 1571 × 714 CSS-Pixel bei DPR 1; Aufnahme 1556 × 707 Pixel nach Abzug der Browserflächen. Die Retina-Referenz mit 3142 × 714 Pixeln wurde für den fokussierten Vergleich auf 1556 × 353 Pixel normalisiert.
- Lizenzdialog: angeforderter mobiler Viewport 365 × 805 CSS-Pixel; sichtbare Aufnahme 350 × 772 Pixel. Die Referenz wurde auf dieselben sichtbaren Abmessungen normalisiert.
- Sprache: Deutsch aktiv; Englisch zusätzlich funktional geprüft.
- Lesbarkeit: Standardzustand im Bild; aktivierter Lesbarkeitsmodus und A+/A− zusätzlich funktional geprüft.
- Dialog: „Über diese Anwendung“ geöffnet, „Lizenztext anzeigen“ aufgeklappt und auf den Beginn des vollständigen MIT-Texts gescrollt.

## Vergleich und Befunde

### Vollansicht

- Petrol/Türkis-Farbwelt, heller Verlauf, zentriertes Inhaltsraster und kantige Typografie entsprechen der Designsprache des Lizenzfinders.
- Produktname, DE/EN-Segment, „Bessere Lesbarkeit“ und A−/A+ sind als kompakte Kopfleiste konsistent angeordnet.
- Der zweizeilige Hero übernimmt Hierarchie und Farbwechsel der Referenz, bleibt aber inhaltlich spezifisch für den BITTE STIL Baukasten.

### Fokussierte Komponenten

- Der MIT-Bereich nutzt dasselbe native Disclosure-Muster mit kräftiger Zusammenfassung, Trennlinie und monospacigem Lizenzblock.
- Der vollständige MIT-Text einschließlich `Copyright (c) 2026 Johannes Koch` ist enthalten.
- Der Dialog bleibt im mobilen Viewport scrollbar; es entsteht kein horizontaler Seitenüberlauf.
- DE/EN aktualisiert sichtbare Texte, `lang`, ARIA-Beschriftungen und gedrückte Zustände.
- Der Lesbarkeitsmodus aktiviert Verdana/Systemschrift und erhöht Zeilenabstand sowie Ausgangsschriftgröße.
- A−/A+ verändern die Root-Schriftgröße in begrenzten Stufen und geben den aktuellen Wert über einen Live-Status aus.

### Schweregrade

- P0: keine Befunde
- P1: keine Befunde
- P2: keine Befunde

## Iterationshistorie

1. Fehlenden MIT-Disclosure ergänzt und Dialog-Scrolling abgesichert.
2. Header nach Lizenzfinder-Raster aufgebaut; Sprache, Lesbarkeit und Schriftgröße integriert.
3. Desktop- und Mobilzustand im Browser geprüft und gemeinsam mit den Referenzen verglichen.

## Final result

passed
