---
title: Contact me
subtitle:
layout: default
description: Portrait photographer located in Bern, Switzerland
---
<div class="contactme">
<h2>Contact me</h2>

<p>Please fill out the form below to get in touch with me.</p>

<form action="{{ site.data.settings.contact_settings.form_action }}" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="_replyto" required>
  
  <label for="message">Message:</label>
  <textarea id="message" name="message" rows="10" required></textarea>

  <input type="hidden" name="_subject" value="{{ site.data.settings.contact_settings.email_subject }}" />
  <input type="text" name="_gotcha" style="display: none;" class="contact-form__gotcha" val="">
  
  <button type="submit">{{ site.data.settings.contact_settings.send_button_text }}</button>
</form>
</div>