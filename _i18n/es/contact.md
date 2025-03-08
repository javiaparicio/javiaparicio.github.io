# Contáctame

<div class="contactme">

<p>Completa el siguiente formulario para ponerte en contacto conmigo.</p>
<p>Antes de contactarme, visita mi <a href="/es/portraits/" class="button">portafolio</a> para ver ejemplos de mi trabajo.</p>
<p>Para detalles sobre precios, visita mi <a href="/es/pricing/" class="button">página de precios</a>.</p>

<form action="{{ site.data.settings.contact_settings.form_action }}" method="POST">
  <label for="name">Nombre:*</label>
  <input type="text" id="name" name="name" autocomplete="name" required>

  <label for="email">Correo Electrónico:*</label>
  <input type="email" id="email" name="_replyto" autocomplete="email" required>

  <label for="subject">Asunto:*</label>
  <input type="text" id="subject" name="subject" required>

  <label for="message">Mensaje:*</label>
  <textarea id="message" name="message" rows="10" required></textarea>

   <!-- Sección de Casilla de Verificación AGB -->
    <div class="agb-checkbox">
      <input type="checkbox" id="agb" name="agb" value="accepted" required>
      <label for="agb">
        Acepto los
        <a href="/es/terms-and-conditions/" target="_blank">Términos y Condiciones (AGB)</a> y la
        <a href="/es/privacy-policy/" target="_blank">Política de Privacidad</a>.
      </label>
    </div>
    <br />

  <input type="hidden" name="_subject" value="{{ site.data.settings.contact_settings.email_subject }}" />
  <input type="text" name="_gotcha" style="display: none;" class="contact-form__gotcha" val="">

  <button type="submit">{{ site.data.settings.contact_settings.send_button_text[site.lang] }}</button>
</form>
