<div class="text-content">

<h1>Porträt-Portfolio</h1>

<h2>Authentische & Zeitlose Porträts</h2>

<p>Jedes Porträt erzählt eine Geschichte.</p>

<p>Mein Ziel ist es, authentische Ausdrücke, Emotionen und Persönlichkeit in jedem Bild festzuhalten. Ob es sich um ein professionelles Bewerbungsfoto, ein künstlerisches Porträt oder einen spontanen Moment handelt, ich konzentriere mich darauf, Bilder zu schaffen, die echt und zeitlos wirken.</p>

<p>Mit Sitz in Bern arbeite ich mit Privatpersonen, Berufstätigen und Kreativen zusammen, die mehr als nur ein Foto wollen – sie möchten ein Bild, das sie repräsentiert. Mit natürlichem Licht oder Studioaufbauten passe ich mich jeder Session an, um das Beste aus jedem Motiv herauszuholen.</p>

<p>Durchstöbern Sie mein Portfolio, um zu sehen, wie ich Persönlichkeit und Emotionen durch Porträtfotografie einfange.</p>
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
        <img data-src="{{ image.path | append: '?v=' | append: hash }}" alt="Porträt {{ image.basename }} von Javi Aparicio – Professionelle und künstlerische Fotografie in Bern" class="gallery-image lazy">
      {% endif %}
    {% endif %}
  {% endfor %}
</div>

<div class="text-content">

<br>
<hr>
<br>

<h2>Buchen Sie noch heute Ihr Porträt-Shooting</h2>

Lassen Sie uns gemeinsam etwas Großartiges schaffen – <a href="/de/contact/" class="button">kontaktieren Sie mich</a>, um Ihr Shooting zu buchen.

</div>

<div class="lightbox" id="lightbox">
  <span class="nav" id="prev" aria-label="Vorheriges"></span>
  <img id="lightbox-img">
  <span class="nav" id="next" aria-label="Nächstes"></span>
  <span class="close" id="close" aria-label="Schließen"></span>
  <span class="fullscreen" id="fullscreen">
    <i aria-label="Vollbild">⛶</i>
  </span>
</div>
