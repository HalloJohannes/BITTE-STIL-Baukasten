# BITTE STIL Baukasten

Stand: 19. August 2026 · Version 1.0.0

Der BITTE STIL Baukasten hilft dabei, aus einer Bildidee einen klaren Prompt für Bild-KI zu machen. Er fragt nicht danach, *was* du darstellen möchtest, sondern unterstützt dich dabei, *wie* das Bild gestaltet werden soll.

Dazu gehören beispielsweise Bildtyp, Stil, Farben, Format, Detailtiefe, Hintergrund und Anmutung. Zusätzliche Optionen helfen, Vielfalt und Stereotype bewusst mitzudenken, Bildserien einheitlich zu gestalten und einen Alternativtext anzufordern. Die Anwendung ist vollständig auf Deutsch und Englisch nutzbar.

**Direkt online verwenden:** <https://hallojohannes.github.io/BITTE-STIL-Baukasten/>

## Für wen ist der Baukasten gedacht?

Der Baukasten richtet sich besonders an Menschen, die Bilder für Lehre, offene Bildungsmaterialien, Präsentationen, Arbeitsblätter oder andere Kommunikationsformate erstellen möchten. Vorkenntnisse im Prompting sind nicht erforderlich.

## Was macht der Baukasten – und was nicht?

Der Baukasten:

- formuliert aus deinen Einstellungen eine kopierbare gestalterische Prompt-Grundlage,
- lässt den eigentlichen Bildinhalt bewusst bei dir,
- bietet zusätzliche Profi-Einstellungen je nach gewähltem Bildtyp,
- erinnert an Vielfalt, Barrierefreiheit und die Kennzeichnung von KI-Anteilen,
- funktioniert lokal im Browser und überträgt keine eingegebenen Inhalte.

Der Baukasten erzeugt selbst keine Bilder und sendet keine Prompts an einen KI-Dienst. Den erzeugten Text kopierst du in das Bildwerkzeug deiner Wahl.

## Direkt verwenden oder herunterladen

Die aktuelle Anwendung ist `bitte-stil-baukasten.html`. Sie benötigt keine Installation und lädt keine Laufzeitbestandteile aus dem Netz. Externe Links werden nur nach einer bewussten Nutzeraktion geöffnet.

- **Online:** über den oben genannten GitHub-Pages-Link
- **Offline:** `bitte-stil-baukasten.html` herunterladen und doppelt anklicken
- **Versioniert:** über den jeweils aktuellen GitHub-Release

## Warum enthält das Repository mehr als eine HTML-Datei?

Die HTML ist das fertige Produkt. Die übrigen Dateien machen ihre Weiterentwicklung nachvollziehbar und sicher: `src/` enthält die führende Quelle, `tests/` und `scripts/` prüfen den Baukasten, `docs/` erklärt die Struktur und das Plugin macht die Prompt-Logik direkt in Codex nutzbar. Automatisch erzeugte Arbeitsausgaben und private Materialien werden nicht veröffentlicht.

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

## Rückmeldungen und Beiträge

Fehler, Verständnisprobleme und Ideen können über die GitHub-Issues gemeldet werden. Konkrete Änderungen können als Pull Request vorgeschlagen werden. Änderungen am ursprünglichen Repository werden erst übernommen, wenn Johannes Koch sie ausdrücklich freigibt.

## Lizenz

MIT License. Copyright © 2026 Johannes Koch. Siehe `LICENSE`.
