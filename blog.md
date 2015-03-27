---
layout: page
title : My Thoughts
header : Post Archive
short_title: Thoughts
group: navigation
---
{% include JB/setup %}

{% for category_name in site.categories %}
    <h2>{{ category_name }}</h2>
    <ul>
        {% for post in site.categories[category_name] %}
            <li>{{ post.title }}</li>
        {% endfor %}
    </ul>
{% endfor %}