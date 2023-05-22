<template>
  <div class="bg-gray-50">
    <div class="container mx-auto navbar px-0">
      <div class="flex-1 cursor-pointer">
        <a class="normal-case text-xl font-bold w-32"><img src="../../assets/logo.png" alt=""></a>
      </div>
      <div class="flex-none gap-2">
        <div class="form-control">
          <input
            type="text"
            placeholder="Search"
            class="input input-bordered"
          />
        </div>
        <i class="fa-solid fa-cart-shopping"></i>
        <i class="fa-regular fa-circle-user"></i>
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <!-- <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> -->
            </div>
          </label>
          <ul
            tabindex="0"
            class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a class="justify-between">
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>