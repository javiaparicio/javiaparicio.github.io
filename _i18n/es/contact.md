# Contacto

<div class="contactme">

<p>Completa el formulario para ponerte en contacto conmigo.</p>
<p>Si desea una cita en Berna, indíqueme a qué se dedica profesionalmente, para qué necesita las fotos y cuándo le gustaría la sesión. Responderé con disponibilidad, opciones y próximos pasos.</p>

<form action="{{ site.data.settings.contact_settings.form_action }}" method="POST">
  <label for="name">Nombre*</label>
  <input type="text" id="name" name="name" autocomplete="name" required>

  <label for="company">Empresa / rol</label>
  <input type="text" id="company" name="company" autocomplete="organization">

  <label for="email">Correo*</label>
  <input type="email" id="email" name="_replyto" autocomplete="email" required>

  <label for="subject">Asunto*</label>
  <input type="text" id="subject" name="subject" placeholder="p. ej. retrato LinkedIn, equipo 6 personas" required>

  <label for="message">Mensaje*</label>
  <textarea id="message" name="message" rows="10" placeholder="Para qué necesita las fotos, fecha aproximada, preguntas" required></textarea>

    <div class="agb-checkbox">
      <input type="checkbox" id="agb" name="agb" value="accepted" required>
      <label for="agb">
        Acepto las
        <a href="{% tl terms %}" target="_blank" rel="noopener">condiciones</a> y la
        <a href="{% tl privacy %}" target="_blank" rel="noopener">política de privacidad</a>.
      </label>
    </div>
    <br />

  <input type="hidden" name="_subject" value="{{ site.data.settings.contact_settings.email_subject }}" />
  <input type="hidden" name="_next" value="{{ site.data.settings.contact_settings.confirmation_url[site.lang] | absolute_url }}" />
  <input type="text" name="_gotcha" style="display: none;" value="" tabindex="-1" autocomplete="off">

  <button type="submit">{{ site.data.settings.contact_settings.send_button_text[site.lang] }}</button>
</form>
