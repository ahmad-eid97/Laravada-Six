<template>
  <section class="activities">
    <div class="container">
      <div class="row intro-text">
        <h2>
          {{ activities.find((one) => one.key === "activities_title").value }}
        </h2>
        <div class="col-12 seprator"></div>
        <p>
          {{
            activities.find((one) => one.key === "activities_description").value
          }}
        </p>
      </div>
      <div class="row">
        <swiper :options="swiperOption" class="owl-carousel">
          <swiper-slide
            v-for="activity in activities.find(
              (one) => one.key === 'activities_list'
            ).value"
            :key="activity.id"
          >
            <div class="item">
              <div class="flip-box">
                <div class="flip-box-front">
                  <div class="flip-box-front-inner">
                    <div class="flip-box-circle">
                      <i :class="activity.icon"></i>
                    </div>
                    <h2>{{ activity.title }}</h2>
                    {{ activity.description.substring(0, 150) }}
                    {{ activity.description.length > 150 ? "..." : "" }}
                  </div>
                </div>
                <div class="flip-box-back">
                  <div class="flip-box-back-inner">
                    <div class="text-center">
                      <a :href="activity.link" class="btn">More Details</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppHomeactivities",
  props: ["activities"],
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 50,
        breakpoints: {
          // when window width is >= 320px
          100: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
        },
      },
    };
  },
  mounted() {
    document
      .querySelector(".activities")
      .style.setProperty(
        "--acttivities-bg",
        this.activities.find(
          (one) => one.key === "activities_background_active_section"
        ).value === "color"
          ? this.activities.find(
              (one) => one.key === "activities_background_color_section"
            ).value
          : `url(${
              this.activities.find(
                (one) => one.key === "activities_background_image_section"
              ).value
            })`
      );

    document
      .querySelector(".activities")
      .style.setProperty(
        "--acttivities-fontSize",
        `${
          this.activities.find(
            (one) => one.key === "activities_font_size_section"
          ).value
        }px`
      );

    if (
      this.activities.find(
        (one) => one.key === "activities_border_position_section"
      ) &&
      this.activities.find(
        (one) => one.key === "activities_border_position_section"
      ).value === "both"
    ) {
      document
        .querySelector(".activities")
        .style.setProperty(
          "--acttivities-border-top",
          `${
            this.activities.find(
              (one) => one.key === "activities_border_size_section"
            ).value
          }px ${
            this.activities.find(
              (one) => one.key === "activities_border_type_section"
            ).value
          } ${
            this.activities.find(
              (one) => one.key === "activities_border_color_section"
            ).value
          }`
        );

      document
        .querySelector(".activities")
        .style.setProperty(
          "--acttivities-border-bottom",
          `${
            this.activities.find(
              (one) => one.key === "activities_border_size_section"
            ).value
          }px ${
            this.activities.find(
              (one) => one.key === "activities_border_type_section"
            ).value
          } ${
            this.activities.find(
              (one) => one.key === "activities_border_color_section"
            ).value
          }`
        );
    } else if (
      this.activities.find(
        (one) => one.key === "activities_border_position_section"
      ) &&
      this.activities.find(
        (one) => one.key === "activities_border_position_section"
      ).value === "top"
    ) {
      document
        .querySelector(".activities")
        .style.setProperty(
          "--acttivities-border-top",
          `${
            this.activities.find(
              (one) => one.key === "activities_border_size_section"
            ).value
          }px ${
            this.activities.find(
              (one) => one.key === "activities_border_type_section"
            ).value
          } ${
            this.activities.find(
              (one) => one.key === "activities_border_color_section"
            ).value
          }`
        );
    } else if (
      this.activities.find(
        (one) => one.key === "activities_border_position_section"
      ) &&
      this.activities.find(
        (one) => one.key === "activities_border_position_section"
      ).value === "top"
    ) {
      document
        .querySelector(".activities")
        .style.setProperty(
          "--acttivities-border-bottom",
          `${
            this.activities.find(
              (one) => one.key === "activities_border_size_section"
            ).value
          }px ${
            this.activities.find(
              (one) => one.key === "activities_border_type_section"
            ).value
          } ${
            this.activities.find(
              (one) => one.key === "activities_border_color_section"
            ).value
          }`
        );
    }
  },
};
</script>
<style lang="scss">
.activities {
  padding: 50px 0;
  margin-top: 42px;

  --acttivities-bg: #fff;
  --acttivities-fontSize: 20px;
  --acttivities-border-top: 0px solid #fff;
  --acttivities-border-bottom: 0px solid #fff;

  background: var(--acttivities-bg);
  border-top: var(--acttivities-border-top);
  border-bottom: var(--acttivities-border-bottom);
  background-repeat: no-repeat;
  background-size: cover;
  h2 {
    font-size: var(--acttivities-fontSize);
  }
}
.activities .intro-text {
  padding: 20px !important;
}
@include xs {
  .activities .intro-text {
    padding: 3% 2% !important;
  }
}
.activities h2 {
  font-weight: 400;
  line-height: 41.6px;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin-bottom: 20px;
  text-align: center !important;
}
.activities .seprator {
  align-self: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  margin-bottom: 30px;
  width: 100%;
  max-width: 206px;
  border-color: var(--main-color);
  border-top-width: 2px;
  border-top-style: solid;
}
.activities p {
  color: rgb(116, 116, 116);
  font-size: 15px;
  font-weight: 500;
  line-height: 34.05px;
  text-align: center !important;
}
.activities .flip-box {
  min-height: 325.617px;
  position: relative;
  margin-bottom: 15px;
  perspective: 1000px;
}
.activities .flip-box .flip-box-front {
  background-color: rgb(245, 245, 245);
  border-color: rgba(255, 255, 255, 0);
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
  color: rgb(116, 116, 116);
  transition-duration: 0.4s;
  position: absolute;
  transform: rotateY(0);
  transition: transform 0.4s cubic-bezier(0.2, 0.85, 0.4, 1.275);
  bottom: 0;
  z-index: 10;

  display: flex;
  align-items: center;
  top: 0;
  right: 0;
  left: 0;
  perspective: 1000px;
  padding: 27px 20px;
  text-align: center;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-clip: padding-box;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
}

.activities .flip-box .flip-box-circle {
  height: 64px;
  width: 64px;
  border: 1px solid var(--main-color);
  border-radius: 50%;
  background-clip: padding-box;
  padding: 18px;
  margin: 0 auto 10px;
}
.activities .flip-box .flip-box-circle i {
  font-size: 24px;
  color: var(--main-color);
}
.activities .flip-box h2 {
  color: rgb(51, 51, 51);
  font-size: 25px;
  line-height: 1.3;
  font-weight: 500;
}
.activities .flip-box-front-inner {
  color: rgb(116, 116, 116);
  font-size: 15px;
  font-weight: 600;
  line-height: 34.05px;
}
.activities .flip-box-back {
  background-color: var(--main-color);
  border-color: rgba(255, 255, 255, 0);
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
  color: rgb(51, 51, 51);
  transition-duration: 0.4s;
  bottom: 0px;
  transform: rotateY(-180deg);
  transition: transform 0.4s cubic-bezier(0.2, 0.85, 0.4, 1.275);
  position: absolute;
  z-index: -1;
  display: flex;
  align-items: center;
  top: 0;
  right: 0;
  left: 0;
  perspective: 1000px;
  padding: 27px 20px;
  text-align: center;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-clip: padding-box;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.activities .flip-box:hover .flip-box-front {
  transform: rotateY(180deg);
  z-index: -1;
}
.activities .flip-box:hover .flip-box-back {
  transform: rotateY(0);
  z-index: 1;
}
.activities .flip-box-back-inner {
  color: rgb(116, 116, 116);
  font-size: 15px;
  font-weight: 600;
  line-height: 34.05px;
  width: 100%;
}
.activities .flip-box-back-inner h3 {
  color: rgb(51, 51, 51);
  font-size: 18px;
  line-height: 1.52;
  margin-bottom: 9px;
  margin-top: 0;
  text-transform: uppercase;
}
.activities .flip-box-back-inner .btn {
  margin: 20px auto 0;
  background: #fff;
  color: rgb(51, 51, 51);
  border-radius: 0;
  padding: 13px 29px;
  border: none;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2px;
  line-height: 17px;
}
.activities .flip-box-back-inner .btn:hover {
  margin: 20px auto 0;
  color: #fff;
  background: rgb(51, 51, 51);
}
</style>
