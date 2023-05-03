<style>
img{
    max-width: 100%;
    height: auto;
    width: 100%;
    max-height: 400px;
}
</style>
<template>
  <div class="container mx-auto">
    <swiper
      :spaceBetween="30"
      :effect="'fade'"
      :navigation="false"
      :loop="true"
      :pagination="{
        clickable: true,
      }"
      :autoplay="{
      delay: 3500,
      disableOnInteraction: false,
    }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide><img class="object-cover" src="../../assets/banner.png" /></swiper-slide>
      <swiper-slide><img class="object-cover" src="../../assets/Network.png" /></swiper-slide>
      <swiper-slide><img class="object-cover" src="../../assets/fahim.png" /></swiper-slide>
      <swiper-slide><img class="object-cover" src="../../assets/1.png" /></swiper-slide>
      <swiper-slide><img class="object-cover" src="../../assets/2.png" /></swiper-slide>
      <swiper-slide><img class="object-cover" src="../../assets/3.png" /></swiper-slide>
      <!-- <swiper-slide><img src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide> -->
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay,EffectFade, Navigation, Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay,EffectFade, Navigation, Pagination],
    };
  },
};
</script>
