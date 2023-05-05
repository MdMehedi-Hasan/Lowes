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
            <li>
              <div id="fashion-wear" class="p-4 hover:border-l-4 hover:border-blue-500">
                <a for="">Health & beauty</a>
                <ul
                  id="fashion-wear-menu"
                  class="bg-base-100 w-52 absolute z-50 hidden left-full top-0 border-l-2"
                >
                  <li>
                    <div id="men-wear" class="relative p-3 hover:border-l-4 hover:border-blue-500">
                      <a>Skin Care</a>
                      <ul
                        id="men-wear-menu"
                        class="bg-base-100 w-52 absolute z-50 hidden left-full top-0 border-l-2 min-h-336"
                      >
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Face wash</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Toner</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Cream</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Lip balm</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Night cream</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div id="women-wear" class="p-3 hover:border-l-4 hover:border-blue-500">
                      <a>Hair care</a>
                      <ul
                        id="women-wear-menu"
                        class="bg-base-100 w-52 absolute z-50 hidden left-full top-0 border-l-2 min-h-336"
                      >
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Hair oils</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Hair treatments</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Shampoo</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Conditioner</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Hair cream</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div id="women-wear" class="p-3 hover:border-l-4 hover:border-blue-500">
                      <a>Personal care</a>
                      <ul
                        id="women-wear-menu"
                        class="bg-base-100 w-52 absolute z-50 hidden left-full top-0 border-l-2 min-h-336"
                      >
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Toothpaste</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Toothbrush</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Dental floss</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Mouthwash</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Sanitary napkins</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div id="women-wear" class="p-3 hover:border-l-4 hover:border-blue-500">
                      <a>Makeup</a>
                      <ul
                        id="women-wear-menu"
                        class="bg-base-100 w-52 absolute z-50 hidden left-full top-0 border-l-2 min-h-336"
                      >
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Face</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Eyes</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Lips</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Nails</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Makup sets</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Makup remover</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div id="women-wear" class="p-3 hover:border-l-4 hover:border-blue-500">
                      <a>Fragrances</a>
                      <ul
                        id="women-wear-menu"
                        class="bg-base-100 w-52 absolute z-50 hidden left-full top-0 border-l-2 min-h-336"
                      >
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Men's perfume</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Men's body spray</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Women's perfume</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Women's body spray</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Attar</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Role on</a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
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
.min-h-336{
  min-height: 336px;
}
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