# Datenschutz

Kurz: Ich speichere nur, was du mir über das Kontaktformular schickst — und nutze es, um dir zu antworten.

---

## 1. Kontaktformular
Das Formular fragt ab:
- Name
- E-Mail
- Betreff
- Nachricht

Ein Telefonfeld gibt es derzeit nicht. Falls das kommt, passe ich diese Seite an.

Technisch läuft das über **Formspree** ([Datenschutz bei Formspree](https://formspree.io/legal/privacy-policy)). Die Nachricht landet in meinem Postfach; Formspree kann sie kurz auf ihren Servern halten.

---

## 2. Spam-Schutz
Es gibt ein verstecktes Feld („Honeypot“), das Bots manchmal ausfüllen. Solche Einsendungen werden verworfen. Google reCAPTCHA setze ich auf dieser Website nicht ein.

---

## 3. Verwendung
- Deine Anfrage beantworten
- Ein Shooting organisieren, wenn wir uns einigen

Kein Verkauf an Dritte, keine Werbelisten.

---

## 4. Sicherheit
Ich verlasse mich auf Formspree und meinen Mail-Anbieter. 100 % Sicherheit gibt es nicht; wenn etwas schiefgeht, handle ich nach Schweizer Recht.

---

## 5. Deine Rechte
Du kannst verlangen:
- Auskunft, was ich von dir habe
- Berichtigung oder Löschung
- Keine weitere Verwendung

Schreib an <span id="email2">Javascript Blocked</span>.

---

## Kontakt
**E-Mail**: <span id="email">Javascript Blocked</span>

**Telefon**: <span id="phone">Javascript Blocked</span>

<script>
  fetch('/contact.json')
    .then(response => response.json())
    .then(data => {
      document.getElementById("email").innerHTML =
        '<a href="mailto:' + data.email + '">' + data.email + '</a>';
      document.getElementById("email2").innerHTML = document.getElementById("email").innerHTML;
      document.getElementById("phone").innerHTML = data.phone;    })
    .catch(error => console.error('Error loading contact data:', error));
</script>
