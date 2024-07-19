---
layout: default
title: Home
---

<div class="gallery">
  {% for image in site.static_files %}
    {% if image.path contains 'assets/images' %}
      {% if image.extname == ".jpg" or image.extname == ".png" %}
        <img data-src="{{ image.path }}" alt="{{ image.basename }}" class="gallery-image lazy">
      {% endif %}
    {% endif %}
  {% endfor %}
</div>

<div class="lightbox" id="lightbox">
  <span class="nav" id="prev"></span>
  <img id="lightbox-img">
  <span class="nav" id="next"></span>
  <span class="close" id="close"></span>
  <span class="fullscreen" id="fullscreen">
    <i class="fas fa-expand"></i>
  </span>
</div>
