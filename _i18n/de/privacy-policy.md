# Datenschutzerklärung

Ihre Privatsphäre ist uns wichtig. Diese Datenschutzerklärung erläutert, wie wir Ihre persönlichen Daten erfassen, verwenden und schützen.

---

## **1. Datenerfassung**
Wir erfassen die folgenden Daten über unser Kontaktformular:
- Name
- E-Mail-Adresse
- Telefonnummer (falls angegeben)
- Nachrichteninhalt

Wenn Sie Daten über das Kontaktformular übermitteln, werden Ihre Informationen von einem Drittanbieter verarbeitet:
- **Dienst**: Formspree
- **Zweck**: Zur sicheren Bearbeitung und Versendung von E-Mail-Anfragen.
- **Gespeicherte Daten**: Die übermittelten Daten werden vorübergehend vom Drittanbieter gespeichert und an unsere E-Mail weitergeleitet.

Weitere Informationen finden Sie in der [Datenschutzerklärung von Formspree](https://formspree.io/legal/privacy-policy).

---

## **2. Verwendung von Google reCAPTCHA**
Wir verwenden Google reCAPTCHA auf unserem Kontaktformular, um Spam und Missbrauch zu verhindern. Dieser Dienst wird von Google LLC bereitgestellt und hilft zu überprüfen, ob die Formularübermittlung von einem Menschen stammt.

Wenn Sie unser Kontaktformular verwenden, kann Google reCAPTCHA folgende Daten erfassen:
- Ihre IP-Adresse
- Informationen über Ihr Gerät und Ihren Browser (z. B. Browserversion, Bildschirmauflösung, Betriebssystem)

Diese Daten werden verwendet, um das Nutzerverhalten zu analysieren und festzustellen, ob die Anfrage von einem Menschen oder einem automatisierten System stammt. Google verarbeitet diese Daten gemäß ihrer Datenschutzrichtlinie.

Weitere Informationen finden Sie unter:
- [Google Datenschutzerklärung](https://policies.google.com/privacy)
- [Google Nutzungsbedingungen](https://policies.google.com/terms)

---

## **3. Verwendung der Daten**
Wir verwenden Ihre Daten, um:
- Auf Anfragen zu antworten und Dienstleistungen bereitzustellen.
- Unsere Kommunikation und Benutzererfahrung zu verbessern.

Wir **verkaufen oder geben Ihre Daten nicht an unbefugte Dritte weiter**.

---

## **4. Datenschutz**
Wir setzen angemessene Sicherheitsmaßnahmen ein, um Ihre persönlichen Daten zu schützen. Obwohl wir darauf vertrauen, dass Drittanbieter Daten sicher verwalten, sind wir nicht verantwortlich für Datenschutzverletzungen auf deren Seite.

---

## **5. Ihre Rechte**
Sie haben das Recht:
- Auf Ihre Daten zuzugreifen.
- Berichtigung oder Löschung Ihrer Daten zu verlangen.
- Die Einwilligung zur Datenverarbeitung zu widerrufen.

Um diese Rechte auszuüben, kontaktieren Sie uns bitte unter <span id="email2">Javascript Blocked</span>.

---

## Kontaktinformationen
Bei Fragen oder Bedenken bezüglich dieser Datenschutzerklärung wenden Sie sich bitte an:

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
