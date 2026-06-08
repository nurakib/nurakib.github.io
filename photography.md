---
layout: page
title: Photography
subtitle: Mostly birds, occasionally the street.
wide: true
---

<p style="color:var(--muted);max-width:620px;">
A growing collection. Birds take patience, which is half of why I like shooting them.
The street photography is newer and I'm still figuring it out. Click any photo to see
it larger.
</p>

<div class="filterbar">
  <button data-cat="all" class="active">All</button>
  <button data-cat="birds">Birds</button>
  <button data-cat="street">Street</button>
</div>

<div class="gallery">
  {% for photo in site.data.photos %}
  <figure data-cat="{{ photo.category }}">
    {% if photo.src %}
    <span class="shot" data-full="{{ photo.full | default: photo.src | relative_url }}">
      <img src="{{ photo.src | relative_url }}" alt="{{ photo.title }}" loading="lazy">
    </span>
    {% else %}
    <span class="shot placeholder">{{ photo.title }}</span>
    {% endif %}
    {% if photo.title %}<figcaption>{{ photo.title }}</figcaption>{% endif %}
  </figure>
  {% endfor %}
</div>
