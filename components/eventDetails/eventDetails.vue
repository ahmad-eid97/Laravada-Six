<template>
  <div class="eventDetails">
    <h1>{{ eventDetails.title }}</h1>
    <p class="date">
      <i class="fa-light fa-calendar-days"></i> {{ eventDetails.date }}
    </p>
    <p class="cost">${{ eventDetails.ticket_cost }} / per ticket</p>
    <p class="content">Organizer: {{ eventDetails.organizer }}</p>
    <p class="content">venue: {{ eventDetails.venue }}</p>
    <p class="content">{{ eventDetails.content }}</p>
    <button>BUY TICKET</button>
  </div>
</template>

<script>
export default {
  props: ["eventDetails"],
};
</script>

<style scoped lang="scss">
.eventDetails {
  h1 {
    font-size: 3rem;
  }
  .date {
    opacity: 0.8;
    font-size: 1.3rem;
  }
  .cost,
  .content {
    font-size: 1.3rem;
  }
  .cost {
    color: var(--main-color);
  }
  button {
    padding: 10px 40px;
    background-color: var(--main-color);
    color: #fff;
    font-size: 1.2rem;
    border: 1px solid var(--main-color);
    &:hover {
      color: var(--main-color);
      border-color: var(--main-color);
      background-color: transparent;
    }
  }
}
</style>
