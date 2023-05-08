<script>
// import axios from 'axios'

export default {
  data() {
    return {
      // products: []
    };
  },
  mounted() {
    getProducts();
  },
};
async function getProducts() {
  /* fetch('http://localhost:3000/all-products')
  .then(response=>response.json())
  .then(data=>this.products = data) */
  // .then(()=>console.log(products))
}
</script>
<template>
  <h1 class="text-center font-bold text-2xl">Trending now</h1>
  <section class="container mx-auto grid grid-cols-6 gap-5">
    <div class="card bg-base-100 shadow-xl">
      <!-- v-for="product in products" :key="product._id" -->
      <div class="card-body">
        <h2 class="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  </section>
</template>