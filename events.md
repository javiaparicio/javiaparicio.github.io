---
layout: default
title: "Events Photography Portfolio by Javi Aparicio – Bern, CH"
permalink: /events/
description: "Explore Javi Aparicio Foto's events photography portfolio. From corporate gatherings to cultural events, discover how moments are captured beautifully."
---

# Events Portfolio

## Energy, Atmosphere & Authentic Moments

Every event has its own rhythm.

Whether it’s the electricity of a live concert, the professionalism of a corporate gathering, or the magic of a unique festival, my goal is to capture the essence of the moment.

I work discreetly to document real emotions, interactions, and key highlights—without interrupting the flow. From the dynamic stage lights of a concert to the refined setting of a business event, I adapt my approach to fit the mood and energy of each occasion.

Browse my portfolio to see how I approach concerts, corporate events, and special occasions.

<div class="gallery">
  {% assign images = site.static_files | sort: "path" | reverse %}
  {% for image in images %}
    {% if image.path contains 'assets/images/portfolio/events' %}
      {% if image.extname == ".webp" %}
        {% assign file_time = site.time | date: '%s' %}
        {% assign hash = file_time | MD5 %}
        <img data-src="{{ image.path | append: '?v=' | append: hash }}" alt="Event photography {{ image.basename }} by Javi Aparicio – capturing concerts, corporate gatherings, and festivals" class="gallery-image lazy">
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
    <i aria-label="Enter fullscreen">⛶</i>
  </span>
</div>

## Book Event Photography Today

Need professional photography for your next event? Let’s document it! [Contact me](/contact/) to discuss your project.
