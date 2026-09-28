export type Locale = 'de' | 'en' | 'es';

export type LocalizedMarkdown = Record<Locale, string>;

/**
 * Terms and conditions (AGB): cleaned markdown from `_i18n/{locale}/terms-and-conditions.md`.
 *
 * Tokens: business_name, email, phone, privacy, contact (double-brace placeholders).
 */
export const termsCopy: LocalizedMarkdown = {
  de: `# Allgemeine Geschäftsbedingungen (AGB)

Diese AGB regeln Fotografie-Dienstleistungen von {{business_name}}. Sie gelten **verbindlich**, sobald Sie eine Buchung schriftlich bestätigen (z. B. per E-Mail oder unterzeichnetes Angebot). Eine Anfrage über das Kontaktformular begründet noch keinen Vertrag; die AGB dienen dort nur zur Information.

---

## **1. Vertragsschluss**

- Leistungen, Preise, Umfang und Termine ergeben sich aus unserem **schriftlichen Angebot** bzw. Ihrer **schriftlichen Buchungsbestätigung**.
- Mit der verbindlichen Buchung und Zahlung der vereinbarten Anzahlung akzeptieren Sie diese AGB in der zum Zeitpunkt der Buchung auf dieser Website veröffentlichten Fassung.

---

## **2. Buchung und Zahlung**

- Alle Sessions erfolgen nur nach Terminvereinbarung.
- Zur Bestätigung ist eine **Anzahlung von 50 %** des vereinbarten Preises fällig, sofern im Angebot nicht anders vereinbart.
- Der **Restbetrag** ist gemäss Vereinbarung fällig, in der Regel nach Abschluss der Aufnahmen und vor oder bei Auslieferung der Bilder.
- Preise verstehen sich in **Schweizer Franken (CHF)** und **ohne Mehrwertsteuer** (Art. 10 Abs. 2 MWSTG). Reise- oder Zusatzkosten werden im Angebot ausgewiesen.
- Bei Zahlungsverzug sind wir berechtigt, die Auslieferung der Bilder bis zum Ausgleich zurückzuhalten.

---

## **3. Stornierung, Umbuchung und Ausfall**

- **Stornierung mehr als 48 Stunden** vor dem Termin: Die Anzahlung kann auf einen Ersatztermin angerechnet werden; eine Rückerstattung erfolgt nach unserem Ermessen abzüglich bereits angefallener Aufwände, sofern im Angebot nicht anders geregelt.
- **Stornierung weniger als 48 Stunden** vor dem Termin oder **Nichterscheinen**: Die Anzahlung von 50 % wird einbehalten; weitergehende Ansprüche auf den vollen vereinbarten Preis bleiben vorbehalten, soweit gesetzlich zulässig.
- **Umbuchungen** sind bis 48 Stunden vor dem Termin nach Verfügbarkeit möglich.
- Bei **höherer Gewalt** (z. B. schwere Erkrankung, behördliche Massnahmen) bemühen wir uns um eine faire Lösung (Ersatztermin oder Teilerstattung).

---

## **4. Leistungsumfang und Lieferung**

- Umfang (Dauer, Anzahl bearbeiteter Bilder, Format, Nutzungsrechte) ergibt sich aus dem **Angebot**.
- Bearbeitete Bilder werden in der Regel innerhalb von **4-6 Wochen** nach der Session in digitaler Form bereitgestellt, sofern nicht anders vereinbart.
- **Zusätzliche Retuschen** oder Express-Lieferung sind nur gegen Aufpreis und schriftliche Vereinbarung.
- Digitale Dateien werden für **12 Monate** zum Download bereitgestellt; danach obliegt die Archivierung dem Kunden.

---

## **5. Urheberrecht und Nutzungsrechte**

- Als Urheber der Fotografien bleibt **{{business_name}}** Inhaberin des Urheberrechts (Schweizerisches Urheberrecht, URG).
- Dem Kunden wird eine **nicht ausschliessliche Nutzungslizenz** eingeräumt. **Standard** (sofern im Angebot nicht erweitert): private Nutzung und Darstellung auf den eigenen Websites und Profilen des Kunden (z. B. LinkedIn, Unternehmenswebsite).
- **Kommerzielle Nutzung** (Werbung Dritter, Druck in grosser Auflage, Weitergabe an Agenturen, Bearbeitung durch Dritte) bedarf **schriftlicher Vereinbarung** und kann zusätzlich vergütet werden.
- Weiterverkauf, Unterlizenzierung oder Entstellung der Bilder ohne unsere Zustimmung sind untersagt.

---

## **6. Verwendung zu Werbezwecken (Portfolio)**

- Wir dürfen ausgewählte Aufnahmen zu **Eigenwerbung** (Website, Social Media, Portfolio, Referenzen) verwenden, sofern Sie dem nicht **schriftlich widersprechen** oder im Angebot «ohne Veröffentlichung» vereinbart ist.
- Bei erkennbaren Personen beachten wir das **nLPD**; für Unternehmensaufträge stellen Sie sicher, dass abgebildete Personen informiert sind oder erforderliche Einwilligungen vorliegen.

---

## **7. Personenbezogene Daten**

- Die Verarbeitung von Kontakt- und Buchungsdaten richtet sich nach unserer [Datenschutzerklärung]({{privacy}}).
- Porträtfotos können Personen betreffen; Sie sind für die Information der abgebildeten Personen verantwortlich, wenn Sie uns als Auftraggeber buchen.

---

## **8. Preise und Abrechnung**

- Es gelten die im **Angebot** genannten Preise.
- Rechnungen unterliegen nicht der Mehrwertsteuer gemäss **Art. 10 Abs. 2 MWSTG** (vgl. Impressum).
- Rechnungen sind innerhalb der auf der Rechnung genannten Frist zahlbar.

---

## **9. Haftung**

- Wir haften nach schweizerischem Recht für Schäden aus **Vorsatz oder grober Fahrlässigkeit** sowie bei Verletzung von Leben, Körper oder Gesundheit.
- Bei leichter Fahrlässigkeit ist die Haftung auf den **vertragstypischen, vorhersehbaren Schaden** begrenzt und höchstens auf den für die betreffende Session **bezahlten Betrag**.
- Für **Verzögerungen oder Ausfälle** durch Umstände ausserhalb unseres zumutbaren Einflusses (z. B. extremes Wetter, Ausfall von Drittanbietern, höhere Gewalt) haften wir nicht; wir bemühen uns um einen Ersatztermin.

---

## **10. Reklamationen**

- Mängel an der vertraglichen Leistung müssen uns **innerhalb von 14 Tagen** nach Bereitstellung der Bilder schriftlich mitteilen, unter Angabe der konkreten Beanstandung.
- Wir prüfen berechtigte Reklamationen und bieten nach Wahl Nachbesserung oder, soweit angemessen, eine Teilerstattung.

---

## **11. Anwendbares Recht und Gerichtsstand**

- Es gilt ausschliesslich **schweizerisches Recht** (unter Ausschluss von Kollisionsnormen, soweit zulässig).
- Ausschliesslicher Gerichtsstand ist **Bern (Kanton Bern)**, soweit gesetzlich zulässig.

---

## **12. Verbraucher mit Wohnsitz im Ausland**

- Bei Kunden mit Wohnsitz in der **EU oder im EWR** können **zwingende Verbraucherschutzvorschriften** des Wohnsitzstaates anwendbar bleiben; die AGB berühren diese Rechte nicht.
- Es wird **keine** Pflicht zur Nutzung einer Online-Streitbeilegungsplattform der EU begründet.

---

## Kontakt

Fragen zu diesen Bedingungen: {{email}} · {{phone}}

E-Mail und Telefon werden mit JavaScript angezeigt. Nutzen Sie das [Kontaktformular]({{contact}}).`,

  en: `# Terms and Conditions

These terms govern photography services provided by {{business_name}}. They are **binding** once you confirm a booking in writing (e.g. by email or signed quote). A contact form enquiry does not create a contract; these terms are provided there for information only.

---

## **1. Formation of Contract**

- Services, prices, scope and dates are defined in our **written quote** and your **written booking confirmation**.
- By confirming the booking and paying the agreed deposit, you accept these terms as published on this website at the time of booking.

---

## **2. Booking and Payment**

- All sessions are by appointment only.
- A **50% deposit** of the agreed price is required to confirm the session unless otherwise stated in the quote.
- The **balance** is due as agreed, typically after the shoot and before or upon delivery of the images.
- Prices are quoted in **Swiss francs (CHF)** **excluding VAT** (Art. 10 para. 2 MWSTG). Travel or additional costs are stated in the quote.
- If payment is late, we may withhold delivery of the images until the balance is settled.

---

## **3. Cancellation, Rescheduling and No-Show**

- **Cancellation more than 48 hours** before the session: the deposit may be applied to a new date; refunds are at our discretion minus costs already incurred, unless the quote states otherwise.
- **Cancellation less than 48 hours** before the session or **no-show**: the 50% deposit is retained; we reserve further claims to the full agreed price where permitted by law.
- **Rescheduling** is possible up to 48 hours before the session, subject to availability.
- In case of **force majeure** (e.g. serious illness, official restrictions), we will seek a fair solution (new date or partial refund).

---

## **4. Scope of Services and Delivery**

- Scope (duration, number of edited images, file format, usage rights) is defined in the **quote**.
- Edited images are normally delivered digitally within **4-6 weeks** after the session unless otherwise agreed.
- **Extra retouching** or express delivery is available only by written agreement and additional fee.
- Digital files are available for download for **12 months**; archiving thereafter is the client’s responsibility.

---

## **5. Copyright and Usage Rights**

- **{{business_name}}** remains the **copyright holder** of all photographs (Swiss Copyright Act).
- The client receives a **non-exclusive licence**. **Standard** use (unless extended in the quote): private use and display on the client’s own websites and profiles (e.g. LinkedIn, company website).
- **Commercial use** (third-party advertising, large print runs, transfer to agencies, editing by third parties) requires **written agreement** and may incur additional fees.
- Resale, sublicensing or alteration of the images without our consent is prohibited.

---

## **6. Promotional Use (Portfolio)**

- We may use selected images for **self-promotion** (website, social media, portfolio, references) unless you **object in writing** or the quote states “no publication”.
- For identifiable individuals we comply with the **Swiss Data Protection Act (nFADP)**; for corporate bookings you ensure that pictured persons are informed or that required consents are in place.

---

## **7. Personal Data**

- Processing of contact and booking data is described in our [Privacy Policy]({{privacy}}).
- Portrait photography may involve personal data; when booking on behalf of others, you are responsible for informing the people depicted.

---

## **8. Prices and Invoicing**

- Prices are those stated in the **quote**.
- Invoices are **not subject to VAT** according to **Art. 10 para. 2 of the Swiss VAT Act (MWSTG)** (see legal notice).
- Invoices are payable within the period stated on the invoice.

---

## **9. Liability**

- We are liable under Swiss law for damage caused by **intent or gross negligence** and for injury to life, body or health.
- For slight negligence, liability is limited to **foreseeable, typical contractual loss** and at most the **amount paid** for the session in question.
- We are not liable for delays or failure due to circumstances **beyond our reasonable control** (e.g. severe weather, third-party outages, force majeure); we will try to offer a new date.

---

## **10. Complaints**

- Defects must be reported **in writing within 14 days** of delivery of the images, with a specific description.
- We will review justified complaints and offer correction or, where appropriate, a partial refund.

---

## **11. Governing Law and Jurisdiction**

- **Swiss law** applies exclusively (to the extent permitted, excluding conflict-of-law rules).
- Exclusive place of jurisdiction is **Bern, Canton of Bern**, where permitted by law.

---

## **12. Consumers Abroad**

- For clients resident in the **EU or EEA**, **mandatory consumer protection rules** of their country of residence may still apply; these terms do not limit such rights.
- Use of an EU online dispute resolution platform is **not** required or offered.

---

## Contact

Questions about these terms: {{email}} · {{phone}}

Email and phone are shown with JavaScript. Please use the [contact form]({{contact}}).`,

  es: `# Condiciones generales

Estas condiciones regulan los servicios de fotografía de {{business_name}}. Son **vinculantes** cuando confirme una reserva por escrito (p. ej. por correo electrónico o presupuesto firmado). Una consulta por el formulario de contacto no crea contrato; las condiciones allí son solo informativas.

---

## **1. Celebración del contrato**

- Servicios, precios, alcance y fechas figuran en nuestra **oferta escrita** y en su **confirmación de reserva escrita**.
- Al confirmar la reserva y abonar el depósito acordado, acepta estas condiciones en la versión publicada en este sitio en el momento de la reserva.

---

## **2. Reserva y pago**

- Todas las sesiones son con cita previa.
- Para confirmar se requiere un **depósito del 50 %** del precio acordado, salvo otra cosa en la oferta.
- El **saldo** vence según lo acordado, normalmente tras la sesión y antes o al entregar las imágenes.
- Los precios se expresan en **francos suizos (CHF)** **sin IVA** (art. 10, párr. 2, MWSTG). Gastos de desplazamiento u otros se indican en la oferta.
- En caso de impago podemos retener la entrega de las imágenes hasta regularizar la situación.

---

## **3. Cancelación, cambio de fecha e inasistencia**

- **Cancelación con más de 48 horas**: el depósito puede aplicarse a una nueva fecha; los reembolsos quedan a nuestro criterio descontando costes ya incurridos, salvo pacto distinto en la oferta.
- **Cancelación con menos de 48 horas** o **inasistencia**: se retiene el depósito del 50 %; nos reservamos reclamar el precio íntegro cuando la ley lo permita.
- **Cambio de fecha** hasta 48 horas antes, según disponibilidad.
- En **fuerza mayor** (p. ej. enfermedad grave, restricciones oficiales) buscaremos una solución justa (nueva fecha o reembolso parcial).

---

## **4. Alcance del servicio y entrega**

- El alcance (duración, número de imágenes editadas, formato, derechos de uso) consta en la **oferta**.
- Las imágenes editadas se entregan normalmente en **4-6 semanas** tras la sesión, salvo otro plazo acordado.
- **Retoques adicionales** o entrega urgente solo con acuerdo escrito y suplemento.
- Los archivos digitales están disponibles para descarga durante **12 meses**; después el archivo es responsabilidad del cliente.

---

## **5. Derechos de autor y licencia de uso**

- **{{business_name}}** conserva los **derechos de autor** de las fotografías (ley suiza de derechos de autor).
- Al cliente se le concede una **licencia no exclusiva**. **Uso estándar** (salvo ampliación en la oferta): uso privado y publicación en webs y perfiles propios del cliente (p. ej. LinkedIn, web corporativa).
- **Uso comercial** (publicidad de terceros, grandes tiradas, cesión a agencias, edición por terceros) requiere **acuerdo escrito** y puede tener coste adicional.
- Queda prohibida la reventa, sublicencia o alteración de las imágenes sin nuestro consentimiento.

---

## **6. Uso con fines promocionales (portfolio)**

- Podemos usar imágenes seleccionadas para **autopromoción** (web, redes sociales, portfolio, referencias) salvo **oposición por escrito** o pacto de «sin publicación» en la oferta.
- En personas identificables cumplimos la **nLPD** suiza; en encargos corporativos usted garantiza que las personas retratadas están informadas o cuentan con los consentimientos necesarios.

---

## **7. Datos personales**

- El tratamiento de datos de contacto y reserva se describe en nuestra [política de privacidad]({{privacy}}).
- Los retratos pueden implicar datos personales; si reserva en nombre de terceros, es responsable de informar a las personas fotografiadas.

---

## **8. Precios y facturación**

- Rigen los precios de la **oferta**.
- Las facturas **no están sujetas al IVA** conforme al **art. 10, párr. 2, MWSTG** (véase aviso legal).
- Las facturas se abonan en el plazo indicado en la misma.

---

## **9. Responsabilidad**

- Respondemos según el derecho suizo por daños por **dolo o negligencia grave** y por lesiones a la vida, integridad o salud.
- Por negligencia leve, la responsabilidad se limita al **daño previsible y típico del contrato** y como máximo al **importe abonado** por la sesión afectada.
- No respondemos por retrasos o incumplimientos por circunstancias **fuera de nuestro control razonable** (p. ej. clima extremo, fallos de terceros, fuerza mayor); procuraremos ofrecer otra fecha.

---

## **10. Reclamaciones**

- Los defectos deben comunicarse **por escrito en un plazo de 14 días** desde la entrega de las imágenes, con descripción concreta.
- Atenderemos reclamaciones justificadas con corrección o, si procede, reembolso parcial.

---

## **11. Ley aplicable y fuero**

- Se aplica exclusivamente el **derecho suizo** (en la medida permitida, con exclusión de normas de conflicto).
- Fuero exclusivo: **Berna (cantón de Berna)**, cuando la ley lo permita.

---

## **12. Consumidores en el extranjero**

- Para clientes con residencia en la **UE o el EEE** pueden seguir aplicando **normas imperativas de protección al consumidor** de su país; estas condiciones no limitan esos derechos.
- **No** se exige ni se ofrece el uso de una plataforma de resolución de litigios en línea de la UE.

---

## Contacto

Consultas sobre estas condiciones: {{email}} · {{phone}}

El correo y el teléfono requieren JavaScript. Use el [formulario de contacto]({{contact}}).`,
};
