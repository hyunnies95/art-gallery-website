<template>
  <section class="about container">
    <picture class="about__img">
      <img src="@/assets/images/desktop/image-grid-1@2x.jpg" data-aos="fade-left" data-aos-duration="1300" alt="">
    </picture>
    <div class="about__content about__content--white" data-aos="fade-down" data-aos-duration="1300">
      <h2>YOUR DAY <br> AT THE GALLERY</h2>
      <p>Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process.</p>
    </div>
    <picture class="about__img" data-aos="fade-up">
      <img src="@/assets/images/desktop/image-grid-2@2x.jpg" data-aos="fade-left" data-aos-duration="1300" alt="">
    </picture>
    <picture class="about__img">
      <img src="@/assets/images/desktop/image-grid-3@2x.jpg" data-aos="fade-up" data-aos-duration="1300" alt="">
    </picture>
    <div class="about__content about__content--black" data-aos="fade-left" data-aos-duration="1300">
      <h2>COME & BE INSPIRED</h2>
      <p>We’re excited to welcome you to our gallery and see how our collections influence you.</p>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.about
  display: flex
  flex-direction: column
  gap: 1.6rem
  margin: 12rem auto
  @include media('medium')
    display: grid
    gap: 1rem
    grid-template-columns: 1fr 10.5rem 1fr
    grid-template-rows: 39.4rem 30.8rem 39.1rem
    margin: 11.2rem auto 11.8rem
  @include media('large')
    grid-gap: 3rem
    grid-template-columns: 1fr 15.9rem 1fr
    grid-template-rows: 40rem 31.3rem 37.7rem
    margin: 18rem auto
  &__content
    & br
      @include media('medium')
        display: none
    &--white
      grid-column: 1 / 2
      grid-row: 1 / 2
      padding: 2.2rem 0 2rem
      @include media('medium')
        padding-top: 3.5rem
        & h2
          max-width: 20rem
        & p
          max-width: 22rem
      @include media('large')
        padding-top: 6rem
        max-width: 35rem
        & h2
          max-width: none
        & p
          max-width: none
    &--black
      background-color: $col-darkest-gray
      grid-column: 3 / 4
      padding: 4.8rem 2rem 4.7rem 2.4rem
      @include media('medium')
        padding: 8.4rem 3rem 3rem
      @include media('large')
        padding: 6.5rem 4rem 6.5rem 5rem
      & *
        color: $col-white
  &__img
    & img
      object-fit: cover
      height: 100%
      width: 100%
    &:nth-of-type(1)
      grid-column: 2 / 4
      height: 30.4rem
      @include media('medium')
        height: 100%
    &:nth-of-type(2)
      grid-column: 1 / 3
      grid-row: 2 / 4
      height: 45.6rem
      @include media('medium')
        height: 100%
    &:nth-of-type(3)
      grid-column: 3 / 4
      grid-row: 2 / 3
      height: 19rem
      @include media('medium')
        height: 100%
</style>