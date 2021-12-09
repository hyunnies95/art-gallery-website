<template>
  <section class="map">
    <div class="container">
      <router-link to="/" class="btn btn--back">Back To Home</router-link>
    </div>
    <picture>
      <img class="map__img" src="@/assets/images/desktop/image-map@2x.png" alt="map">
    </picture>
  </section>
</template>

<style lang="sass" scoped>
.map
  height: 66.5rem
  &__img
    object-fit: cover
    height: 100%
    width: 100%
  
.container
  position: absolute
  left: 50%
  transform: translateX(-50%)
  width: 100%
</style>