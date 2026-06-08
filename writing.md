---
layout: page
title: Writing
subtitle: Notes on research, agents, and the occasional tangent.
---

<ul class="post-list">
  {% for post in site.posts %}
  <li class="post-item">
    <span class="date">{{ post.date | date: "%B %-d, %Y" }}</span>
    <a class="ptitle" href="{{ post.url | relative_url }}">{{ post.title }}</a>
    {% if post.excerpt %}<p class="excerpt">{{ post.excerpt | strip_html | truncatewords: 28 }}</p>{% endif %}
  </li>
  {% endfor %}
</ul>

{% if site.posts.size == 0 %}
<p style="color:var(--muted);">No posts yet — coming soon.</p>
{% endif %}
