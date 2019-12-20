
# Dreamr

  <a href="https://dreamr-app.herokuapp.com/#/">
    <img src="https://raw.githubusercontent.com/applecidera/Dreamr/master/app/assets/images/dreamr.png">
  </a>

*Show off your dreams.*


*Experience others.*

---

## Table of Contents
1. Introduction
2. Features
3. Technologies
4. Live Website
5. Todos

---

## Introduction
Dreamr is a content-driven personal blog site that allows users to express themselves as well as their dreams. Supporting a variety of media, dreams can now be shared in countless different ways: varying from text, images, videos, quotes, and audio.

---

## Features
Dreamr empowers its users with:
* interactive and intuitive ways to create and share dreams
* ways to explore and expierence the dreams of others
* the ability to modify and curate their own dreams

Since posts can be a multitude of content types, conditionals had to be included within each post to ensure that the correct formatting would occure, utlimately resulting in a seamless experience for the end-user.
```
return (
  <div key={post.id} className="post-container">
    <img className="avatar" src={avatar}></img>
    <div className="postbox">
      <div className ="post-top">{topBar}</div>
      {titleGoesHere}
      {imagesGoesHere}
      {audioGoesHere}
      {videoGoesHere}
      {textGoesHere}
      {tagsGoesHere}
      <div className ="post-bottom">{botBar}</div>
    </div>
  </div>
);
```
Content types not associated with a post are not rendered whereas proper content is then formatted and inserted into a post-block.


Animations were added to facilitate user experience

<img src="https://raw.githubusercontent.com/applecidera/Dreamr/master/app/assets/images/zip-up.gif" />
---

## Technologies
Dreamr is created with:
* Front-End: React/Redux 
* Back-End: Rails/PostgresSQL
* Media Content is stored on AWS S3

---

## Live Website

<a href="https://dreamr-app.herokuapp.com/#/">
    <img src="https://raw.githubusercontent.com/applecidera/Dreamr/master/app/assets/images/dreamr.png">
</a>

[Click Here](https://dreamr-app.herokuapp.com/#/) to try out Dreamr

---

### Todos
* implement ways to follow other users and like their dreams
* implement a search feature to quickly and easily look up users
* implement a reply feature that allows users to leave replies on each others dreams
