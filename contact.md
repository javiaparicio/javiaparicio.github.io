---
layout: default
title: "Contact Javi Aparicio Foto – Book Your Photography Session"
permalink: /contact/
description: "Contact Javi Aparicio Foto for professional photography in Bern. Schedule your portrait session or inquire about custom projects today!"
---

# Contact me

<div class="contactme">

<p>Fill out the form below to get in touch with me.</p>
<p>Before reaching out, take a look at my <a href="/portraits/" class="button">portfolio</a> to see examples of my work.</p>
<p>For pricing details, visit my <a href="/pricing/" class="button">pricing page</a>.</p>

<form action="{{ site.data.settings.contact_settings.form_action }}" method="POST">
  <label for="name">Name:*</label>
  <input type="text" id="name" name="name" autocomplete="name" required>

  <label for="email">Email:*</label>
  <input type="email" id="email" name="_replyto" autocomplete="email" required>

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
