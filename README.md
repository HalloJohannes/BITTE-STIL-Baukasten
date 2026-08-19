# BITTE STIL Baukasten

Stand: 19. August 2026 · Version 1.0.0

Der BITTE STIL Baukasten ist eine zweisprachige, vollständig lokale Single-HTML-Anwendung für präzisere Bild-Prompts. Inhalt und Gestaltung werden bewusst getrennt: Der eigene Bildinhalt bleibt frei, während Bildtyp, Stil, Farben, Format, Detailtiefe, Hintergrund, Anmutung, Vielfalt und optionale Profi-Parameter strukturiert beschrieben werden.

**Direkt online verwenden:** <https://hallojohannes.github.io/BITTE-STIL-Baukasten/>

## Direkt verwenden

Die aktuelle Anwendung ist `bitte-stil-baukasten.html`. Sie benötigt keine Installation und lädt keine Laufzeitbestandteile aus dem Netz. Externe Links werden nur nach einer bewussten Nutzeraktion geöffnet.

## Projektstruktur

- `src/index.html`: führende Produktquelle
- `scripts/`: reproduzierbarer Build und zentrale Prüfungen
- `tests/`: Produkt- und Inhaltsverträge
- `quality/`: maschinenlesbare Release-Metadaten
- `docs/`: Struktur, Releases, Qualitätsregeln und GitHub-Bereitschaft
- `versions/aktuell/`: Spiegel der aktuellen kanonischen HTML
- `versions/archiv/`: künftig abgelöste Releases
- `archive/vor-governance/`: unveränderte Ausgangsdatei vom 18. August 2026
- `outputs/`: lokal erzeugte Release-Pakete
- `plugins/bitte-stil-baukasten/`: repository-lokales Codex-Plugin
- `.agents/plugins/marketplace.json`: installierbarer Plugin-Marketplace

## Entwickeln und prüfen

Voraussetzung ist Node.js. Es gibt keine Paketabhängigkeiten.

```bash
npm run check
```

Der zentrale Prüflauf baut die Single-HTML neu, führt die Node-Tests aus und prüft Struktur, Produktvertrag, Release-Parität, Lizenzhinweis und Plugin-Metadaten.

Bei Änderungen auf `main` baut ein getrennter GitHub-Actions-Workflow dieselbe geprüfte HTML als `index.html` und veröffentlicht ausschließlich dieses Pages-Artefakt.

## Plugin

Das Plugin hilft direkt in Codex beim Formulieren und Überarbeiten von Bild-Prompts nach der Logik des Baukastens. Hinweise zur lokalen Installation stehen in `docs/PLUGIN.md`.

## Lizenz

MIT License. Copyright © 2026 Johannes Koch. Siehe `LICENSE`.
