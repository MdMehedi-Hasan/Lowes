<template>
  <section class="bg-red-300">
    <ul class="container mx-auto flex gap-10 font-semibold">
      <li><a href="" class="py-3 inline-block">Home</a></li>
      <!-- <li id="category"><a href="">Category</a></li> -->
      <li>
        <div id="category" class="relative">
          <a class="py-3 inline-block">Category</a>
          <ul
            id="category-menu"
            class="bg-base-100 w-60 absolute z-50 hidden"
          >
            <li>
              <div id="fashion-wear" class="relative p-4 hover:border-l-4 hover:border-blue-500">
                <a for="">Fashion wear</a>
                <ul
                  id="fashion-wear-menu"
                  class="bg-base-100 w-52 absolute z-50 hidden left-full top-0 border-l-2"
                >
                  <li>
                    <div id="men-wear" class="relative p-3 hover:border-l-4 hover:border-blue-500">
                      <a>Men's wear</a>
                      <ul
                        id="men-wear-menu"
                        class="bg-base-100 w-52 absolute z-50 hidden left-full top-0 border-l-2"
                      >
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Shirt</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Pant</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>T-shirt</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Trouser</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Polo</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Shoes</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Sliders</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div id="women-wear" class="p-3 hover:border-l-4 hover:border-blue-500">
                      <a>Women's wear</a>
                      <ul
                        id="women-wear-menu"
                        class="bg-base-100 w-52 absolute z-50 hidden left-full top-0 border-l-2"
                      >
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Salwar kameez</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Saree</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Plazoo</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Scarf</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Hijab</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Shoes</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Flats</a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li class="p-4"><a>Health & beauty</a></li>
            <li class="p-4"><a>Watches & bags</a></li>
            <li class="p-4"><a>Baby & toys </a></li>
            <li class="p-4"><a>Electronic device</a></li>
            <li class="p-4"><a>Electronic accessories</a></li>
          </ul>
        </div>
      </li>
      <li><a href="" class="inline-block py-3">Blogs</a></li>
      <li><a href="" class="inline-block py-3">Customer Support</a></li>
    </ul>
  </section>
</template>
<style>
#category:hover #category-menu {
  display: block;
  position: absolute;
}
#fashion-wear:hover #fashion-wear-menu {
  display: block;
  position: absolute;
}
#fashion-wear-menu{
  min-height: 336px;
}
#men-wear:hover #men-wear-menu {
  display: block;
  position: absolute;
}
#women-wear:hover #women-wear-menu {
  display: block;
  position: absolute;
}
</style>