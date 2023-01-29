<template>
  <footer>
    <subscribe />
    <div class="widgets">
      <div class="row mx-0 justify-content-center">
        <div class="col-sm-6 col-md-3 text-start">
          <div class="logo">
            <img
              :src="
                $store.state.websiteSettings.find((one) => one.key === 'logo')
                  .plain_value
              "
              alt="logoImage"
              style="width: 200px"
            />
          </div>
          <p>
            {{
              $store.state.websiteSettings.find(
                (one) => one.key === "description"
              ).plain_value
            }}
          </p>
          <div class="col-auto socials">
            <a
              v-for="link in $store.state.socialLinks"
              :key="link.key"
              :href="link.url"
              target="_blank"
            >
              <i :class="link.icon"></i>
            </a>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 text-start">
          <h5>usefull links</h5>
          <ul class="footer-list">
            <!-- <li><a href="#">About Us</a></li> -->
            <li v-for="link in $store.state.usefulLinks" :key="link.id">
              <a :href="link.url">{{ link.name }}</a>
            </li>
          </ul>
        </div>
        <div class="col-sm-6 col-md-3 text-start">
          <h5>Contact Us</h5>
          <ul class="footer-list footer-contact mb-10">
            <li>
              <i class="pe-7s-call"></i> Phone:
              {{
                $store.state.websiteSettings.find(
                  (one) => one.key === "contact_phone"
                ).plain_value
              }}
            </li>
            <li>
              <i class="pe-7s-mail"></i>
              Email:
              {{
                $store.state.websiteSettings.find((one) => one.key === "email")
                  .plain_value
              }}
            </li>
            <li>
              <i class="pe-7s-call"></i> Address:
              {{
                $store.state.websiteSettings.find(
                  (one) => one.key === "contact_address"
                ).plain_value
              }}
            </li>
          </ul>
        </div>
        <div class="col-sm-6 col-md-3 text-start">
          <ul class="footer-list">
            <!-- <li><a href="#">About Us</a></li> -->
            <h5>other pages</h5>
            <li v-for="page in $store.state.footerPages" :key="page.id">
              <nuxt-link
                :to="localePath(generatePagePath(page.id))"
                v-if="page.status"
                >{{ page.name }}</nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="copyrights">
      <div class="row mx-0 align-items-center justify-content-between">
        <div class="col-auto">© 2023 • Laravada • Powered By: Rail Coder</div>
        <div class="col-auto">
          Call Us:
          {{
            $store.state.websiteSettings.find(
              (one) => one.key === "contact_phone"
            ).plain_value
          }}
        </div>
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
  methods: {
    generatePagePath(id) {
      switch (id) {
        case 1:
          return "/about";
        case 2:
          return "/contact";
        case 3:
          return "/terms";
        case 4:
          return "/policy";
      }
    },
  },
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
