<script setup>
import Navbar from '../components/Common/Navbar.vue';
import SubNavbar from '../components/Common/SubNavbar.vue'
import Slider from '../components/HomeComp/Slider.vue'
import Header from "../components/HomeComp/Header.vue";
import DailyDeals from "../components/HomeComp/DailyDeals.vue";
import Categories from "../components/HomeComp/Categories.vue";
import Trending from "../components/HomeComp/Trending.vue";
import Popular from "../components/HomeComp/Popular.vue";
import Products from "../components/HomeComp/Products.vue";
import Footer from "../components/Common/Footer.vue";
</script>
<template>
  <Navbar />
  <SubNavbar/>
  <Slider/>
  <!-- <Header /> -->
  <DailyDeals />
  <Categories />
  <Trending />
  <Popular />
  <Products />
  <Footer />
</template>