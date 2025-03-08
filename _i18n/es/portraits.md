<div class="text-content">

<h1>Portafolio de Retratos</h1>

<h2>Retratos Auténticos y Atemporales</h2>

<p>Cada retrato cuenta una historia.</p>

<p>Mi objetivo es capturar expresiones auténticas, emociones y personalidad en cada fotograma. Ya sea un retrato profesional, un retrato artístico o un momento espontáneo, me enfoco en crear imágenes que se sientan reales y atemporales.</p>

<p>Con sede en Berna, trabajo con individuos, profesionales y creativos que buscan más que una simple foto: quieren una imagen que los represente. Utilizando luz natural o configuraciones de estudio, me adapto a cada sesión para resaltar lo mejor de cada sujeto.</p>

<p>Explora mi portafolio para ver cómo capturo la personalidad y la emoción a través de la fotografía de retratos.</p>
<br>
<hr>
<br>
</div>


<div class="gallery">
  {% assign images = site.static_files | sort: "path" | reverse %}
  {% for image in images %}
    {% if image.path contains 'assets/images/portfolio/portraits' %}
      {% if image.extname == ".webp" %}
        {% assign file_time = site.time | date: '%s' %}
        {% assign hash = file_time | MD5 %}
        <img data-src="{{ image.path | append: '?v=' | append: hash }}" alt="Retrato {{ image.basename }} por Javi Aparicio – Fotografía profesional y artística en Berna" class="gallery-image lazy">
      {% endif %}
    {% endif %}
  {% endfor %}
</div>

<div class="text-content">

<br>
<hr>
<br>

<h2>Reserva Tu Sesión de Retratos Hoy</h2>

<p>Creemos algo grandioso juntos—<a href="/es/contact/" class="button">contáctame</a> para reservar su sesión.</p>

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
