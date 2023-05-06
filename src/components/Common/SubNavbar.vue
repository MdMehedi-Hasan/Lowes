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
              <div id="health" class="p-4 hover:border-l-4 hover:border-blue-500">
                <a for="">Health & beauty</a>
                <ul
                  id="health-menu"
                  class="bg-base-100 w-52 absolute z-50 hidden left-full top-0 border-l-2 min-h-336"
                >
                  <li>
                    <div id="skin-care" class="relative p-3 hover:border-l-4 hover:border-blue-500">
                      <a>Skin Care</a>
                      <ul
                        id="skin-care-menu"
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
                    <div id="Hair-care" class="p-3 hover:border-l-4 hover:border-blue-500">
                      <a>Hair care</a>
                      <ul
                        id="Hair-care-menu"
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
                    <div id="personal-care" class="p-3 hover:border-l-4 hover:border-blue-500">
                      <a>Personal care</a>
                      <ul
                        id="personal-care-menu"
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
                    <div id="makeup" class="p-3 hover:border-l-4 hover:border-blue-500">
                      <a>Makeup</a>
                      <ul
                        id="makeup-menu"
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
                    <div id="Fragrances" class="p-3 hover:border-l-4 hover:border-blue-500">
                      <a>Fragrances</a>
                      <ul
                        id="Fragrances-menu"
                        class="bg-base-100 w-52 absolute z-50 hidden left-full top-0 border-l-2 min-h-336">
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
            <li class="">
              <div id="watch" class="p-4 hover:border-l-4 hover:border-blue-500">
                <a for="">Watches & bags</a>
                <ul
                  id="watch-menu"
                  class="bg-base-100 w-52 absolute z-50 hidden left-full top-0 border-l-2 min-h-336"
                >
                  <li>
                    <div id="kids-bags" class="relative p-3 hover:border-l-4 hover:border-blue-500">
                      <a>Kids bags</a>
                      <ul
                        id="kids-bags-menu"
                        class="bg-base-100 w-52 absolute z-50 hidden left-full top-0 border-l-2 min-h-336"
                      >
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>School bags</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Casual bags</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div id="laptop-bags" class="p-3 hover:border-l-4 hover:border-blue-500">
                      <a>Laptop bags</a>
                      <ul
                        id="laptop-bags-menu"
                        class="bg-base-100 w-52 absolute z-50 hidden left-full top-0 border-l-2 min-h-336"
                      >
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Backpacks</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Briefcase</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Laptop case</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div id="men-bag" class="p-3 hover:border-l-4 hover:border-blue-500">
                      <a>Men's bags</a>
                      <ul
                        id="men-bag-menu"
                        class="bg-base-100 w-52 absolute z-50 hidden left-full top-0 border-l-2 min-h-336"
                      >
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Business bags</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Backpacks</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Wallets</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Travel bags</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div id="women-bag" class="p-3 hover:border-l-4 hover:border-blue-500">
                      <a>Woman's bags</a>
                      <ul
                        id="women-bag-menu"
                        class="bg-base-100 w-52 absolute z-50 hidden left-full top-0 border-l-2 min-h-336"
                      >
                      <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Backpacks</a></li>
                      <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Hand bags</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Travel bags</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Wallets</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Clutches</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div id="luggage" class="p-3 hover:border-l-4 hover:border-blue-500">
                      <a>Luggage</a>
                      <ul
                        id="luggage-menu"
                        class="bg-base-100 w-52 absolute z-50 hidden left-full top-0 border-l-2 min-h-336">
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Carry on</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Kid's luggage</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Suitcases</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div id="man-watch" class="p-3 hover:border-l-4 hover:border-blue-500">
                      <a>Man's watch</a>
                      <ul
                        id="man-watch-menu"
                        class="bg-base-100 w-52 absolute z-50 hidden left-full top-0 border-l-2 min-h-336">
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Business</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Casual</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Fashion</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Sports</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div id="woman-watch" class="p-3 hover:border-l-4 hover:border-blue-500">
                      <a>Woman's watch</a>
                      <ul
                        id="woman-watch-menu"
                        class="bg-base-100 w-52 absolute z-50 hidden left-full top-0 border-l-2 min-h-336">
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Business</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Casual</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Fashion</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Sports</a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              </li>
            <li>
              <div id="baby-toys" class="p-4 hover:border-l-4 hover:border-blue-500">
                <a for="">Baby & toys</a>
                <ul
                  id="baby-toys-menu"
                  class="bg-base-100 w-52 absolute z-50 hidden left-full top-0 border-l-2 min-h-336"
                >
                  <li>
                    <div id="baby-gifts" class="relative p-3 hover:border-l-4 hover:border-blue-500">
                      <a>Baby care & gifts</a>
                      <ul
                        id="baby-gifts-menu"
                        class="bg-base-100 w-52 absolute z-50 hidden left-full top-0 border-l-2 min-h-336"
                      >
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Nasal aspirators</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Safety straps</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Baby monitoring</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Albums & frames</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div id="kids-toys" class="p-3 hover:border-l-4 hover:border-blue-500">
                      <a>Kid's toys</a>
                      <ul
                        id="kids-toys-menu"
                        class="bg-base-100 w-52 absolute z-50 hidden left-full top-0 border-l-2 min-h-336"
                      >
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Electronic toys</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Puzzles</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Soft toys</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Dolls</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div id="feeding" class="p-3 hover:border-l-4 hover:border-blue-500">
                      <a>Feeding</a>
                      <ul
                        id="feeding-menu"
                        class="bg-base-100 w-52 absolute z-50 hidden left-full top-0 border-l-2 min-h-336"
                      >
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Bootle feeding</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Breast feeding</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Milk formula</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div id="diaper" class="p-3 hover:border-l-4 hover:border-blue-500">
                      <a>Diaper & potty</a>
                      <ul
                        id="diaper-menu"
                        class="bg-base-100 w-52 absolute z-50 hidden left-full top-0 border-l-2 min-h-336"
                      >
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Diapers</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Cloth diapers</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Diaper bags</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Potty chairs & seats</a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div id="electronic-device" class="p-4 hover:border-l-4 hover:border-blue-500">
                <a for="">Electronic devices</a>
                <ul
                  id="electronic-device-menu"
                  class="bg-base-100 w-52 absolute z-50 hidden left-full top-0 border-l-2 min-h-336"
                >
                  <li>
                    <div id="smartphone" class="relative p-3 hover:border-l-4 hover:border-blue-500">
                      <a>Smartphones</a>
                      <ul
                        id="smartphone-menu"
                        class="bg-base-100 w-52 absolute z-50 hidden left-full top-0 border-l-2 min-h-336"
                      >
                        <li class="p-2 cursor-pointer hover:underline hover:text-blue-500"><a>Apple</a></li>
                        <li class="p-2 cursor-pointer hover:underline hover:text-blue-500"><a>Samsung</a></li>
                        <li class="p-2 cursor-pointer hover:underline hover:text-blue-500"><a>Oneplus</a></li>
                        <li class="p-2 cursor-pointer hover:underline hover:text-blue-500"><a>Xiaomy</a></li>
                        <li class="p-2 cursor-pointer hover:underline hover:text-blue-500"><a>Realme</a></li>
                        <li class="p-2 cursor-pointer hover:underline hover:text-blue-500"><a>Vivo</a></li>
                        <li class="p-2 cursor-pointer hover:underline hover:text-blue-500"><a>Oppo</a></li>
                        <li class="p-2 cursor-pointer hover:underline hover:text-blue-500"><a>Others</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div id="featurephone" class="p-3 hover:border-l-4 hover:border-blue-500">
                      <a>Featured phones</a>
                      <ul
                        id="featurephone-menu"
                        class="bg-base-100 w-52 absolute z-50 hidden left-full top-0 border-l-2 min-h-336"
                      >
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Nokia</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Symphony</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Walton</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Okapia</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Agetel</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Tinmo</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div id="tablet" class="p-3 hover:border-l-4 hover:border-blue-500">
                      <a>Tablets</a>
                      <ul
                        id="tablet-menu"
                        class="bg-base-100 w-52 absolute z-50 hidden left-full top-0 border-l-2 min-h-336"
                      >
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Samsung</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Asus</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Apple</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Realme</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Others</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div id="camera" class="p-3 hover:border-l-4 hover:border-blue-500">
                      <a>Cameras</a>
                      <ul
                        id="camera-menu"
                        class="bg-base-100 w-52 absolute z-50 hidden left-full top-0 border-l-2 min-h-336"
                      >
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Sony</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Nikon</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Canon</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>GoPro</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Insta360</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Dash camera</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div id="laptop" class="p-3 hover:border-l-4 hover:border-blue-500">
                      <a>Laptops</a>
                      <ul
                        id="laptop-menu"
                        class="bg-base-100 w-52 absolute z-50 hidden left-full top-0 border-l-2 min-h-336">
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Apple</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>HP</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Asus</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Dell</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Lenovo</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Acer</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div id="desktop" class="p-3 hover:border-l-4 hover:border-blue-500">
                      <a>Desktops</a>
                      <ul
                        id="desktop-menu"
                        class="bg-base-100 w-52 absolute z-50 hidden left-full top-0 border-l-2 min-h-336">
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>All-in-one</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Customize PC</a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div id="e-accessories" class="p-4 hover:border-l-4 hover:border-blue-500">
                <a for="">Electronic accessories</a>
                <ul
                  id="e-accessories-menu"
                  class="bg-base-100 w-52 absolute z-50 hidden left-full top-0 border-l-2 min-h-336"
                >
                  <li>
                    <div id="computer-accessories" class="relative p-3 hover:border-l-4 hover:border-blue-500">
                      <a>Computer accessories</a>
                      <ul
                        id="computer-accessories-menu"
                        class="bg-base-100 w-52 absolute z-50 hidden left-full top-0 border-l-2 min-h-336"
                      >
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Monitors</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Keyboards</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Mouses</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>PC Audio</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Web cameras</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div id="phone-accessories" class="p-3 hover:border-l-4 hover:border-blue-500">
                      <a>Phone accessories</a>
                      <ul
                        id="phone-accessories-menu"
                        class="bg-base-100 w-52 absolute z-50 hidden left-full top-0 border-l-2 min-h-336"
                      >
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Headphones</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Protectors</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Backcovers</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Stickers</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Backpoly</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div id="gadget" class="p-3 hover:border-l-4 hover:border-blue-500">
                      <a>Gadgets</a>
                      <ul
                        id="gadget-menu"
                        class="bg-base-100 w-52 absolute z-50 hidden left-full top-0 border-l-2 min-h-336"
                      >
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Headsets</a></li>
                        <li class="p-3 cursor-pointer hover:underline hover:text-blue-500"><a>Bands</a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
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
#health:hover #health-menu{
  display: block;
  position: absolute;
}
#skin-care:hover #skin-care-menu{
  display: block;
  position: absolute;
}
#Hair-care:hover #Hair-care-menu{
  display: block;
  position: absolute;
}
#personal-care:hover #personal-care-menu{
  display: block;
  position: absolute;
}
#makeup:hover #makeup-menu{
  display: block;
  position: absolute;
}
#Fragrances:hover #Fragrances-menu{
  display: block;
  position: absolute;
}
#watch:hover #watch-menu{
  display: block;
  position: absolute;
}
#kids-bags:hover #kids-bags-menu{
  display: block;
  position: absolute;
}
#laptop-bags:hover #laptop-bags-menu{
  display: block;
  position: absolute;
}
#men-bag:hover #men-bag-menu{
  display: block;
  position: absolute;
}
#women-bag:hover #women-bag-menu{
  display: block;
  position: absolute;
}
#luggage:hover #luggage-menu{
  display: block;
  position: absolute;
}
#man-watch:hover #man-watch-menu{
  display: block;
  position: absolute;
}
#woman-watch:hover #woman-watch-menu{
  display: block;
  position: absolute;
}
#baby-toys:hover #baby-toys-menu{
  display: block;
  position: absolute;
}
#baby-gifts:hover #baby-gifts-menu{
  display: block;
  position: absolute;
}
#kids-toys:hover #kids-toys-menu{
  display: block;
  position: absolute;
}
#feeding:hover #feeding-menu{
  display: block;
  position: absolute;
}
#diaper:hover #diaper-menu{
  display: block;
  position: absolute;
}
#electronic-device:hover #electronic-device-menu{
  display: block;
  position: absolute;
}
#smartphone:hover #smartphone-menu{
  display: block;
  position: absolute;
}
#featurephone:hover #featurephone-menu{
  display: block;
  position: absolute;
}
#tablet:hover #tablet-menu{
  display: block;
  position: absolute;
}
#camera:hover #camera-menu{
  display: block;
  position: absolute;
}
#laptop:hover #laptop-menu{
  display: block;
  position: absolute;
}
#desktop:hover #desktop-menu{
  display: block;
  position: absolute;
}
#e-accessories:hover #e-accessories-menu{
  display: block;
  position: absolute;
}
#computer-accessories:hover #computer-accessories-menu{
  display: block;
  position: absolute;
}
#phone-accessories:hover #phone-accessories-menu{
  display: block;
  position: absolute;
}
#gadget:hover #gadget-menu{
  display: block;
  position: absolute;
}
</style>