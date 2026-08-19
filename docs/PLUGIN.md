# Codex-Plugin

Das Plugin liegt unter `plugins/bitte-stil-baukasten/`; der Marketplace-Eintrag unter `.agents/plugins/marketplace.json` verweist relativ darauf. Dadurch kann dasselbe GitHub-Repository Projektquelle und installierbare Plugin-Quelle sein.

Lokale Installation aus dem Repository-Root:

```bash
codex plugin marketplace add .
codex plugin add bitte-stil-baukasten@personal
```

Nach Installation oder Aktualisierung sollte ein neuer Codex-Task gestartet werden, damit der Skill sicher neu geladen wird.
