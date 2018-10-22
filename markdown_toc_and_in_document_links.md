---
date: Monday, 22 October 2018 at 18:04:17
title: markdown_toc_and_in_document_links
---# Markdown TOC and in document links #


Put directly closed HTML anchor `<a name="id"/>` tags in your document where you want to link to as follows

````markdown
<a name="important_title"/>
## Important Title that you must read ##
````

*Note:* the anchor tag must contain the `name` attribute which will be used as an id to reference to.
<br>
Adding links is simple just put a `#` hash sign in front of the link like this:

````markdown
[click here to go to the important title stuff](#important_title)
````

which will display like this: [click here to go to the important title stuff](#important_title)
<br>
creating a table of contents with links from the reference points also becomes easy as the example below shows.

<br>

---


# example #

<a name="toc"/>
## contents: ##

 * [data](#dataname)
 * [requests](#requests)
 * [updates](#updates)
 * [documents](#documents)

<br>

---

<a name="dataname"/>
## [▲](#toc) data ##

<br>

---

<a name="requests"/>
## [▲](#toc) requests ##

<br>

---

<a name="udpates"/>
## [▲](#toc) updates ##

<br>

---

<a name="documents"/>
## [▲](#toc) documents ##

<br>

---

