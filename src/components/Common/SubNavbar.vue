<template>
  <section class="bg-red-300 py-3">
    <ul class="container mx-auto flex gap-10 font-semibold">
      <li><a href="">Home</a></li>
      <!-- <li id="category"><a href="">Category</a></li> -->
      <li>
        <div id="category" class="relative">
          <label for="">Category</label>
          <ul
            id="category-menu"
            class="bg-base-100 w-52 p-2 absolute z-50 hidden"
          >
            <li>
              <div id="fashion-wear" class="relative">
                <label for="">Fashion wear</label>
                <ul
                  id="fashion-wear-menu"
                  class="bg-base-100 w-52 absolute z-50 hidden left-full top-0">
                  <li><a>Item 1</a></li>
                  <li><a>Item 2</a></li>
                  <li><a>Item 3</a></li>
                  <li><a>Item 4</a></li>
                  <li><a>Item 5</a></li>
                  <li><a>Item 6</a></li>
                </ul>
              </div>
            </li>
            <li><a>Health & beauty</a></li>
            <li><a>Watches & bags</a></li>
            <li><a>Baby & toys </a></li>
            <li><a>Electronic device</a></li>
            <li><a>Electronic accessories</a></li>
          </ul>
        </div>
      </li>
      <!-- <li>
        <div class="dropdown dropdown-hover">
          <label>Test</label>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-100 w-52 rounded"
          >
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
            <li><a>Item 3</a></li>
            <li><a>Item 4</a></li>
            <li><a>Item 5</a></li>
            <li><a>Item 6</a></li>
          </ul>
        </div>
      </li> -->
      <li><a href="">Blogs</a></li>
      <li><a href="">Customer Support</a></li>
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

</style>