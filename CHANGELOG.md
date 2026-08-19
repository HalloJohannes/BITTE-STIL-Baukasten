# BITTE STIL Baukasten – Änderungshistorie

## Version 1.1.1 · 2026-08-19

- vollständigen MIT-Lizenztext im Bereich „Über diese Anwendung“ ausklappbar ergänzt
- Header nach dem Muster des Lizenzfinders mit kompakter Produktmarke und großer zweizeiliger Einführung aufgebaut
- Sprachumschaltung als DE/EN-Segment in die Kopfleiste überführt
- Lesbarkeitsmodus mit alternativer Systemschrift und größerem Zeilenabstand ergänzt
- zugängliche Schriftgrößensteuerung A−/A+ mit begrenzten Stufen und Statusausgabe ergänzt

## Version 1.1.0 · 2026-08-19

- Designsprache an SCHAU HIN Slides und den Lizenzfinder angeglichen: Petrol, Türkis, Mintflächen, kantige Karten, harte Schattenkante und pillenförmige Bedienelemente
- Formular, Prompt-Ausgabe und Merkkästen responsiv und visuell klarer gegliedert
- dezenten Button „Über diese Anwendung“ in der untersten Footer-Zeile ergänzt
- zweisprachigen, tastaturbedienbaren Infodialog mit Zweck, Version, Datenschutz, Entstehung, Lizenz und Prüfhinweis ergänzt
- Vibe-Coding-Entstehung transparent dokumentiert: erste Fassung mit Claude, anschließend mit Codex weiterentwickelt
- Content-Security-Policy für die weiterhin vollständig eigenständige Offline-HTML ergänzt

## Version 1.0.0 · 2026-08-19

- kontrollierte Repository-Struktur nach dem Muster von Escape Studio und SCHAU HIN Slides aufgebaut
- führende Quelle, reproduzierbarer Build, automatisierte Prüfungen, Release-Metadaten und Versionsspiegel eingeführt
- unveränderten Ausgangsstand unter `archive/vor-governance/` gesichert
- repository-lokalen Codex-Marketplace und das Plugin `bitte-stil-baukasten` ergänzt
- MIT-Lizenz mit Copyright Johannes Koch ergänzt
- letzte sichtbare Zeile um einen verlinkten MIT-Hinweis erweitert; der Name verweist weiterhin auf LinkedIn
- GitHub-Actions-Prüflauf und Veröffentlichungsdokumentation ergänzt
- GitHub-Pages-Build und automatisierte Veröffentlichung für das öffentliche Repository ergänzt

## Versionierungs-Konvention

- Die **aktuelle Version** liegt immer auf der obersten Ebene dieses Ordners:
  `bitte-stil-baukasten.html`
- Bei jedem Änderungsauftrag wird die bestehende Datei **zuerst** nach `Versionen/`
  kopiert (Schema: `bitte-stil-baukasten_v<Nr>_<JJJJ-MM-TT>.html`), danach wird
  die Datei auf oberster Ebene durch die neue Version ersetzt.
- Jede neue Version bekommt hier einen Changelog-Eintrag (neueste oben).

---

## Version 1 (Ausgangsstand) · 2026-08-18

Erster versionierter Stand. Funktionsumfang:

- Formulierungshilfe für Bild-Prompts: beschreibt die **gestalterischen
  Rahmenbedingungen** (nicht den Inhalt) – mit Platzhalter für das eigene Motiv
- Dropdowns mit Freitext-Optionen: Wofür?, Bildtyp, Stil, Farbwelt, Format,
  Detailtiefe, Hintergrund, Anmutung
- Farbwelt „Konkrete Farben festlegen“: Primär-, Sekundär-, Akzent- und
  Hintergrundfarbe (Farbnamen oder Hex, CI-tauglich)
- **„Du Profi!“**-Bereich (ausklappbar): drei Detail-Dropdowns plus Freitext,
  automatisch abgestimmt auf den gewählten Bildtyp
- **Vielfalt & Stereotype**: Mehrfachauswahl aus sechs sensibel formulierten
  Gestaltungsaufträgen plus Freitext; Hinweis, dass die Angabe den prüfenden
  Blick aufs Ergebnis nicht ersetzt
- **Barrierefreiheit**: Checkbox für Alternativtext (ohne Längenvorgabe)
- Serien-Option für Wiedererkennbarkeit; Negativangaben („Was soll nicht ins Bild?“)
- Fester Schlusssatz zur **KI-Kennzeichnung im Bild** (Transparenz, EU AI Act)
  mit Erläuterung und Link zum twillo-Blog (Kategorie „Rechtliches“)
- Komplett **zweisprachig** (Deutsch/Englisch): gesamte Oberfläche und Prompt
- Kopieren-Button, Live-Aktualisierung, drei Merkkästen (nicht den ersten
  Entwurf nehmen · iterieren · kennzeichnen)
- Minimalistisches Schwarz-Weiß-Design ohne Radien, nahezu volle Fensterbreite;
  Hinweiszeile: erstellt von Johannes Koch (LinkedIn-Link) mithilfe von KI,
  Teilen und Weitergeben erwünscht
