<template>
    <div class="map-area">
        <div class="container-fluid m-0 p-0">
            <iframe :src="`https://maps.google.com/maps?q='+${$store.state.websiteSettings.find(one => one.key === 'latitude').plain_value}+','+${$store.state.websiteSettings.find(one => one.key === 'longitude').plain_value}+'&hl=es&z=14&amp;output=embed`"></iframe>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.map-area iframe {
  display: block;
  width: 100%;
  height: 400px;
}
</style>