# Ordnerstruktur

## Führende Bereiche

- `src/`: einzige manuell gepflegte Produktquelle
- `scripts/`: reproduzierbarer Build und Prüfwerkzeuge
- `tests/`: automatische Produktverträge
- `quality/`: maschinenlesbare Release-Metadaten
- `docs/`: Betriebs- und Veröffentlichungsdokumentation
- `plugins/`: Codex-Plugin-Quelle
- `.agents/plugins/`: repository-lokaler Plugin-Marketplace

## Auslieferung und Historie

- Root: freundlicher Einstieg `bitte-stil-baukasten.html` plus kanonische versionierte HTML
- `versions/aktuell/`: Spiegel der kanonischen aktuellen HTML
- `versions/archiv/`: abgelöste Governance-Releases
- `archive/vor-governance/`: unveränderter Ausgangsstand
- `outputs/release-<build>/`: lokal gebautes, vollständiges Release-Paket

Im Root liegen nur Projektsteuerung, öffentliche Repository-Dokumente und die zwei direkt nutzbaren aktuellen HTML-Einstiege. Alte HTML-Dateien, Screenshots und Arbeitsmaterial gehören nicht dorthin.
