<template>
  <div class="eventsList">
    <h5>Events</h5>
    <h1>Our Upcoming Events</h1>
    <div class="row">
      <div class="col-lg-6 mb-4" v-for="event in allEvents.events" :key="event">
        <div class="event">
          <div class="buy">
            <img :src="event.image" alt="eventImage" />
            <button>BUY TICKET</button>
          </div>
          <div class="details">
            <div class="tags">
              <span>{{ event.category.name }}</span>
              <span>{{ event.ticket_cost }}$</span>
            </div>
            <div class="inside">
              <h2 @click="$router.push(localePath(`/event/${event.id}`))">
                {{ event.title }}
              </h2>
              <p>{{ event.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-12 col-md-12 text-center">
      <div class="pagination-area">
        <b-pagination
          v-model="allEvents.meta.current_page"
          :total-rows="allEvents.meta.total"
          :per-page="allEvents.meta.per_page"
          aria-controls="my-table"
          @change="changePage"
        ></b-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["eventsList"],
  data() {
    return {
      allEvents: this.eventsList,
    };
  },
  methods: {
    async changePage(pageNum) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      const response = await this.$axios.get(`/events?page=${pageNum}`);
      this.allEvents = response.data.data;
    },
  },
};
</script>

<style scoped lang="scss">
.eventsList {
  margin-top: 100px;
  h5,
  h1 {
    text-align: center;
  }
  h1 {
    margin-bottom: 50px;
  }
  .event {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(12, 1fr);
    gap: 10px;
    background: var(--main-color);
    margin-bottom: 20px;
    height: 100%;
    .buy,
    .details {
      grid-column: span 6;
      @include xs {
        grid-column: span 12;
      }
    }
    .buy {
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
      background-position: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
      @include xs {
        height: 200px;
      }
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(0.5);
        z-index: 1;
      }
      button {
        background: var(--main-color);
        border: 1px solid var(--main-color);
        outline: none;
        padding: 10px 30px;
        color: #fff;
        font-size: 1.2rem;
        position: relative;
        z-index: 2;
        &:hover {
          background-color: transparent;
          border: 1px solid #ccc;
        }
      }
    }
    .details {
      color: #fff;
      padding: 40px 20px;
      .tags {
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        gap: 10px;
        span {
          background: #ff5e14;
          padding: 1px 15px;
          border-radius: 20px;
          margin-bottom: 5px;
          text-align: center;
          &:last-of-type {
            background: #11a8fd;
          }
        }
      }
      h2 {
        text-align: unset;
        margin: unset;
        cursor: pointer;
        margin-bottom: 10px;
      }
      p {
        margin: 0;
      }
    }
  }
  .pagination-area {
    margin-top: 100px;
  }
}
</style>
