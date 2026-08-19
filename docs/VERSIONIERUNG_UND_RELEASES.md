# Versionierung und Releases

Produktversion und Build werden synchron in `package.json` und `quality/release-metadata.json` geführt. Der kanonische Dateiname enthält Version, Datum und Codex-Kennung; der feste Alias bleibt für einfache Links stabil.

Eine Fassung gilt technisch als bereit, wenn `npm run check` bestanden ist. Der Lauf erzeugt Root-Dateien, aktuellen Spiegel und Release-Paket aus `src/index.html` und prüft ihre Bytegleichheit. Layout- oder Interaktionsänderungen benötigen zusätzlich eine dokumentierte manuelle Sichtprüfung.

Vor einer neuen Version:

1. bisherigen kanonischen Stand nach `versions/archiv/` übernehmen,
2. Version und Build-Metadaten erhöhen,
3. `CHANGELOG.md` aktualisieren,
4. `npm run check` ausführen,
5. Commit und annotierten Git-Tag erstellen.
