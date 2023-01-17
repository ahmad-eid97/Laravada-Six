<template>
  <div class="blog-article">
    <div class="blog-article-img">
      <img :src="blogDetails.image" alt="Images" />
      <div class="blog-article-tag">
        <h3>{{ $date(new Date(blogDetails.publish_date), "dd") }}</h3>
        <span>{{ $date(new Date(blogDetails.publish_date), "MMM") }}</span>
      </div>
    </div>
    <div class="blog-article-title">
      <ul>
        <li>
          <i class="fa-solid fa-user"></i>
          By {{ blogDetails.username }}
        </li>
        <li>
          <i class="fa-solid fa-eye"></i>
          {{ blogDetails.views }} Views
        </li>
        <li>
          <i class="fa-solid fa-comments"></i>
          {{ blogDetails.comments.length }} Comments
        </li>
      </ul>
      <h2>10 Ways to Get Efficient Result and Benefits</h2>
    </div>
    <div class="article-content">
      <p>{{ blogDetails.description }}</p>
    </div>
    <div class="blog-article-share">
      <div class="row align-items-center">
        <div class="col-lg-7 col-sm-7 col-md-7">
          <div class="blog-tag">
            <ul v-if="blogDetails.tags.length >= 1">
              <li><i class="bx bx-purchase-tag-alt"></i> Tags:</li>
              <li v-for="tag in blogDetails.tags.slice(0, 5)" :key="tag">
                <a href="#">{{ tag.name }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-5 col-sm-5 col-md-5">
          <ul class="social-icon">
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/?lang=en" target="_blank">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/" target="_blank">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="comments-wrap">
      <div class="comment-title">
        <h3 class="title">Comments ({{ blogDetails.comments.length }})</h3>
      </div>
      <ul class="comment-list" v-if="blogDetails.comments.length >= 1">
        <li v-for="comment in blogDetails.comments" :key="comment.id">
          <img :src="comment.image" alt="Image" />
          <h3>{{ comment.username }}</h3>
          <span>{{ comment.publish_date }}</span>
          <p>
            {{ comment.content }}
          </p>
          <a href="#"> Reply</a>
        </li>
      </ul>
    </div>
    <div class="comments-form">
      <h3 class="title">Leave A Comment</h3>
      <div class="contact-form">
        <form id="contactForm" novalidate="true">
          <div class="row">
            <div class="col-lg-6 col-sm-6">
              <div class="form-group">
                <label>Your Name <span>*</span></label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="form-control"
                  required=""
                  data-error="Please enter your name"
                  placeholder="Your Name"
                />
              </div>
            </div>
            <div class="col-lg-6 col-sm-6">
              <div class="form-group">
                <label>Your Email <span>*</span></label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="form-control"
                  required=""
                  data-error="Please enter your email"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div class="col-lg-12 col-sm-12">
              <div class="form-group">
                <label>Your website <span>*</span></label>
                <input
                  type="text"
                  name="websit"
                  class="form-control"
                  required=""
                  data-error="Your website"
                  placeholder="Your website"
                />
              </div>
            </div>
            <div class="col-lg-12 col-md-12">
              <div class="form-group">
                <label>Your website <span>*</span></label>
                <textarea
                  name="message"
                  class="form-control"
                  id="message"
                  cols="30"
                  rows="8"
                  required=""
                  data-error="Write Your Review"
                  placeholder="Your Review"
                ></textarea>
              </div>
            </div>
            <div class="col-lg-12 col-md-12">
              <div class="form-group checkbox-option">
                <input type="checkbox" id="chb2" />
                <p>
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </p>
              </div>
            </div>
            <div class="col-lg-12 col-md-12">
              <button
                type="submit"
                class="default-btn btn-bg-two border-radius-50 disabled"
                style="pointer-events: all; cursor: pointer"
              >
                Post A Comment
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppBlogBody",
  props: ["blogDetails"],
};
</script>

<style>
.blog-article {
  margin-bottom: 30px;
}
.blog-article .blog-article-img {
  margin-bottom: 30px;
  position: relative;
}
.blog-article .blog-article-img img {
  border-radius: 12px;
  width: 100%;
  height: 500px;
}
.blog-article .blog-article-img .blog-article-tag {
  background-color: var(--main-color);
  padding: 15px 12px;
  position: absolute;
  bottom: -20px;
  right: 30px;
  border-radius: 12px;
  text-align: center;
}
.blog-article .blog-article-img .blog-article-tag h3 {
  font-size: 17px;
  color: #fff;
  line-height: 1;
  margin-bottom: 0;
  font-weight: 500;
}
.blog-article .blog-article-img .blog-article-tag span {
  font-size: 17px;
  color: #fff;
  line-height: 1;
  font-weight: 500;
}
.blog-article .blog-article-title {
  margin-bottom: 20px;
}
.blog-article .blog-article-title ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.blog-article .blog-article-title ul li {
  display: inline-block;
  font-size: 15px;
  color: #212529;
  margin-right: 30px;
  position: relative;
  font-weight: 500;
}
.blog-article .blog-article-title ul li i {
  font-size: 18px;
  margin-right: 10px;
  position: relative;
  top: 3px;
  color: var(--main-color);
}
.blog-article .blog-article-title h2 {
  margin-top: 15px;
  font-size: 26px;
  max-width: 650px;
  margin-bottom: 0;
  color: #212529;
}
.blog-article .article-content {
  padding-bottom: 10px;
}
.blog-article .article-content p {
  margin-bottom: 20px;
}
.blog-article .article-content .blockquote {
  position: relative;
  z-index: 1;
  margin-bottom: 30px;
  margin-top: 30px;
  background-color: #fff;
  -webkit-box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
  padding: 20px 30px 20px 50px;
  margin-left: 35px;
}
.blog-article .article-content .blockquote p {
  font-size: 15px;
  color: #444;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 0;
}
.blog-article .article-content .blockquote span {
  font-size: 15px;
  color: var(--main-color);
  font-weight: 600;
}
.blog-article .article-content .blockquote .icon {
  font-size: 35px;
  width: 70px;
  height: 70px;
  line-height: 70px;
  color: #fff;
  background: var(--main-color);
  text-align: center;
  border-radius: 50px;
  position: absolute;
  top: 24%;
  left: -35px;
}
.blog-article .blog-article-share {
  padding: 10px 0;
  border-top: 1px solid #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
  margin-bottom: 30px;
}
.blog-article .blog-article-share .blog-tag ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.blog-article .blog-article-share .blog-tag ul li {
  display: inline-block;
  padding: 5px 3px;
  -webkit-transition: 0.7s;
  transition: 0.7s;
  color: #252525;
  font-weight: 400;
  margin-right: 5px;
}
.blog-article .blog-article-share .blog-tag ul li i {
  color: var(--main-color);
  font-size: 18px;
  position: relative;
  top: 3px;
}
.blog-article .blog-article-share .blog-tag ul li a {
  color: #fff;
  background-color: var(--main-color);
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 14px;
}
.blog-article .blog-article-share .social-icon {
  margin: 0;
  padding: 0;
  list-style: none;
  float: right;
}
.blog-article .blog-article-share .social-icon li {
  display: inline-block;
  margin-right: 5px;
}
.blog-article .blog-article-share .social-icon li a {
  border-radius: 0;
  width: 35px;
  height: 35px;
  line-height: 37px;
  text-align: center;
  color: var(--main-color);
  background-color: #fff;
  -webkit-box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  display: inline-block;
  border-radius: 12px;
}
.blog-article .comments-wrap {
  margin-bottom: 30px;
}
.blog-article .comments-wrap .comment-title .title {
  font-size: 24px;
  margin-bottom: 0;
  color: #212529;
}
.blog-article .comments-wrap .comment-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.blog-article .comments-wrap .comment-list li {
  position: relative;
  padding: 30px;
  padding-left: 75px;
  border-bottom: 1px solid #e1e1e1;
}
.blog-article .comments-wrap .comment-list li img {
  position: absolute;
  top: 30px;
  left: 0;
  border-radius: 12px;
  width: 54px;
}
.blog-article .comments-wrap .comment-list li h3 {
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: 600;
  color: #212529;
}
.blog-article .comments-wrap .comment-list li span {
  font-size: 15px;
  color: var(--main-color);
}
.blog-article .comments-wrap .comment-list li p {
  margin-top: 10px;
  margin-bottom: 0;
}
.blog-article .comments-wrap .comment-list li a {
  color: var(--main-color);
  font-weight: 600;
  position: absolute;
  top: 30px;
  right: 0;
}
.blog-article .comments-form {
  margin-top: 30px;
  margin-bottom: 30px;
}
.blog-article .comments-form .title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #212529;
}
.blog-article .comments-form .contact-form {
  -webkit-box-shadow: none;
  box-shadow: none;
  padding: 0;
  background-color: #fff;
}
.contact-form .form-group.checkbox-option #chb2 {
  position: absolute;
  top: 6px;
  left: 0;
  height: 16px;
  width: 16px;
}
.contact-form .form-group.checkbox-option p {
  padding-left: 25px;
  font-size: 15px;
}
.contact-form-area .section-title h2 {
  max-width: 600px;
  color: #212529;
  font-size: 35px;
  font-weight: 800;
  letter-spacing: -1px;
  line-height: 42px;
  text-align: left;
  margin-top: 10px;
  margin-right: auto;
  margin-bottom: 15px;
  margin-left: auto;
  text-align: center;
}

.contact-form-area h2 {
  font-size: 35px;
  font-weight: 600;
  margin-top: 0;
  line-height: 1.2;
  color: #212529;
  margin-bottom: 0;
}
.contact-info::before {
  content: "";
  position: absolute;
  opacity: 0.1;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-image: url(/assets/images/call-shap1.png);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.contact-form-area .contact-info {
  margin-bottom: 30px;
  background-color: var(--main-color);
  padding: 52px 35px 22px;
  border-radius: 12px;
  position: relative;
  z-index: 1;
}
.contact-form-area .contact-info span {
  color: #fff;
  display: block;
  margin-bottom: 5px;
}
.contact-form-area .contact-info h2 {
  color: #fff;
  font-size: 26px;
  margin-bottom: 15px;
}
.contact-form-area .contact-info p {
  color: #fff;
  margin-bottom: 20px;
}
.contact-form-area .contact-info ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.contact-form-area .contact-info ul li {
  display: block;
  margin-bottom: 30px;
  padding-left: 60px;
  position: relative;
}
.contact-info ul li .content .icon {
  width: 45px;
  height: 45px;
  line-height: 45px;
  background-color: #fff;
  font-size: 20px;
  color: var(--main-color);
  border-radius: 50px;
  border: 1px solid #fff;
  margin-bottom: 10px;
  text-align: center;
  position: absolute;
  left: 0;
  top: 0;
}
.contact-info ul li .content h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #fff;
  display: block;
}
.contact-form-area .contact-info ul li .content a {
  color: #fff;
  display: block;
  font-weight: 400;
  font-size: 15px;
}
.contact-form .form-group label {
  color: #212529;
  font-size: 15px;
  margin-bottom: 15px;
  font-weight: 500;
}
.contact-form .form-group label span {
  color: var(--main-color);
}
.contact-form .form-group .form-control {
  height: 50px;
  color: #212529;
  border: 1px solid var(--main-color);
  background-color: #fff;
  font-size: 15px;
  padding: 10px 20px;
  width: 100%;
  border-radius: 0;
  font-weight: 500;
}
.contact-form .form-group {
  margin-bottom: 20px;
  position: relative;
}
.contact-form .agree-label {
  margin-bottom: 15px;
  position: relative;
}
.contact-form .agree-label input#chb1 {
  position: absolute;
  top: 5px;
  left: 0;
  width: auto;
  height: auto;
}
.contact-form .agree-label label {
  font-weight: 500;
  color: #252525;
  margin-left: 25px;
}
.contact-form .agree-label label a,
.contact-form a {
  color: var(--main-color);
}

.contact-form .default-btn,
.contact-form .default-btn:hover {
  background-color: var(--main-color);
  border-radius: 25px;
  color: #fff;
  padding: 10px 16px;
  font-weight: bold;
  border: none;
}
</style>
