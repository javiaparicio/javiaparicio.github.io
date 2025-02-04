---
layout: default
title: "Contact Javi Aparicio Foto – Book Your Photography Session"
permalink: /contact/
description: "Get in touch with Javi Aparicio Foto for professional photography services in Bern, Switzerland. Contact us to schedule your next portrait session or inquire about custom projects."
---

# Contact me

<div class="contactme">

<p>Fill out the form below to get in touch with me.</p>
<p>Füllen Sie das untenstehende Formular aus, um mit mir in Kontakt zu treten.</p>
<p>Rellena el siguiente formulario para ponerte en contacto conmigo.</p>

<form action="{{ site.data.settings.contact_settings.form_action }}" method="POST">
  <label for="name">Name:*</label>
  <input type="text" id="name" name="name" required>

  <label for="email">Email:*</label>
  <input type="email" id="email" name="_replyto" required>

  <label for="subject">Subject:*</label>
  <input type="text" id="subject" name="subject" required>

  <label for="message">Message:*</label>
  <textarea id="message" name="message" rows="10" required></textarea>

   <!-- AGB Checkbox Section -->
    <div class="agb-checkbox">
      <input type="checkbox" id="agb" name="agb" value="accepted" required>
      <label for="agb">
        I agree to the
        <a href="/terms-and-conditions/" target="_blank">Terms and Conditions (AGB)</a> and
        <a href="/privacy-policy/" target="_blank">Privacy Policy</a>.
      </label>
    </div>
    <br />

  <input type="hidden" name="_subject" value="{{ site.data.settings.contact_settings.email_subject }}" />
  <input type="text" name="_gotcha" style="display: none;" class="contact-form__gotcha" val="">

  <button type="submit">{{ site.data.settings.contact_settings.send_button_text }}</button>
</form>
