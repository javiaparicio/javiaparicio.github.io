# AGB

Wenn du ein Shooting bei mir buchst, gelten diese Bedingungen:

---

## 1. Buchung und Zahlung
- Nur nach Terminvereinbarung.
- 50 % Anzahlung sichert den Termin.
- Restzahlung nach dem Shooting.

---

## 2. Absage und Umbuchung
- Absage weniger als 48 Stunden vorher → evtl. 20 % Gebühr.
- Umbuchung bis 48 Stunden vorher, wenn ein neuer Termin frei ist.

---

## 3. Bilder und Nutzung
- Urheberrecht bleibt bei mir.
- Du erhältst die Nutzungsrechte, die wir schriftlich vereinbaren (privat, kommerziell, …).
- Bearbeiten oder Weiterverkaufen ohne meine Zustimmung ist nicht erlaubt.

---

## 4. Haftung
Keine Haftung für Verzögerungen durch Dinge ausserhalb meiner Kontrolle — Wetter, Technik, Location-Probleme usw.

---

## Fragen?
**E-Mail**: <span id="email">Javascript Blocked</span>

**Telefon**: <span id="phone">Javascript Blocked</span>

<script>
  fetch('/contact.json')
    .then(response => response.json())
    .then(data => {
      document.getElementById("email").innerHTML =
        '<a href="mailto:' + data.email + '">' + data.email + '</a>';
      document.getElementById("phone").innerHTML = data.phone;    })
    .catch(error => console.error('Error loading contact data:', error));
</script>
