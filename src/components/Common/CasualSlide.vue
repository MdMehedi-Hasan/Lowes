<template>
  <swiper
    :slidesPerView="5"
    :spaceBetween="30"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide
      ><img src="https://i.ibb.co/5GB77Cd/Hot.png" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img src="https://i.ibb.co/5GB77Cd/Hot.png" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img src="https://i.ibb.co/5GB77Cd/Hot.png" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img src="https://i.ibb.co/5GB77Cd/Hot.png" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img src="https://i.ibb.co/5GB77Cd/Hot.png" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img src="https://i.ibb.co/5GB77Cd/Hot.png" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img src="https://i.ibb.co/5GB77Cd/Hot.png" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img src="https://i.ibb.co/5GB77Cd/Hot.png" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img src="https://i.ibb.co/5GB77Cd/Hot.png" alt=""
    /></swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation,Autoplay],
    };
  },
};
</script>
