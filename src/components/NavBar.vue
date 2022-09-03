<template>
  <section
    id="bottom-navigation"
    class="block fixed inset-x-0 bottom-0 z-10 bg-white shadow max-w-[450px] mx-auto"
  >
    <div id="tabs" class="flex justify-between">
      <router-link
        to="/"
        class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 42 42"
          class="inline-block mb-1"
        >
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <path
              d="M21.0847458,3.38674884 C17.8305085,7.08474576 17.8305085,10.7827427 21.0847458,14.4807396 C24.3389831,18.1787365 24.3389831,22.5701079 21.0847458,27.6548536 L21.0847458,42 L8.06779661,41.3066256 L6,38.5331279 L6,26.2681048 L6,17.2542373 L8.88135593,12.4006163 L21.0847458,2 L21.0847458,3.38674884 Z"
              fill="currentColor"
              fill-opacity="0.1"
            ></path>
            <path
              d="M11,8 L33,8 L11,8 Z M39,17 L39,36 C39,39.3137085 36.3137085,42 33,42 L11,42 C7.6862915,42 5,39.3137085 5,36 L5,17 L7,17 L7,36 C7,38.209139 8.790861,40 11,40 L33,40 C35.209139,40 37,38.209139 37,36 L37,17 L39,17 Z"
              fill="currentColor"
            ></path>
            <path
              d="M22,27 C25.3137085,27 28,29.6862915 28,33 L28,41 L16,41 L16,33 C16,29.6862915 18.6862915,27 22,27 Z"
              stroke="currentColor"
              stroke-width="2"
              fill="currentColor"
              fill-opacity="0.1"
            ></path>
            <rect
              fill="currentColor"
              transform="translate(32.000000, 11.313708) scale(-1, 1) rotate(-45.000000) translate(-32.000000, -11.313708) "
              x="17"
              y="10.3137085"
              width="30"
              height="2"
              rx="1"
            ></rect>
            <rect
              fill="currentColor"
              transform="translate(12.000000, 11.313708) rotate(-45.000000) translate(-12.000000, -11.313708) "
              x="-3"
              y="10.3137085"
              width="30"
              height="2"
              rx="1"
            ></rect>
          </g>
        </svg>
        <span class="tab tab-home block text-xs">Home</span>
      </router-link>
      <router-link
        to="/about"
        class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
      >
        <svg
          class="inline-block mb-1 w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
        <span class="tab tab-kategori block text-xs">About</span>
      </router-link>
      <router-link
        to="/gallery"
        class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="inline-block mb-1 w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>

        <span class="tab tab-explore block text-xs">Gallery</span>
      </router-link>
      <router-link
        to="/contact"
        class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="inline-block mb-1 w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>

        <span class="tab tab-whishlist block text-xs">Contact</span>
      </router-link>
      <a
        @click="toggleLang"
        href="#"
        class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="inline-block w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
          />
        </svg>

        <span class="tab tab-account block text-xs">{{
          $t("language change")
        }}</span>
      </a>
    </div>
  </section>
</template>
<script>
export default {
  name: "NavBar",
  data() {
    return {
      //
    };
  },
  methods: {
    //
  },
  computed: {
    textColour() {
      if (this.$route.path === "/" || this.$route.path === "/book") {
        return "text-white";
      }
      return "text-BaytDarkestGreen";
    },
  },
  methods: {
    toggleLang() {
      if (this.language === "en") {
        this.language = "ar";
      } else {
        this.language = "en";
      }
    },
  },
};
</script>
