<template>
  <section class="hero">
    <picture>
      <source srcset="@/assets/images/desktop/image-hero@2x.jpg" media="(min-width: 1024px)">
      <source srcset="@/assets/images/tablet/image-hero@2x.jpg" media="(min-width: 670px)">
      <img class="hero__img" src="@/assets/images/mobile/image-hero@2x.jpg" alt="">
    </picture>
    <div class="container">
      <h1 data-aos="fade-down" data-aos-duration="1500">MODERN <br> ART GALLERY</h1>
      <div class="hero__content">
        <p data-aos="fade-left" data-aos-duration="1500">The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these pieces inspire you? Visit us and find out.</p>
        <div data-aos="fade-left" data-aos-delay="300" data-aos-duration="1500">
          <router-link to="location" class="btn btn--cta">Our Location</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.hero
  background-repeat: no-repeat
  background-position-x: center
  background-size: 50%
  @include media('medium')
    position: relative
  @include media('large')
    background: linear-gradient(90deg, $col-darkest-gray 50%, rgba(255,255,255,1) 50%)
    height: 80rem
  &__img
    object-fit: cover
    height: 23rem
    width: 100%
    @include media('medium')
      height: 69rem
      width: calc(100vw - 34rem)
    @include media('large')
      display: block
      margin: 0 auto
      height: 100%
      width: 54rem

h1
  color: $col-darkest-gray
  font-size: 6rem
  line-height: 5.5rem
  margin: 3.3rem 0 2.8rem
  @include media('medium')
    font-size: 7rem
    line-height: 6.5rem
    margin: 3.2rem 0 4.6rem 0
  @include media('large')
    color: $col-white
    font-size: 9.6rem
    line-height: 8.8rem
    margin: 0
    mix-blend-mode: difference

p
  max-width: 55rem
  @include media('medium')
    max-width: 35rem

.container
  margin: 0 auto
  max-width: $space-max-width
  @include media('medium')
    position: absolute
    top: 11rem
    right: 0.2rem
  @include media('large')
    display: flex
    justify-content: space-between
    position: absolute
    top: 19rem
    left: 0

  
</style>