<template>
  <div class="contact-form-area pt-100 pb-70">
    <div class="container">
      <div class="section-title text-center">
        <h2>Let's Send Us a Message Below</h2>
      </div>
      <div class="row pt-45 align-items-center">
        <div class="col-lg-4">
          <div class="contact-info mr-20">
            <span>Contact Info</span>
            <h2>Let's Connect With Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              imperdiet varius mi, ut hendrerit magna mollis ac.
            </p>
            <ul>
              <li>
                <div class="content">
                  <div class="icon">
                    <i class="fa-solid fa-phone-volume"></i>
                  </div>
                  <i class="bx bx-phone-call"></i>
                  <h3>Phone Number</h3>
                  <a href="tel:+1(212)-255-5511">{{
                    $store.state.websiteSettings.find(
                      (one) => one.key === "contact_phone"
                    ).plain_value
                  }}</a>
                </div>
              </li>
              <li>
                <div class="content">
                  <div class="icon">
                    <i class="fa-solid fa-location-dot"></i>
                  </div>
                  <h3>Address</h3>
                  <a href="#">{{
                    $store.state.websiteSettings.find(
                      (one) => one.key === "contact_address"
                    ).plain_value
                  }}</a>
                </div>
              </li>
              <li>
                <div class="content">
                  <div class="icon">
                    <i class="fa-regular fa-message"></i>
                  </div>
                  <h3>Contact Info</h3>
                  <a href="mailto:hello@techex.com">{{
                    $store.state.websiteSettings.find(
                      (one) => one.key === "contact_email"
                    ).plain_value
                  }}</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="contact-form">
            <form id="contactForm" novalidate="true">
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group has-error">
                    <label>Your Name <span>*</span></label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      class="form-control"
                      :class="!name && emptyFields ? 'error' : ''"
                      required=""
                      data-error="Please Enter Your Name"
                      placeholder="Name"
                      v-model="name"
                    />

                    <span v-if="!name && emptyFields" class="error"
                      >This field can't be empty</span
                    >
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Your Email <span>*</span></label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="form-control"
                      :class="
                        (!email && emptyFields) || !validEmail ? 'error' : ''
                      "
                      required=""
                      data-error="Please Enter Your Email"
                      placeholder="Email"
                      v-model="email"
                    />

                    <span v-if="!email && emptyFields" class="error"
                      >This field can't be empty</span
                    >
                    <span v-if="!validEmail" class="error"
                      >Please enter valid email</span
                    >
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Phone Number <span>*</span></label>
                    <input
                      type="number"
                      name="phone_number"
                      id="phone_number"
                      required=""
                      data-error="Please Enter Your number"
                      class="form-control"
                      :class="!phone_number && emptyFields ? 'error' : ''"
                      placeholder="Phone Number"
                      v-model="phone_number"
                    />

                    <span v-if="!phone_number && emptyFields" class="error"
                      >This field can't be empty</span
                    >
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Your Subject <span>*</span></label>
                    <input
                      type="text"
                      name="msg_subject"
                      id="msg_subject"
                      class="form-control"
                      required=""
                      data-error="Please Enter Your Subject"
                      :class="!form_title && emptyFields ? 'error' : ''"
                      placeholder="Your Subject"
                      v-model="form_title"
                    />

                    <span v-if="!form_title && emptyFields" class="error"
                      >This field can't be empty</span
                    >
                  </div>
                </div>
                <div class="col-lg-12 col-md-12">
                  <div class="form-group">
                    <label>Your Message <span>*</span></label>
                    <textarea
                      name="message"
                      class="form-control"
                      id="message"
                      cols="30"
                      rows="8"
                      required=""
                      data-error="Write your message"
                      placeholder="Your Message"
                      v-model="form_subtitle"
                      :class="!form_subtitle && emptyFields ? 'error' : ''"
                    ></textarea>

                    <span v-if="!form_subtitle && emptyFields" class="error"
                      >This field can't be empty</span
                    >

                    <div class="help-block with-errors"></div>
                  </div>
                </div>
                <div class="col-lg-12 col-md-12">
                  <div class="agree-label">
                    <input type="checkbox" id="chb1" />
                    <label for="chb1">
                      Accept
                      <a href="terms-condition.html">Terms &amp; Conditions</a>
                      And <a href="privacy-policy.html">Privacy Policy.</a>
                    </label>
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 text-center">
                  <button
                    type="button"
                    class="default-btn btn-bg-two border-radius-50 disabled"
                    style="pointer-events: all; cursor: pointer"
                    @click="sendMessage"
                  >
                    Send Message <i class="bx bx-chevron-right"></i>
                  </button>
                  <div id="msgSubmit" class="h3 text-center hidden"></div>
                  <div class="clearfix"></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as EmailValidator from "email-validator";
export default {
  data() {
    return {
      emptyFields: false,
      name: "",
      email: "",
      phone_number: "",
      form_title: "",
      form_subtitle: "",
      validEmail: true,
    };
  },
  methods: {
    async sendMessage() {
      if (
        this.name &&
        this.email &&
        this.phone_number &&
        this.form_title &&
        this.form_subtitle
      ) {
        const dataToSend = {
          name: this.name,
          email: this.email,
          phone_number: this.phone_number,
          form_title: this.form_title,
          form_subtitle: this.form_subtitle,
        };

        if (!EmailValidator.validate(this.email)) {
          this.validEmail = false;
          return this.$toast.error("Email is invalid!");
        }

        this.validEmail = true;

        this.$store.state.showLoader = true;

        const response = await this.$axios.$post("/contacts", dataToSend);

        if (response.success) {
          this.$toast.success("Message sent successfully");
        }

        this.$store.state.showLoader = false;
      } else {
        this.emptyFields = true;
        this.$toast.error("Please fill all fields!");
      }
    },
  },
};
</script>

<style>
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
  margin-bottom: 0px;
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

input.error,
textarea.error {
  border-color: rgb(255, 101, 101) !important;
}

span.error {
  color: rgb(255, 101, 101);
}
</style>
