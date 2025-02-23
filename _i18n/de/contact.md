# Kontaktieren Sie mich

<div class="contactme">

<p>Füllen Sie das untenstehende Formular aus, um mit mir in Kontakt zu treten.</p>
<p>Bevor Sie sich melden, werfen Sie einen Blick in mein <a href="/de/portraits/" class="button">Portfolio</a>, um Beispiele meiner Arbeit zu sehen.</p>
<p>Für Preisinformationen besuchen Sie meine <a href="/de/pricing/" class="button">Preisseite</a>.</p>

<form action="{{ site.data.settings.contact_settings.form_action }}" method="POST">
  <label for="name">Name:*</label>
  <input type="text" id="name" name="name" autocomplete="name" required>

  <label for="email">E-Mail:*</label>
  <input type="email" id="email" name="_replyto" autocomplete="email" required>

  <label for="subject">Betreff:*</label>
  <input type="text" id="subject" name="subject" required>

  <label for="message">Nachricht:*</label>
  <textarea id="message" name="message" rows="10" required></textarea>

   <!-- AGB Checkbox Section -->
    <div class="agb-checkbox">
      <input type="checkbox" id="agb" name="agb" value="accepted" required>
      <label for="agb">
        Ich stimme den
        <a href="/de/terms-and-conditions/" target="_blank">Allgemeinen Geschäftsbedingungen (AGB)</a> und der
        <a href="/de/privacy-policy/" target="_blank">Datenschutzrichtlinie</a> zu.
      </label>
    </div>
    <br />

  <input type="hidden" name="_subject" value="{{ site.data.settings.contact_settings.email_subject }}" />
  <input type="text" name="_gotcha" style="display: none;" class="contact-form__gotcha" val="">

  <button type="submit">{{ site.data.settings.contact_settings.send_button_text[site.lang] }}</button>
</form>
