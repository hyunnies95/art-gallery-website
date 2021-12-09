<template>
  <section class="location">
    <div class="container" data-aos="fade-up" data-aos-duration="1000">
      <h1>OUR <br> LOCATION</h1>
      <div class="location__info">
        <h2>99 KING STREET</h2>
        <ul class="location__address">
          <li>Newport</li>
          <li>RI 02840</li>
          <li>United States of America</li>
        </ul>
        <p>Our newly opened gallery is located near the Edward King House on 99 King Street, the Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm.</p>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.location
  background-color: $col-darkest-gray
  padding: 4.8rem 0
  @include media('large')
    padding: 10.4rem 0 12.9rem 0
  & h1
    color: $col-white
    font-size: 5.5rem
    line-height: 5rem
    margin-bottom: 4rem
    @include media('large')
      font-size: 7rem
      line-height: 7rem
      margin: 0
    & br
      display: none
      @include media('large')
        display: block
  & h2
    color: $col-gold
    font-size: 3.2rem
    line-height: 3.2rem
    @include media('large')
      font-size: 3.6rem
      line-height: 3.6rem
  & p, li
    color: $col-white
  &__info
    max-width: 54rem
  &__address
    margin: 0 0 3.1rem 0
      
.container
  @include media('large')
    display: flex
    justify-content: space-between
</style>