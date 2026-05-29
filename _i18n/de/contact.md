# Kontakt

<div class="contactme">

<p>Füllen Sie das folgende Formular aus, um mit mir Kontakt aufzunehmen.</p>
<p>Wenn Sie einen Termin in Bern wünschen, teilen Sie mir bitte mit, was Sie beruflich machen, wofür Sie die Fotos benötigen und wann Sie den Termin wahrnehmen möchten. Ich melde mich mit Verfügbarkeit, Optionen und den nächsten Schritten.</p>

<form action="{{ site.data.settings.contact_settings.form_action }}" method="POST">
  <label for="name">Name*</label>
  <input type="text" id="name" name="name" autocomplete="name" required>

  <label for="company">Firma / Rolle</label>
  <input type="text" id="company" name="company" autocomplete="organization">

  <label for="email">E-Mail*</label>
  <input type="email" id="email" name="_replyto" autocomplete="email" required>

  <label for="subject">Betreff*</label>
  <input type="text" id="subject" name="subject" placeholder="z. B. LinkedIn-Porträt, Team 6 Personen" required>

  <label for="message">Nachricht*</label>
  <textarea id="message" name="message" rows="10" placeholder="Wofür Sie die Fotos brauchen, ungefähres Datum, Fragen" required></textarea>

    <div class="agb-checkbox">
      <input type="checkbox" id="agb" name="agb" value="accepted" required>
      <label for="agb">
        Ich akzeptiere die
        <a href="{% tl terms %}" target="_blank" rel="noopener">AGB</a> und die
        <a href="{% tl privacy %}" target="_blank" rel="noopener">Datenschutzerklärung</a>.
      </label>
    </div>
    <br />

  <input type="hidden" name="_subject" value="{{ site.data.settings.contact_settings.email_subject }}" />
  <input type="hidden" name="_next" value="{{ site.data.settings.contact_settings.confirmation_url[site.lang] | absolute_url }}" />
  <input type="text" name="_gotcha" style="display: none;" value="" tabindex="-1" autocomplete="off">

  <button type="submit">{{ site.data.settings.contact_settings.send_button_text[site.lang] }}</button>
</form>
