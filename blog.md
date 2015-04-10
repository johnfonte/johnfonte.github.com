---
layout: page
title : My Thoughts
header : All Posts
short_title: Thoughts
group: navigation
---
{% include JB/setup %}
<ul class="tag_box inline">
  {% assign categories_list = site.categories %}
  {% include JB/categories_list %}
</ul>


{% for category in site.categories %} 
  <h2 id="{{ category[0] }}-ref">{{ category[0] | join: "/" }}</h2>
  <ul>
    {% assign pages_list = category[1] %}  
    {% include JB/pages_list %}
  </ul>
{% endfor %}

{% include JB/posts_collate %}

<h2>All Pages</h2>
<ul>
{% assign pages_list = site.pages %}
{% include JB/pages_list %}
</ul>

{% for category in site.categories %}
  <h3>{{ category | first }}</h3>
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