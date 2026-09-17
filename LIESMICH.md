# Lernraum-Protokoll – Einrichtung

## 1. Einmalig: App online stellen (Lehrperson)

iPads führen lokale HTML-Dateien nicht als App aus. Deshalb braucht die App eine Webadresse.
Der Server liefert nur die leere App aus. **Die Einträge der Lernenden bleiben auf dem iPad und werden nie übertragen.**

Mit GitHub Pages:
1. Neues Repository anlegen, z. B. `lernraum`.
2. Alle Dateien aus diesem Ordner **direkt ins Hauptverzeichnis** hochladen (`index.html` darf nicht in einem Unterordner liegen).
3. Settings → Pages → Branch `main`, Ordner `/ (root)` → Save.
4. Nach 1–2 Minuten ist die App erreichbar, z. B. `https://BENUTZERNAME.github.io/lernraum/`.

Jeder andere Webspace mit https funktioniert ebenso (z. B. Schulwebserver).

**Wichtig:** Die Adresse danach nie mehr ändern. Einträge sind an die Adresse gebunden.

Vor dem Einsatz in `index.html` den PIN ändern (ganz oben im Block `DATEN`, Zeile `lehrerPin`).

## 2. Lernende einrichten (einmal pro iPad)

1. Adresse in **Safari** öffnen (z. B. per QR-Code).
2. Teilen-Symbol → «Zum Home-Bildschirm» → «Hinzufügen».
3. Safari schliessen, «Lernraum» auf dem Home-Bildschirm öffnen, Name und Klasse eintragen.

Ab dann immer das Symbol auf dem Home-Bildschirm benutzen. Die App funktioniert auch ohne Internet.

## 3. Abgabe

Lernende tippen auf «Word-Datei für die Lehrperson» und geben die Datei über Teams, OneDrive, Mail oder «In Dateien sichern» ab.
Die Word-Datei enthält alle Einträge: vorne eine Übersicht, danach die Protokolle im Stil der Papiervorlage.

## 4. Für Lehrpersonen

- **Einfach lesen:** Word-Datei öffnen. Mehr braucht es nicht.
- **Prüfen und Klassenübersicht:** App öffnen → «Für die Lehrperson» → PIN → Word-Dateien hineinziehen.
  Die App zeigt, ob im Word nachträglich Text verändert wurde, und stellt die Originaleinträge dar.
- **Einträge verloren** (neues iPad, App gelöscht): Auf dem iPad der Lernenden «Für die Lehrperson» → «Dieses Gerät» → «Word-Datei einlesen».

## Änderungen an der App

`index.html` im Repository ersetzen. Die iPads übernehmen die neue Version beim übernächsten Öffnen; die Einträge bleiben erhalten.
