---
layout: page
title: Software, Ultimate, and more
---
{% include JB/setup %}

## True Full-Stack development for the sole developer

I've developed a tech stack viable for quick setup of informational websites. I work with clients to ensure their exact vision is created, for a fraction of the cost. I'm interested in helping freelance developers create a viable plan for long-term business.

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>



