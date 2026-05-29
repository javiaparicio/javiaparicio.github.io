# Contact

<div class="contactme">

<p>Use the form below to get in touch.</p>
<p>If you would like an appointment in Bern, please tell me what you do professionally, what you need the photos for and when you would like to shoot. I will reply with availability, options and next steps.</p>

<form action="{{ site.data.settings.contact_settings.form_action }}" method="POST">
  <label for="name">Name*</label>
  <input type="text" id="name" name="name" autocomplete="name" required>

  <label for="company">Company / role</label>
  <input type="text" id="company" name="company" autocomplete="organization">

  <label for="email">Email*</label>
  <input type="email" id="email" name="_replyto" autocomplete="email" required>

  <label for="subject">Subject*</label>
  <input type="text" id="subject" name="subject" placeholder="e.g. LinkedIn headshot, team of 6" required>

  <label for="message">Message*</label>
  <textarea id="message" name="message" rows="10" placeholder="What you need the photos for, rough date, questions" required></textarea>

    <div class="agb-checkbox">
      <input type="checkbox" id="agb" name="agb" value="accepted" required>
      <label for="agb">
        I accept the
        <a href="{% tl terms %}" target="_blank" rel="noopener">terms</a> and
        <a href="{% tl privacy %}" target="_blank" rel="noopener">privacy policy</a>.
      </label>
    </div>

  <input type="hidden" name="_subject" value="{{ site.data.settings.contact_settings.email_subject }}" />
  <input type="hidden" name="_next" value="{{ site.data.settings.contact_settings.confirmation_url[site.lang] | absolute_url }}" />
  <input type="text" name="_gotcha" style="display: none;" value="" tabindex="-1" autocomplete="off">

  <button type="submit">{{ site.data.settings.contact_settings.send_button_text[site.lang] }}</button>
</form>
