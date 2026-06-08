---
layout: page
title: News
---

{% assign by_year = site.data.news | group_by: "year" | sort: "name" | reverse %}
{% for group in by_year %}
<h2 class="news-year">{{ group.name }}</h2>
<ul class="newsfeed">
{% for item in group.items %}
  <li><span class="date">{{ item.label }}</span><span>{{ item.text }}</span></li>
{% endfor %}
</ul>
{% endfor %}
