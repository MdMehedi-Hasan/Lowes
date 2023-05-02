<template>
  <swiper
    :spaceBetween="30"
    :effect="'fade'"
    :navigation="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper">
    <swiper-slide><img src="../../assets/banner.png" /></swiper-slide>
    <swiper-slide><img src="../../assets/Network.png" /></swiper-slide>
    <swiper-slide><img src="../../assets/fahim.png" /></swiper-slide>
    <swiper-slide><img src="../../assets/1.png" /></swiper-slide>
    <swiper-slide><img src="../../assets/2.png" /></swiper-slide>
    <swiper-slide><img src="../../assets/3.png" /></swiper-slide>
    <!-- <swiper-slide><img src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide> -->
  </swiper>
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
import { EffectFade, Navigation, Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectFade, Navigation, Pagination],
    };
  },
};
</script>
