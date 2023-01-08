<template>
  <section class="intro">
    <div class="row m-0 align-items-center">
      <div class="col-lg-7">
        <h1>Unlock Your Online Growth Potential</h1>
        <p>
          Online marketing to secure customer retention, leads, and sales. We
          focus on the bigger picture.
        </p>
        <a href="/services" class="btn">
          Our Services
          <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
      <div class="col-lg-5">
        <div class="form text-center">
          <span>
            <img
              src="https://avada.theme-fusion.com/marketing-consultant/wp-content/uploads/sites/142/2020/07/marketing-consultant-expert.jpg"
              alt=""
            />
          </span>
          <h2>Richard Madsen</h2>
          <h3>Marketing Consultant Expert</h3>
          <a href="#" class="phone">
            <i class="fa-solid fa-phone"></i>
            +1111111111111
          </a>
          <b-form-input placeholder="Your Name*"></b-form-input>
          <b-form-input placeholder="Your Email*"></b-form-input>
          <b-form-input placeholder="Your Phone Number*"></b-form-input>
          <a href="#" class="btn">Get A Callback</a>
          <small>By submitting my data I agree to be contacted</small>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import "animate.css/animate.min.css";
export default {
  name: "AppHomeIntro",
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.intro {
  background-color: rgba(255, 255, 255, 0);
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.24) 93%,
      rgb(255, 255, 255) 93%
    ),
    url("https://avada.theme-fusion.com/marketing-consultant/wp-content/uploads/sites/142/2020/06/marketing-intro.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 80px 32px 0;
  background-attachment: fixed;
}
.intro h1 {
  font-weight: 500;
  margin: 0;
  font-size: 72px;
  letter-spacing: 2px;
  color: #fff;
  line-height: 80px;
  text-align: start;
  margin: 12px 0 24px;
}

@include xs {
  .intro h1 {
    font-size: 42px;
    line-height: 50px;
  }
}

.intro p {
  text-align: start;
  font-size: 30px;
  line-height: 42px;
  letter-spacing: -0.6px;
  color: #fff;
  font-weight: 400;
  margin-bottom: 20px;
}

@include xs {
  .intro p {
    font-size: 22px;
    line-height: 30px;
  }
}

.intro .btn {
  border-radius: 10px;
  border: 2px solid #000;
  padding: 17px 40px;
  background: #fff;
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.18px;
  margin-top: 16px;
  margin-bottom: 20px;
}

@include xs {
  .intro .btn {
    padding: 17px 30px;
    width: 200px;
  }
}

.intro .btn i {
  margin-left: 12px;
}
.intro .btn:hover {
  color: #fff;
  background-color: transparent;
  border-color: #fff;
}
.intro .form {
  width: 438px;
  max-width: 100%;
  padding: 24px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 24px 32px -6px;
  background: #fff;
  margin-bottom: -50px;
}
.intro .form img {
  height: 80px;
  width: 80px;
  border-radius: 50%;
}
.intro .form h2 {
  font-size: 26px;
  font-weight: 500;
  letter-spacing: -0.416px;
  line-height: 36.4px;
  margin: 12px 0 4px;
}
.intro .form h3 {
  font-size: 19px;
  font-weight: 400;
  line-height: 26.4px;
  margin: 12px 0 4px;
  color: rgb(119, 119, 119);
}
.intro .form .phone {
  text-decoration: none;
  color: rgb(248, 96, 17);
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.18px;
  line-height: 21px;
  margin: 0 0 10px;
  padding: 17px 40px;
  display: inline-block;
}
.intro .form i {
  margin-right: 12px;
}
.intro .form input {
  margin: 8px 0;
  padding: 0 18px;
  color: rgb(94, 94, 94);
  font-size: 18px;
  font-weight: 400;
  height: 60px;
  border-radius: 10px;
  border: 1px solid rgb(219, 219, 219);
  color: rgb(94, 94, 94);
}
.intro .form input::placeholder {
  color: #a7a7a7;
}
.intro .form input:focus {
  border: 1px solid rgb(248, 96, 17);
  box-shadow: none;
}
.intro .form .btn {
  padding: 17px 40px;
  background-color: rgb(248, 96, 17);
  display: block;
  margin: 8px 0;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.18px;
  line-height: 21px;
  text-transform: capitalize;
  border-radius: 10px;
  border: 1px solid rgb(248, 96, 17);
  color: #fff;
}
.intro .form .btn:hover {
  background-color: rgb(153, 63, 15);
  border: 1px solid rgb(153, 63, 15);
}
.intro .form small {
  color: rgb(119, 119, 119);
  font-size: 13px;
  font-weight: 400;
  line-height: 24px;
}
</style>
