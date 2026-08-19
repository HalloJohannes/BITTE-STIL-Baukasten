# Qualitätsgates

Der zentrale Befehl `npm run check` umfasst:

- reproduzierbaren Build aus der führenden Quelle,
- Node-Vertragstests für Sprachen, Kernoptionen, Namens- und Lizenzlinks,
- Plugin-Manifest, Skill-Frontmatter und Skill-UI-Metadaten,
- bytegleiche GitHub-Pages-Ausgabe mit vollständiger MIT-Lizenz,
- Root- und Ordnerstruktur,
- Offline-Vertrag ohne externe Laufzeitressourcen,
- vollständige Release-Metadaten,
- Bytegleichheit aller aktuellen HTML-Artefakte,
- SHA-256-Prüfsumme des Release-Pakets.

Eine visuelle Freigabe wird nie allein aus automatischen Checks abgeleitet. Der Stand 1.0.0 wurde am 19. August 2026 lokal im Browser geprüft; Umfang und Ergebnis stehen im zugehörigen Audit.
