<template>
  <footer>
    <subscribe />
    <div class="widgets">
      <div class="row mx-0 justify-content-center">
        <div class="col-sm-6 col-md-3 text-start">
          <div class="logo">
            <img
              src="/assets/images/logo.png"
              alt="logoImage"
              style="width: 200px"
            />
          </div>
          <p>
            Grow Your Online Business Strategically, and Improve Customer
            Retention.
          </p>
          <div class="col-auto socials">
            <a
              :href="`https://${$store.state.footerData.facebook}`"
              target="_blank"
            >
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <!-- <a :href="`https://${$store.state.footerData.twitter}`" target="_blank" >
                        <i icon="fa-brands fa-twitter" />
                    </a> -->
            <a
              :href="`https://${$store.state.footerData.youtube}`"
              target="_blank"
            >
              <i class="fa-brands fa-youtube"></i>
            </a>
            <a
              :href="`https://${$store.state.footerData.instagram}`"
              target="_blank"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a
              :href="`https://${$store.state.footerData.linkedin}`"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <!-- <a :href="`https://${$store.state.footerData.tiktok}`" target="_blank" >
                        <i icon="fa-brands fa-tiktok" />          
                    </a> -->
          </div>
        </div>
        <div class="col-sm-6 col-md-3 text-start">
          <h5>Services</h5>
          <ul>
            <li>
              <a href="#">Marketing Plan</a>
            </li>
            <li>
              <a href="#">Marketing Plan</a>
            </li>
            <li>
              <a href="#">Marketing Plan</a>
            </li>
            <li>
              <a href="#">Marketing Plan</a>
            </li>
            <li>
              <a href="#">Marketing Plan</a>
            </li>
          </ul>
        </div>
        <div class="col-sm-6 col-md-3 text-start">
          <h5>contact us today</h5>
          <ul>
            <li>
              <a href="#">Marketing Plan</a>
            </li>
            <li>
              <a href="#">Marketing Plan</a>
            </li>
            <li>
              <a href="#">Marketing Plan</a>
            </li>
            <li>
              <a href="#">Marketing Plan</a>
            </li>
            <li>
              <a href="#">Marketing Plan</a>
            </li>
          </ul>
        </div>
        <div class="col-sm-6 col-md-3 text-start">
          <h5>Take A Survey</h5>
          <ul>
            <li>
              <nuxt-link :to="localePath('/contact')">Contact</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="localePath('/faq')">FAQs</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="localePath('/policy')">Privacy Policy</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="localePath('/terms')"
                >Terms & Conditions</nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="copyrights">
      <div class="row mx-0 align-items-center justify-content-between">
        <div class="col-auto">© 2023 • Laravada • Powered By: Rail Coder</div>
        <div class="col-auto">Call Us +111111111111</div>
        <div class="col-auto">
          {{
            $store.state.websiteSettings.find((one) => one.key === "email")
              .plain_value
          }}
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Subscribe from "../subscribe/subscribe.vue";
export default {
  name: "AppFooter",
  components: { Subscribe },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
<style>
.text-start {
  margin-bottom: 20px;
}

footer .widgets {
  padding-bottom: 20px;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 80px;
}
footer .widgets .logo {
  margin-bottom: 20px;
  text-align: start;
}
footer .widgets p {
  font-size: 32px;
  font-weight: 500;
  letter-spacing: -0.96px;
  line-height: 40.3167px;
  text-align: start;
}
footer .widgets .socials a {
  margin: 10px;
  font-size: 20px;
  text-decoration: none;
  color: #000;
}
footer h5 {
  font-weight: 800;
  margin: 0 0 20px;
  font-weight: 500;
  letter-spacing: -0.32px;
  line-height: 28px;
  color: rgb(0, 0, 0);
  font-size: 20px;
}
footer ul {
  list-style: none;
  padding: 0;
}
footer li {
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  margin-bottom: 12px;
}
footer li a {
  text-decoration: none;
  color: #000;
}
footer li a:hover {
  text-decoration: none;
  color: rgb(243, 95, 18);
}
footer .widgets img {
  max-width: 100%;
}
.copyrights {
  padding-top: 10px;
  margin-top: 0px;
  padding-right: 6%;
  padding-bottom: 10px;
  margin-bottom: 0px;
  padding-left: 6%;
}
.copyrights p {
  color: rgb(116, 116, 116);
  font-size: 12px;
  font-weight: 600;
  text-align: start;
  margin: 15px 0;
}
.copyrights p a {
  color: rgb(166, 166, 166);
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
}
</style>
