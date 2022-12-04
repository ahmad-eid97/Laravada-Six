<template>
  <div class="faq-area pt-100 pb-70">
    <div class="container">
      <div class="section-title text-center">
        <h2>Frequently Asked Questions</h2>

        <p class="mx-auto">
          We are the agency who always gives you a priority on the free of
          question and you can easily make a question on the bunch.
        </p>
      </div>
      <div class="row pt-45">
        <div class="col-lg-6">
          <div class="faq-content">
            <div class="faq-accordion">
              <div class="accordion">
                <b-card
                  v-for="faq in faqs.fags.slice(
                    0,
                    Math.ceil(faqs.fags.length / 2)
                  )"
                  :key="faq.id"
                  no-body
                  class="accordion-item"
                >
                  <b-card-header
                    header-tag="header"
                    class="accordion-title"
                    v-b-toggle="'accordion-' + faq.id"
                    role="tab"
                  >
                    <i class="fa-solid fa-circle-plus"></i>
                    <i class="fa-solid fa-circle-minus"></i>
                    {{ faq.question }}
                  </b-card-header>
                  <b-collapse
                    class="accordion-content"
                    :id="`accordion-${faq.id}`"
                    visible
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <p>
                      {{ faq.answer }}
                    </p>
                  </b-collapse>
                </b-card>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="faq-content">
            <div class="faq-accordion">
              <div class="accordion">
                <b-card
                  v-for="faq in faqs.fags.slice(
                    Math.ceil(faqs.fags.length / 2),
                    faqs.fags.length
                  )"
                  :key="faq.id"
                  no-body
                  class="accordion-item"
                >
                  <b-card-header
                    header-tag="header"
                    class="accordion-title"
                    v-b-toggle="'accordion-' + faq.id"
                    role="tab"
                  >
                    <i class="fa-solid fa-circle-plus"></i>
                    <i class="fa-solid fa-circle-minus"></i>
                    {{ faq.question }}
                  </b-card-header>
                  <b-collapse
                    class="accordion-content"
                    :id="`accordion-${faq.id}`"
                    visible
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <p>
                      {{ faq.answer }}
                    </p>
                  </b-collapse>
                </b-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppFaqFaqs",
  props: ["faqs"],
};
</script>

<style>
.faq-area .section-title h2 {
  max-width: 600px;
  color: #252525;
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

.faq-content .faq-accordion .accordion .accordion-item {
  display: block;
  margin-bottom: 15px;
  background-color: #fff;
  -webkit-box-shadow: 0 0 15px rgba(0, 0, 0, 0.07);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.07);
}
.faq-content .faq-accordion .accordion .accordion-title {
  padding: 15px 60px 15px 20px;
  color: #fff;
  text-decoration: none;
  position: relative;
  display: block;
  font-size: 18px;
  font-weight: 600;
  background-color: transparent;
  border: none;
}
.faq-content .faq-accordion .accordion .accordion-content {
  position: relative;
  margin-top: 0;
  padding-bottom: 10px;
  padding-right: 20px;
  padding-left: 20px;
}
.faq-content .faq-accordion .accordion .accordion-title i {
  position: absolute;
  right: 15px;
  top: 14px;
  font-size: 25px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  font-size: 24px;
  width: 30px;
  height: 30px;
  color: #fff;
  text-align: center;
  line-height: 30px;
  background-color: transparent;
  border-radius: 50px;
  border: none;
}
.faq-content .faq-accordion .accordion .accordion-title .fa-circle-plus {
  display: block;
}
.faq-content .faq-accordion .accordion .accordion-title .fa-circle-minus {
  display: none;
}
.faq-content .faq-accordion .accordion .accordion-title {
  background-color: var(--main-color);
  background-image: none;
}
.faq-content .faq-accordion .accordion .accordion-title.not-collapsed {
  color: #fff;
}
.faq-content .faq-accordion .accordion .accordion-title.not-collapsed i {
  color: #ffefe6;
}
.faq-content
  .faq-accordion
  .accordion
  .accordion-title.not-collapsed
  .fa-circle-plus {
  display: none;
}
.faq-content
  .faq-accordion
  .accordion
  .accordion-title.not-collapsed
  .fa-circle-minus {
  display: block;
}
</style>
