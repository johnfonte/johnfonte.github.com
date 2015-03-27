---
layout: page
title : My Thoughts
header : Post Archive
short_title: Thoughts
group: navigation
---
{% include JB/setup %}

{% for category in site.categories %}
  <h3><a name="{{ category | first }}">{{ category | first }}</a></h3>
  <ul>
  {% for posts in category %}
    {% for post in posts %}
      {% if post.url %}
        <li><a href="{{ post.url }}">{{ post.title }}</a></li>
      {% endif %}
    {% endfor %}
  {% endfor %}
  </ul>
{% endfor %}