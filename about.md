---
layout: page
title: courses
permalink: /courses/
---


{% capture catog %}{% for album in site.cours  %}{{ album.categories | first }}{% endfor %}{% endcapture %}

{{ catog | split: '' | uniq | join: ' ' }}
{% for album in catog  %}
  <h2>{{ album }}</h2>
{% endfor %}

{% for category in site.categories reversed %}
   <h1 class="archive__subtitle" name="{{ category | first }}">Teaching {{ category | first }}</h1>
   <div class="list__item">
       {% for posts in category  %}
       {% for post in posts %}
       {% if post.title %}<article class="archive__item" itemscope="" itemtype="http://schema.org/CreativeWork"> <h3 class="archive__item-title" itemprop="headline"><a href="{{ post.url }}" rel="permalink">{{ post.title }}</a></h3></article>{% endif %}
       {% endfor %}
       {% endfor %}
   </div>
  {% endfor %}