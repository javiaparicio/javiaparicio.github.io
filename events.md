---
layout: default
title: "Event Photography Portfolio"
permalink: /events/
description: "Explore Javi Aparicio Foto's event photography portfolio. From corporate gatherings to cultural events, discover how moments are captured beautifully."
---

<div class="gallery">
  {% assign images = site.static_files | sort: "path" | reverse %}
  {% for image in images %}
    {% if image.path contains 'assets/images/portfolio/events' %}
      {% if image.extname == ".webp" %}
        {% assign file_time = site.time | date: '%s' %}
        {% assign hash = file_time | MD5 %}
        <img data-src="{{ image.path | append: '?v=' | append: hash }}" alt="image {{ image.basename }} of the portfolio" class="gallery-image lazy">
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
    <i>+</i>
  </span>
</div>
