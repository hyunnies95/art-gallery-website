<template>
  <main class="home">
    <Hero />
    <About />
  </main>
</template>

<script>
import Hero from '@/components/home/Hero.vue'
import About from '@/components/home/About.vue'

export default {
  components: {
    Hero,
    About
  }
}
</script>