<script>
import axios from 'axios'

methods: {
    getProducts()
}
let products
let chiku = [1,2,3,4,5,6,7,8,9,10,11,12]
function getProducts (){
  fetch('http://localhost:3000/all-products')
  .then(response=>response.json())
  .then(data=>products=data)
  .then(()=>console.log(products))
}
</script>
<template>
  <h1 class="text-center font-bold text-2xl">Trending now</h1>
  <section class="container mx-auto grid grid-cols-6 gap-5">
    <div v-for="product in chiku" :key="product._id" class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  </section>
</template>