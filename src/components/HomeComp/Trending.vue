<script>
// import axios from 'axios'

export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      await fetch("http://localhost:3000/all-products")
        .then((response) => response.json())
        .then((data) => (this.products = data));
    },
  },
};
</script>
<template>
  <h1 class="text-center font-bold text-2xl">Trending now</h1>
  <section class="container mx-auto grid grid-cols-6 gap-5">
    <div v-for="product in products" :key="product._id" class="card card-compact bg-base-100 border rounded-md">
      <figure>
        <img :src="product?.picture" alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{product?.name}}</h2>
        <p>{{ product?.description }}</p>
      </div>
    </div>
  </section>
</template>