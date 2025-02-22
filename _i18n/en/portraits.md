<div class="text-content">

<h1>Portraits Portfolio</h1>

<h2>Authentic & Timeless Portraits</h2>

<p>Every portrait tells a story.</p>

<p>My goal is to capture authentic expressions, emotions, and personality in every frame. Whether it’s a professional headshot, an artistic portrait, or a candid moment, I focus on creating images that feel real and timeless.</p>

<p>Based in Bern, I work with individuals, professionals, and creatives who want more than just a photo—they want an image that represents them. Using natural light or studio setups, I adapt to each session to bring out the best in every subject.</p>

<p>Browse my portfolio to see how I capture personality and emotion through portrait photography.</p>
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
        <img data-src="{{ image.path | append: '?v=' | append: hash }}" alt="Portrait {{ image.basename }} by Javi Aparicio – Professional and artistic photography in Bern" class="gallery-image lazy">
      {% endif %}
    {% endif %}
  {% endfor %}
</div>

<div class="text-content">

<br>
<hr>
<br>

<h2>Book Your Portrait Session Today</h2>

Let’s create something great together—<a href="/contact/" class="button">get in touch</a> to book your session.

</div>

<div class="lightbox" id="lightbox">
  <span class="nav" id="prev" aria-label="Previous"></span>
  <img id="lightbox-img">
  <span class="nav" id="next" aria-label="Next"></span>
  <span class="close" id="close" aria-label="Close"></span>
  <span class="fullscreen" id="fullscreen">
    <i aria-label="Enter fullscreen">⛶</i>
  </span>
</div>
