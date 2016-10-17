---
layout: archive
permalink: /cours/
title: "Cours"
author_profile: false
header:
  overlay_image: courses_banner.jpg
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
---

{% include base_path %}

{% capture catog %}{% for album in site.cours  %}{{ album.categories | first }}{% endfor %}{% endcapture %}

{{ catog | split: '' | uniq | join: ' ' }}
{% for album in catog  %}
  <h2>{{ album }}</h2>
{% endfor %}

<!--
{% for album in site.cours  %}
  <h2>{{ album.title }}</h2>
  <h2>{{ album.categories }}</h2>
{% endfor %}


{% assign courses = site.cours | group_by: "category" reversed %}
{% for group in courses %}
    {{ group.title }}
{%endfor%}
{% assign mycategory = site.cours | group_by: "category" reversed %}
{% for myposts in mycategory %}
  <h2>{{ myposts.title }}</h2>
  <h2>{{ myposts.label }}</h2>
<h2>{{ myposts.label }}</h2>
{% for post in myposts.item %}
<h2>{{ post.title }}</h2>
{% endfor %} hadi<br>
{% endfor %}

{% assign groups = site.cours | group_by: "category" reversed %}
{% for group in groups %}
<h2>{{ group.name }}</h2>
<h2>{{ group.title }}</h2>

{% for item in group.items %}
<h3>  {{ item.title }}</h3>
{% endfor %}
{% endfor %}
-->
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