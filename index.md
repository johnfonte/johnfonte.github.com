---
layout: page
title: Software, Ultimate, and more
---
{% include JB/setup %}

So glad you could make it! My name is John Fonte, and I'm a software engineer based in Ann Arbor, MI.

I'm writing about my three passions - Software Development, Ultimate Frisbee, and Freelancing.

Follow me on Twitter or shoot me an email if you'd like to chat!

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>



