<template>
  <div class="relatedEvents">
    <h1>Related Events</h1>
    <div class="row">
      <div
        class="col-lg-6"
        v-for="event in eventsList.slice(0, 4)"
        :key="event"
      >
        <div class="event">
          <div class="buy" :style="{ backgroundImage: `url(${event.image})` }">
            <button>BUY TICKET</button>
          </div>
          <div class="details">
            <div class="tags">
              <span>{{ event.category.name }}</span>
              <span>{{ event.ticket_cost }}$</span>
            </div>
            <div class="inside">
              <h1 @click="$router.push(localePath(`/event/${event.id}`))">
                {{ event.title }}
              </h1>
              <p>{{ event.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["eventsList"],
};
</script>

<style scoped lang="scss">
.relatedEvents {
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
    grid-template-columns: repeat(12, 1fr);
    gap: 10px;
    background: var(--main-color);
    margin-bottom: 20px;
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
      background-repeat: no-repeat;
      background-size: cover;
      @include xs {
        height: 200px;
      }
      button {
        background: var(--main-color);
        border: 1px solid var(--main-color);
        outline: none;
        padding: 10px 30px;
        color: #fff;
        font-size: 1.2rem;
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
          padding: 1px 20px;
          border-radius: 20px;
          &:last-of-type {
            background: #11a8fd;
          }
        }
      }
      h1 {
        text-align: unset;
        margin: unset;
        cursor: pointer;
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
