---
layout: page
title: Research
subtitle: Long-horizon tasks and LLM agents.
---
I'm a Ph.D. student at Arizona State University, advised by
[Chitta Baral](https://scai.engineering.asu.edu/faculty/chitta-baral/) (ASU) and
[Eduardo Blanco](https://eduardoblanco.github.io/) (University of Arizona).

My research focuses on long-term memory and long-horizon agents. I study how a model
decides what to keep in memory and what to let go of, and I build tool-using agents
that stay reliable and follow their instructions across a long sequence of steps,
rather than a single answer. This builds on my earlier work on reasoning over time and
understanding events: extracting structured information about events from text, and
testing whether language models can really reason about dates, durations, and the order
things happen in.

Alongside my PhD, I've interned at Microsoft, Cohere, and Genies.

## Publications

{% include pub-list.html source=site.data.publications.main %}

## Experience

{% include experience.html %}

## News

<ul class="newsfeed">
{% for item in site.data.news limit:5 %}
  <li><span class="date">{{ item.label }}</span><span>{{ item.text }}</span></li>
{% endfor %}
</ul>

<p class="more"><a href="{{ '/news/' | relative_url }}">More news →</a></p>
