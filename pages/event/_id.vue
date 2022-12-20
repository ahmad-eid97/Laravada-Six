<template>
  <div class="events">
    <event-header />
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <event-gallery :eventDetails="eventDetails" />
        </div>
        <div class="col-lg-6">
          <event-details :eventDetails="eventDetails" />
        </div>
      </div>
      <related-events :eventsList="eventsList" />
    </div>
  </div>
</template>

<script>
import eventHeader from "../../components/eventDetails/eventHeader.vue";
import eventGallery from "../../components/eventDetails/eventGallery.vue";
import eventDetails from "../../components/eventDetails/eventDetails.vue";
import relatedEvents from "../../components/eventDetails/relatedEvents.vue";

export default {
  components: {
    eventHeader,
    eventGallery,
    eventDetails,
    relatedEvents,
  },
  async asyncData({ $axios, app, params }) {
    const EVENT_DETAILS = await $axios.get(`/events/${params.id}`, {
      headers: {
        "Accept-Language": app.i18n.locale,
      },
    });

    const EVENTS_LIST = await $axios.get("/events", {
      headers: {
        "Accept-Language": app.i18n.locale,
      },
    });

    return {
      eventDetails: EVENT_DETAILS.data.data,
      eventsList: EVENTS_LIST.data.data.events,
    };
  },
};
</script>

<style scoped lang="scss">
.events {
  .container {
    margin-top: 100px;
  }
}
</style>
