<template>
  <div class="reviews">
    <div class="reviewsList" v-if="allReviews.length">
      <div class="review" v-for="review in allReviews" :key="review.id">
        <img src="/assets/images/default.jpg" alt="userImage" />
        <div class="details">
          <b-form-rating
            color="#f39c12"
            :inline="true"
            :no-border="true"
            :value="review.rating"
            readonly
          ></b-form-rating>
          <h4>{{ review.author.name }}</h4>
          <p>
            {{ review.review }}
          </p>
        </div>
      </div>

      <div class="col-lg-12 col-md-12 text-center">
        <div class="pagination-area">
          <a href="#" class="page-numbers">
            <i class="fa-solid fa-arrow-left"></i>
          </a>
          <span class="page-numbers current" aria-current="page">1</span>
          <a href="#" class="page-numbers">2</a>
          <a href="#" class="page-numbers">3</a>
          <a href="#" class="page-numbers">
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="empty" v-if="!allReviews.length">
      <h2>This Course Has No Reviews Yet!</h2>
    </div>

    <div class="add_review">
      <div class="rate">
        <label>Add Rate:</label>
        <b-form-rating
          color="#f39c12"
          :inline="true"
          :no-border="true"
          v-model="rate"
        ></b-form-rating>
      </div>
      <div class="field">
        <label for="name">Review</label>
        <textarea
          type="text"
          id="name"
          placeholder="Review"
          v-model="review"
        ></textarea>
      </div>
      <button @click="addReview">Add Review</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["reviews"],
  data() {
    return {
      allReviews: this.reviews,
      rate: 0,
      review: "",
    };
  },
  methods: {
    async addReview() {
      if (!this.$cookies.get("cms-auth"))
        return this.$toast.error("Login or register to add reviews!");

      if (!this.review) {
        return this.$toast.error("Please type your review first!");
      }

      const data = {
        rate: this.rate,
        review: this.review,
      };
      const response = await this.$axios.post(
        `/courses/review/${this.$route.params.id}`,
        data,
        {
          headers: {
            AUTHORIZATION: `Bearer ${this.$cookies.get("cms-auth")}`,
          },
        }
      );

      if (response.data.success)
        this.$toast.success("Review added successfully");

      this.rate = 0;
      this.review = "";

      this.allReviews = response.data.data.reviews;
    },
  },
};
</script>

<style scoped lang="scss">
.reviews {
  .reviewsList {
    .review {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 30px;
      padding-bottom: 20px;
      border-bottom: 1px solid rgb(226, 226, 226);
      &:last-of-type {
        border: none;
      }
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
      }
      .details {
        output {
          padding: 0;
          transform: scale(0.8);
          margin: 0 -15px;
        }
        h4 {
          margin: 0;
          font-size: 1.2rem;
        }
        p {
          margin: 0;
        }
      }
      @include xs {
        align-items: flex-start;
      }
    }
  }
  .empty {
    padding: 30px;
    h2 {
      text-align: center;
      opacity: 0.8;
    }
  }
  .add_review {
    .rate {
      margin-bottom: 20px;
      label {
        font-size: 1.3rem;
      }
    }
    .field {
      display: flex;
      flex-direction: column;
      max-width: 800px;
      margin-bottom: 10px;
      label {
        font-size: 1.3rem;
      }
      input,
      textarea {
        padding: 8px 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 1.2rem;
        resize: none;
        outline: none;
      }
      textarea {
        height: 200px;
      }
    }
    button {
      background-color: var(--main-color);
      color: #fff;
      padding: 10px 40px;
      border: 1px solid var(--main-color);
      font-size: 1.2rem;
      &:hover {
        background-color: transparent;
        color: var(--main-color);
      }
    }
  }
}
</style>
