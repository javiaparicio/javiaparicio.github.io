---
layout: default
title: "Portrait Photography Portfolio by Javi Aparicio – Bern, CH"
permalink: /portraits/
description: "Explore Javi Aparicio’s portraits portfolio, showcasing stunning portraits. See the moments that define creativity and artistry."
---

# Portraits Portfolio

<div class="gallery">
  {% assign images = site.static_files | sort: "path" | reverse %}
  {% for image in images %}
    {% if image.path contains 'assets/images/portfolio/portraits' %}
      {% if image.extname == ".webp" %}
        {% assign file_time = site.time | date: '%s' %}
        {% assign hash = file_time | MD5 %}
        <img data-src="{{ image.path | append: '?v=' | append: hash }}" alt="image {{ image.basename }} of the portfolio" class="gallery-image lazy">
      {% endif %}
    {% endif %}
  {% endfor %}
</div>

<div class="lightbox" id="lightbox">
  <span class="nav" id="prev" aria-label="Previous"></span>
  <img id="lightbox-img">
  <span class="nav" id="next" aria-label="Next"></span>
  <span class="close" id="close" aria-label="Close"></span>
  <span class="fullscreen" id="fullscreen">
    <i aria-label="Enter fullscreen">+</i>
  </span>
</div>
