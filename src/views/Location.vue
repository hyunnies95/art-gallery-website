<template>
  <main class="location">
    <Map />
    <Location />
  </main>
</template>

<script>
import Map from '@/components/location/Map.vue'
import Location from '@/components/location/Location.vue'

export default {
  components: {
    Map,
    Location
  }
}
</script>