<template>
  <div class="qoutation">
    <qoutationHeading />
    <div class="container">
      <div class="qoutationWrapper">
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
                  <label>Whatsapp Number <span>*</span></label>
                  <input
                    type="number"
                    name="whatsapp_number"
                    id="whatsapp_number"
                    required=""
                    data-error="Please Enter Your number"
                    class="form-control"
                    :class="!whatsapp_number && emptyFields ? 'error' : ''"
                    placeholder="Whatsapp Number"
                    v-model="whatsapp_number"
                  />

                  <span v-if="!whatsapp_number && emptyFields" class="error"
                    >This field can't be empty</span
                  >
                </div>
              </div>
              <div class="col-lg-12 col-md-12">
                <div class="form-group">
                  <label>Preferred Contact Method <span>*</span></label>
                  <select
                    name="preferred_method"
                    required
                    v-model="preferred_method"
                    :class="!preferred_method && emptyFields ? 'error' : ''"
                  >
                    <option disabled>select method</option>
                    <option value="email" selected>email</option>
                    <option value="phone">phone</option>
                  </select>

                  <span v-if="!preferred_method && emptyFields" class="error"
                    >This field can't be empty</span
                  >

                  <div class="help-block with-errors"></div>
                </div>
              </div>
              <div class="col-lg-12 col-md-12">
                <div class="form-group">
                  <label>Details <span>*</span></label>
                  <textarea
                    name="dettails"
                    class="form-control"
                    id="message"
                    cols="30"
                    rows="8"
                    required=""
                    data-error="Write your message"
                    placeholder="details"
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
                  @click="sendQoutation"
                >
                  Post Qoutation <i class="bx bx-chevron-right"></i>
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
</template>

<script>
import qoutationHeading from "../../components/qoutation/qoutationHeading.vue";
import * as EmailValidator from "email-validator";

export default {
  components: {
    qoutationHeading,
  },
  data() {
    return {
      emptyFields: false,
      name: "",
      email: "",
      phone_number: "",
      whatsapp_number: "",
      preferred_method: "email",
      form_subtitle: "",
      validEmail: true,
    };
  },
  methods: {
    async sendQoutation() {
      if (
        this.name &&
        this.email &&
        this.phone_number &&
        this.whatsapp_number &&
        this.preferred_method &&
        this.form_subtitle
      ) {
        const dataToSend = {
          name: this.name,
          email: this.email,
          phone_number: this.phone_number,
          form_title: this.form_title,
          preferred_method: this.preferred_method,
          details: this.form_subtitle,
        };

        if (!EmailValidator.validate(this.email)) {
          this.validEmail = false;
          return this.$toast.error("Email is invalid!");
        }

        this.validEmail = true;

        this.$store.state.showLoader = true;

        const response = await this.$axios.$post("/request_quotes", dataToSend);

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

<style lang="scss">
.qoutationWrapper {
  padding: 100px 0;
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
.contact-info * {
  color: #000 !important;
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

.contact-form select {
  width: 100%;
  display: block;
  height: 50px;
  color: #212529;
  border: 1px solid var(--main-color);
  background-color: #fff;
  font-size: 15px;
  padding: 10px 20px;
  width: 100%;
  border-radius: 0;
  font-weight: 500;
  outline: none;
}

.contact-form textarea {
  height: 120px !important;
}

input.error,
textarea.error {
  border-color: rgb(255, 101, 101) !important;
}

span.error {
  color: rgb(255, 101, 101);
}
</style>
