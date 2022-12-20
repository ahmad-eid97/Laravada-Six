<template>
  <div class="events">
    <events-header />
    <div class="container">
      <events-list :eventsList="eventsList" />
    </div>
  </div>
</template>

<script>
import eventsHeader from "../../components/events/eventsHeader.vue";
import eventsList from "../../components/events/eventsList.vue";

export default {
  components: {
    eventsHeader,
    eventsList,
  },
  async asyncData({ $axios, app }) {
    const EVENTS_LIST = await $axios.get("/events", {
      headers: {
        "Accept-Language": app.i18n.locale,
      },
    });

    return {
      eventsList: EVENTS_LIST.data.data.events,
    };
  },
};
</script>
