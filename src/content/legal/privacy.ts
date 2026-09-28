export type Locale = 'de' | 'en' | 'es';

export type LocalizedMarkdown = Record<Locale, string>;

/**
 * Privacy policy: cleaned markdown from `_i18n/{locale}/privacy-policy.md`.
 *
 * Tokens: email, phone, contact (double-brace placeholders).
 */
export const privacyCopy: LocalizedMarkdown = {
  de: `# Datenschutzerklärung

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

## **2. Hosting, Infrastruktur und E-Mail**

Beim Besuch dieser Website und bei der Kommunikation mit uns setzen wir folgende Dienstleister ein:

- **GitHub, Inc. (GitHub Pages)**: Hosting des statischen Webauftritts. **Zweck:** Bereitstellung der Website. **Daten:** technische Zugriffsdaten (z. B. IP-Adresse, Zeitpunkt, angeforderte Seite). [GitHub Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement)
- **Cloudflare, Inc.**: DNS, Reverse Proxy und Schutz der Website. **Zweck:** Auslieferung, Sicherheit und Performance. **Daten:** z. B. IP-Adresse, Browser- und Zugriffsdaten, Protokolle. [Cloudflare Privacy Policy](https://www.cloudflare.com/privacypolicy/)
- **Proton AG (Proton Mail)**: E-Mail für Anfragen aus dem Kontaktformular und direkte E-Mail-Kontakte. **Zweck:** Bearbeitung von Anfragen und Kundenkommunikation. **Daten:** z. B. Name, E-Mail-Adresse, Nachrichteninhalt, ggf. Telefonnummer. [Proton Privacy Policy](https://proton.me/legal/privacy)

Einige Anbieter haben ihren Sitz ausserhalb der Schweiz (z. B. USA). Dabei kann eine Datenübermittlung ins Ausland erfolgen; die Anbieter geben an, angemessene Schutzmassnahmen zu verwenden (z. B. Standardvertragsklauseln).

---

## **3. Verwendung von Google reCAPTCHA**
Wir verwenden Google reCAPTCHA auf unserem Kontaktformular, um Spam und Missbrauch zu verhindern. Dieser Dienst wird von Google LLC bereitgestellt und hilft zu überprüfen, ob die Formularübermittlung von einem Menschen stammt.

Wenn Sie unser Kontaktformular verwenden, kann Google reCAPTCHA folgende Daten erfassen:
- Ihre IP-Adresse
- Informationen über Ihr Gerät und Ihren Browser (z. B. Browserversion, Bildschirmauflösung, Betriebssystem)

Diese Daten werden verwendet, um das Nutzerverhalten zu analysieren und festzustellen, ob die Anfrage von einem Menschen oder einem automatisierten System stammt. Google verarbeitet diese Daten gemäß ihrer Datenschutzrichtlinie.

Weitere Informationen finden Sie unter:
- [Google Datenschutzerklärung](https://policies.google.com/privacy)
- [Google Nutzungsbedingungen](https://policies.google.com/terms)

---

## **4. Spracheinstellung (localStorage)**
Wenn Sie über den Sprachwechsler eine Sprache wählen, speichern wir Ihre Auswahl im **lokalen Speicher** Ihres Browsers (\`localStorage\`, Schlüssel \`jaf_lang\`, nur für diese Website). Die Daten werden **nicht** an unseren Server übermittelt. **Zweck:** Beim nächsten Besuch die von Ihnen gewählte Sprachversion anzuzeigen. Es werden keine Tracking- oder Werbedaten erhoben. Sie können den Eintrag jederzeit in den Browser-Einstellungen (Website-Daten / localStorage) löschen; danach gilt wieder die Sprache der URL, die Sie aufrufen.

---

## **5. Verwendung der Daten**
Wir verwenden Ihre Daten, um:
- Auf Anfragen zu antworten und Dienstleistungen bereitzustellen.
- Unsere Kommunikation und Benutzererfahrung zu verbessern.

Wir **verkaufen oder geben Ihre Daten nicht an unbefugte Dritte weiter**.

---

## **6. Datenschutz**
Wir setzen angemessene Sicherheitsmaßnahmen ein, um Ihre persönlichen Daten zu schützen. Obwohl wir darauf vertrauen, dass Drittanbieter Daten sicher verwalten, sind wir nicht verantwortlich für Datenschutzverletzungen auf deren Seite.

---

## **7. Ihre Rechte**
Sie haben das Recht:
- Auf Ihre Daten zuzugreifen.
- Berichtigung oder Löschung Ihrer Daten zu verlangen.
- Die Einwilligung zur Datenverarbeitung zu widerrufen.

Um diese Rechte auszuüben, kontaktieren Sie uns bitte unter {{email}}.

---

## Kontaktinformationen
Bei Fragen oder Bedenken bezüglich dieser Datenschutzerklärung wenden Sie sich bitte an:

**E-Mail**: {{email}}

**Telefon**: {{phone}}

E-Mail und Telefon werden mit JavaScript angezeigt. Nutzen Sie das [Kontaktformular]({{contact}}).`,

  en: `# Privacy Policy

Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal data.

---

## **1. Data Collection**
We collect the following data through our contact form:
- Name
- Email address
- Phone number (if provided)
- Message content

When you submit data through the contact form, your information is processed by a third-party service:
- **Service**: Formspree
- **Purpose**: To handle and send email inquiries securely.
- **Data Stored**: The submitted data is stored temporarily by the third-party service and forwarded to our email.

For more information, please refer to [Formspree’s Privacy Policy](https://formspree.io/legal/privacy-policy).

---

## **2. Hosting, infrastructure and email**

When you visit this website or communicate with us, the following providers may process data on our behalf or as separate controllers:

- **GitHub, Inc. (GitHub Pages)**: Hosting of the static website. **Purpose:** delivery of the site. **Data:** technical access data (e.g. IP address, time, page requested). [GitHub Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement)
- **Cloudflare, Inc.**: DNS, reverse proxy and protection of the website. **Purpose:** delivery, security and performance. **Data:** e.g. IP address, browser and access data, logs. [Cloudflare Privacy Policy](https://www.cloudflare.com/privacypolicy/)
- **Proton AG (Proton Mail)**: Email for enquiries from the contact form and direct email. **Purpose:** handling enquiries and client communication. **Data:** e.g. name, email address, message content, phone number if provided. [Proton Privacy Policy](https://proton.me/legal/privacy)

Some providers are based outside Switzerland (e.g. USA). Data may be transferred abroad; they state that appropriate safeguards apply (e.g. standard contractual clauses).

---

## **3. Use of Google reCAPTCHA**
We use Google reCAPTCHA on our contact form to prevent spam and abuse. This service is provided by Google LLC and helps verify that the form submission is made by a human.

When you use our contact form, Google reCAPTCHA may collect:
- Your IP address
- Information about your device and browser (e.g., browser version, screen resolution, operating system)

This data is used to analyze user behavior and determine whether the request comes from a human or an automated system. Google processes this data in accordance with their privacy policy.

For more information, please refer to:
- [Google Privacy Policy](https://policies.google.com/privacy)
- [Google Terms of Service](https://policies.google.com/terms)

---

## **4. Language preference (localStorage)**
When you choose a language using the site’s language switcher, we store your choice in your browser’s **local storage** (\`localStorage\`, key \`jaf_lang\`, scoped to this site only). This data is **not** sent to our server. **Purpose:** To show the language version you selected on your next visit. No tracking or advertising data is collected. You can remove it at any time in your browser settings (site data / local storage); after that, the language of the URL you open will apply again.

---

## **5. Data Usage**
We use your data to:
- Respond to inquiries and provide services.
- Improve our communication and user experience.

We **do not sell or distribute your data** to unauthorized third parties.

---

## **6. Data Protection**
We implement appropriate security measures to protect your personal data. While we trust third-party providers to manage data securely, we are not responsible for breaches on their end.

---

## **7. Your Rights**
You have the right to:
- Request access to your data.
- Request correction or deletion of your data.
- Withdraw consent for data processing.

To exercise these rights, please contact us at {{email}}.

---

## Contact Information
For any questions or concerns regarding this Privacy Policy, please contact:

**Email**: {{email}}

**Phone**: {{phone}}

Email and phone are shown with JavaScript. Please use the [contact form]({{contact}}).`,

  es: `# Política de Privacidad

Su privacidad es importante para nosotros. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos sus datos personales.

---

## **1. Recopilación de Datos**
Recopilamos los siguientes datos a través de nuestro formulario de contacto:
- Nombre
- Dirección de correo electrónico
- Número de teléfono (si se proporciona)
- Contenido del mensaje

Cuando envía datos a través del formulario de contacto, su información es procesada por un servicio de terceros:
- **Servicio**: Formspree
- **Propósito**: Gestionar y enviar consultas por correo electrónico de forma segura.
- **Datos Almacenados**: Los datos enviados se almacenan temporalmente por el servicio de terceros y se reenvían a nuestro correo electrónico.

Para más información, consulte la [Política de Privacidad de Formspree](https://formspree.io/legal/privacy-policy).

---

## **2. Alojamiento, infraestructura y correo electrónico**

Al visitar este sitio o comunicarse con nosotros, pueden intervenir los siguientes proveedores:

- **GitHub, Inc. (GitHub Pages)**: Alojamiento del sitio estático. **Finalidad:** publicación del sitio web. **Datos:** datos técnicos de acceso (p. ej. dirección IP, fecha y hora, página solicitada). [GitHub Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement)
- **Cloudflare, Inc.**: DNS, proxy inverso y protección del sitio. **Finalidad:** entrega, seguridad y rendimiento. **Datos:** p. ej. dirección IP, datos del navegador y de acceso, registros. [Cloudflare Privacy Policy](https://www.cloudflare.com/privacypolicy/)
- **Proton AG (Proton Mail)**: Correo para consultas del formulario y correo directo. **Finalidad:** gestión de consultas y comunicación con clientes. **Datos:** p. ej. nombre, correo electrónico, contenido del mensaje, teléfono si se indica. [Proton Privacy Policy](https://proton.me/legal/privacy)

Algunos proveedores tienen sede fuera de Suiza (p. ej. EE. UU.). Puede producirse una transferencia internacional; indican medidas de protección adecuadas (p. ej. cláusulas contractuales tipo).

---

## **3. Uso de Google reCAPTCHA**
Utilizamos Google reCAPTCHA en nuestro formulario de contacto para prevenir spam y abusos. Este servicio es proporcionado por Google LLC y ayuda a verificar que el envío del formulario lo realiza una persona.

Cuando utiliza nuestro formulario de contacto, Google reCAPTCHA puede recopilar:
- Su dirección IP
- Información sobre su dispositivo y navegador (por ejemplo, versión del navegador, resolución de pantalla, sistema operativo)

Estos datos se utilizan para analizar el comportamiento del usuario y determinar si la solicitud proviene de una persona o de un sistema automatizado. Google procesa estos datos de acuerdo con su política de privacidad.

Para más información, consulte:
- [Política de Privacidad de Google](https://policies.google.com/privacy)
- [Términos de Servicio de Google](https://policies.google.com/terms)

---

## **4. Preferencia de idioma (localStorage)**
Si elige un idioma en el selector del sitio, guardamos su elección en el **almacenamiento local** del navegador (\`localStorage\`, clave \`jaf_lang\`, solo para este sitio). Los datos **no** se envían a nuestro servidor. **Finalidad:** Mostrar en su próxima visita la versión en el idioma elegido. No se recopilan datos de seguimiento ni publicitarios. Puede eliminar el valor en la configuración del navegador (datos del sitio / localStorage); después volverá a aplicarse el idioma de la URL que abra.

---

## **5. Uso de los Datos**
Utilizamos sus datos para:
- Responder a consultas y proporcionar servicios.
- Mejorar nuestra comunicación y experiencia del usuario.

**No vendemos ni distribuimos sus datos** a terceros no autorizados.

---

## **6. Protección de Datos**
Implementamos medidas de seguridad adecuadas para proteger sus datos personales. Aunque confiamos en que los proveedores de terceros gestionen los datos de forma segura, no somos responsables de las brechas de seguridad en su parte.

---

## **7. Sus Derechos**
Usted tiene derecho a:
- Solicitar acceso a sus datos.
- Solicitar la corrección o eliminación de sus datos.
- Retirar el consentimiento para el procesamiento de datos.

Para ejercer estos derechos, contáctenos en {{email}}.

---

## Información de Contacto
Para cualquier pregunta o inquietud sobre esta Política de Privacidad, contáctenos:

**Correo Electrónico**: {{email}}

**Teléfono**: {{phone}}

El correo y el teléfono requieren JavaScript. Use el [formulario de contacto]({{contact}}).`,
};
