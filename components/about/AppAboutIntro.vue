<template>
  <section class="about-intro">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="clients-slider-img">
            <img
              :src="aboutSection.find((one) => one.key === 'about_image').value"
              alt="About Images"
            />
            <div class="clients-slider-circle"></div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="testSide p-4">
            <h5>
              {{ aboutSection.find((one) => one.key === "about_title").value }}
            </h5>
            <h2>
              {{
                aboutSection.find((one) => one.key === "about_sub_title").value
              }}
            </h2>

            <p>
              {{
                aboutSection.find((one) => one.key === "about_description")
                  .value
              }}
            </p>
            <h3>
              {{
                aboutSection.find((one) => one.key === "about_title_experience")
                  .value
              }}
            </h3>
            <div
              class="skill-bar"
              data-percentage="90%"
              v-if="aboutSection.find((one) => one.key === 'about_list').value"
            >
              <div
                v-for="item in aboutSection.find(
                  (one) => one.key === 'about_list'
                ).value"
                :key="item"
              >
                <h4 class="progress-title-holder clearfix">
                  <span class="progress-title">{{ item.title }}</span>
                </h4>
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    :style="{ width: item.percentage + '%' }"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppAboutIntro",
  props: ["aboutSection"],
};
</script>

<style>
.testSide {
  margin-top: 40px;
}
.about-intro {
  background-color: #f8f8f8;
  padding-bottom: 0 !important;
}
.about-intro .clients-slider-img {
  position: relative;
  /* margin-top: 100px; */
}
.about-intro .clients-slider-img img {
  position: relative;
  z-index: 1;
}
.about-intro .clients-slider-img .clients-slider-circle {
  position: absolute;
  z-index: 0;
  bottom: -10px;
  left: -35px;
  right: 0;
  margin: 0 auto;
  text-align: center;
  width: 100%;
  height: 80%;
  -webkit-animation: border-transform 15s infinite ease-in-out;
  animation: border-transform 15s infinite ease-in-out;
  background: var(--main-color);
}
.about-intro h5 {
  margin-bottom: 8px;
  font-weight: 600;
  display: block;
  color: var(--main-color);
}
.about-intro h2 {
  color: #212529;
  font-size: 35px;
  font-weight: 800;
  letter-spacing: -1px;
  line-height: 42px;
  /* text-align: left; */
  margin-top: 10px;
  margin-right: 0px;
  margin-bottom: 15px;
  margin-left: 0px;
}

.about-intro p {
  color: #9c9c9c;
  padding-top: 10px;
  margin-bottom: 0;
  max-width: 530px;
  margin-bottom: 20px;
}
.about-intro h3 {
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: 600;
  color: #212529;
}
.about-intro h4 {
  font-size: 16px;
  font-weight: 600;
  color: #212529;
  margin-bottom: 15px;
}
.about-intro .progress {
  height: 10px;
  background-color: #755fb983;
  border-radius: 5px;
  margin-bottom: 20px;
}
.about-intro .progress-bar {
  background-color: var(--main-color);
}
@keyframes border-transform {
  0%,
  100% {
    border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
  }
  14% {
    border-radius: 50% 20% 50% 30% / 49% 60% 40% 51%;
  }
  28% {
    border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%;
  }
  42% {
    border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%;
  }
  56% {
    border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%;
  }
  70% {
    border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%;
  }
  84% {
    border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%;
  }
}
</style>
