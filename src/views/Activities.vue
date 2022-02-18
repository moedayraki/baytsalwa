<template>
  <div class="bg-baytLightGreen absolute max-w-[450px]">
    <div class="relative slide mt-10">
      <div
        class="carousel-inner relative overflow-hidden w-full shadow-lg shadow-slate-700/60"
      >
        <div
          v-for="(img, i) in images"
          :id="`slide-${i}`"
          :key="i"
          :class="`${active === i ? 'active' : 'left-full'}`"
          class="carousel-item inset-0 relative w-full transform transition-all duration-500 ease-in-out"
        >
          <div class="flex items-center">
            <h2
              class="flex-auto text-baytDarkestGreen p-4 text-2xl font-sans first-letter:text-4xl"
            >
              Zawtar
            </h2>
            <h2
              v-show="happy"
              @click="happy = !happy"
              class="flex-auto text-4xl text-baytDarkestGreen text-right p-4"
            >
              &#128513;
            </h2>
            <h2
              v-show="!happy"
              @click="happy = !happy"
              class="flex-auto text-4xl text-baytDarkestGreen text-right p-4"
            >
              ☹
            </h2>
          </div>
          <img class="block w-full" :src="img" alt="First slide" />
          <p class="my-4 px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
    <div
      class="fixed flex items-stretch bottom-0 w-full justify-between max-w-[450px]"
    >
      <div
        class="text-4xl bg-baytDarkestGreen text-left py-2 px-6 m-4 rounded-md shadow-lg shadow-black border border-black text-baytLightGreen"
        @click="swipeRight"
      >
        &#171;
      </div>
      <div
        class="text-4xl bg-baytDarkestGreen text-right py-2 px-6 m-4 rounded-md shadow-lg shadow-black border border-black text-baytLightGreen"
        @click="swipeLeft"
      >
        &#187;
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Activities",
  data: () => ({
    images: [
      "https://picsum.photos/id/237/1024/800",
      "https://picsum.photos/id/238/1024/800",
      "https://picsum.photos/id/239/1024/800",
    ],
    active: 0,
    happy: false,
  }),
  mounted() {
    // let i = 0;
    // setInterval(() => {
    //   if (i > this.images.length - 1) {
    //     i = 0;
    //   }
    //   this.active = i;
    //   i++;
    // }, 10000);
  },
  methods: {
    swipeLeft() {
      this.active++;
      if (this.active > this.images.length - 1) {
        this.active = 0;
      }
    },
    swipeRight() {
      this.active--;
      if (this.active < 0) {
        this.active = this.images.length - 1;
      }
    },
  },
};
</script>

<style>
.left-full {
  left: -100%;
}

.carousel-item {
  float: left;
  position: relative;
  display: block;
  width: 100%;
  margin-right: -100%;
  backface-visibility: hidden;
}

.carousel-item.active {
  left: 0;
}
</style>
