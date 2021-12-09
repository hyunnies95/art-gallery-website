<template>
  <router-view/>
  <Footer :class="{'footer--location' : $route.path == '/location' }" />
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Footer
  }
}
</script>