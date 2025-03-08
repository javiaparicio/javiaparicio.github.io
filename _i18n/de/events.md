<div class="text-content">
  <h1>Event-Portfolio</h1>
  <h2>Energie, Atmosphäre & Authentische Momente</h2>
  <p>Jedes Event hat seinen eigenen Rhythmus.</p>
  <p>Ob es die Energie eines Live-Konzerts, die Professionalität einer Firmenveranstaltung oder die Magie eines einzigartigen Festivals ist – mein Ziel ist es, den Moment einzufangen.</p>
  <p>Ich arbeite unauffällig, um echte Emotionen, Interaktionen und Höhepunkte festzuhalten, ohne den Ablauf zu stören. Von den dynamischen Bühnenlichtern eines Konzerts bis zur eleganten Atmosphäre einer Business-Veranstaltung passe ich meinen Ansatz an die Stimmung und Energie jeder Gelegenheit an.</p>
  <p>Durchstöbere mein Portfolio, um zu sehen, wie ich Konzerte, Firmenevents und besondere Anlässe fotografiere.</p>
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
        <img data-src="{{ image.path | append: '?v=' | append: hash }}" alt="Eventfotografie {{ image.basename }} von Javi Aparicio – Konzerte, Firmenveranstaltungen und Festivals" class="gallery-image lazy">
      {% endif %}
    {% endif %}
  {% endfor %}
</div>

<div class="text-content">
  <br>
  <hr>
  <br>
  <h2>Buche jetzt Eventfotografie</h2>
  <p>Benötigst du professionelle Fotografie für dein nächstes Event? Lass es uns festhalten! <a href="/de/contact/" class="button">Kontaktiere mich</a>, um über dein Projekt zu sprechen.</p>
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
