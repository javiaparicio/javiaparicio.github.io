<div class="text-content">
  <h1>Portafolio de Eventos</h1>
  <h2>Energía, Ambiente y Momentos Auténticos</h2>
  <p>Cada evento tiene su propio ritmo.</p>
  <p>Ya sea la electricidad de un concierto en vivo, la profesionalidad de una reunión corporativa o la magia de un festival único, mi objetivo es capturar la esencia del momento.</p>
  <p>Trabajo de manera discreta para documentar emociones reales, interacciones y momentos clave, sin interrumpir el flujo del evento. Desde las luces dinámicas de un escenario de concierto hasta el ambiente refinado de un evento empresarial, adapto mi enfoque para encajar con el estado de ánimo y la energía de cada ocasión.</p>
  <p>Explora mi portafolio para ver cómo abordo conciertos, eventos corporativos y ocasiones especiales.</p>
  <br>
  <hr>
  <br>
</div>

<div class="gallery">
  {% assign images = site.static_files | sort: "path" | reverse %}
  {% for image in images %}
    {% if image.path contains 'assets/images/portfolio/events' %}
      {% if image.extname == ".webp" %}
        {% assign file_time = site.time | date: '%s' %}
        {% assign hash = file_time | MD5 %}
        <img data-src="{{ image.path | append: '?v=' | append: hash }}" alt="Fotografía de eventos {{ image.basename }} por Javi Aparicio – capturando conciertos, reuniones corporativas y festivales" class="gallery-image lazy">
      {% endif %}
    {% endif %}
  {% endfor %}
</div>

<div class="text-content">
  <br>
  <hr>
  <br>
  <h2>Reserva Fotografía de Eventos Hoy</h2>
  <p>¿Necesitas fotografía profesional para tu próximo evento? ¡Documentémoslo! <a href="/es/contact/" class="button">Contáctame</a> para hablar sobre tu proyecto.</p>
</div>

<div class="lightbox" id="lightbox">
  <span class="nav" id="prev" aria-label="Anterior"></span>
  <img id="lightbox-img">
  <span class="nav" id="next" aria-label="Siguiente"></span>
  <span class="close" id="close" aria-label="Cerrar"></span>
  <span class="fullscreen" id="fullscreen">
    <i aria-label="Pantalla completa">⛶</i>
  </span>
</div>
