<template>
  <div
    class="background h-screen pt-10 absolute overflow-y-scroll overflow-x-hidden w-full max-w-[450px]"
  >
    <div class="logo-bg w-screen max-w-[450px] relative">
      <img
        src="../images/logo.jpeg"
        class="relative py-10 w-1/3 left-1/3 top-1/4 logo-shadow"
      />
    </div>
    <img
      src="../images/plant1.png"
      class="absolute w-screen h-full opacity-10 -scale-y-100"
    />
    <h2
      class="font-brush text-baytDarkestGreen opacity-70 tracking-wider text-2xl px-2 mt-4"
    >
      <a href="#the-name" class="bg-baytBeige px-2 rounded-md claymorph-btn"
        >❁ The Name</a
      >
    </h2>
    <h2
      class="font-brush text-baytDarkestGreen opacity-70 tracking-wider text-2xl pt-1 px-2 mt-4"
    >
      <a href="#the-built" class="bg-baytBeige px-2 rounded-md claymorph-btn"
        >❃ How Was it Built?</a
      >
    </h2>
    <h2
      class="font-brush text-baytDarkestGreen opacity-70 tracking-wider text-2xl relative pt-1 px-2 mt-4"
    >
      <a
        href="#the-activities"
        class="bg-baytBeige px-2 rounded-md claymorph-btn"
        >❊ Activities, Hikes, & Adventures</a
      >
    </h2>
    <h2
      class="font-brush text-baytDarkestGreen opacity-70 tracking-wider text-2xl relative pt-1 px-2 mt-4"
    >
      <a href="#the-things" class="bg-baytBeige px-2 rounded-md claymorph-btn"
        >ꕤ Things We Have In-House</a
      >
    </h2>
    <h2
      class="font-brush text-baytDarkestGreen opacity-70 tracking-wider text-2xl relative pt-1 px-2 mt-4"
    >
      <a href="#the-visit" class="bg-baytBeige px-2 rounded-md claymorph-btn"
        >✤ Plant Your Visit</a
      >
    </h2>
    <div class="bg-baytDarkestGreen pt-6 mt-4 logo-shadow">
      <h2
        id="the-name"
        class="scroll-mt-10 font-brush text-baytBeige tracking-wider text-4xl w-screen relative"
      >
        ꧂ The Name
      </h2>
      <p class="p-2 text-baytBeige font-bradhitc">
        lirum epicus lorem ipsum dolor sit amet, consectetur adipiscing elit.
        lirum epicus lorem ipsum dolor sit amet, consectetur adipiscing elit.
        lirum epicus lorem ipsum dolor sit amet, consectetur adipiscing elit.
        lirum epicus lorem ipsum dolor sit amet, consectetur adipiscing elit.
        lirum epicus lorem ipsum dolor sit amet, consectetur adipiscing elit.
        lirum epicus lorem ipsum dolor sit amet, consectetur adipiscing elit.
        lirum epicus lorem ipsum dolor sit amet, consectetur adipiscing elit.
        lirum epicus lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
    <div class="bg-baytBeige pt-6 mt-20 logo-shadow">
      <img
        src="../images/plant1.png"
        class="absolute w-screen h-full opacity-10 -scale-x-100"
      />
      <h2
        id="the-built"
        class="scroll-mt-10 font-brush text-baytDarkestGreen tracking-wider text-right text-4xl w-screen relative"
      >
        How Was it Built? ꧁
      </h2>
      <p class="p-2 text-baytDarkestGreen font-bradhitc">
        lirum epicus lorem ipsum dolor sit amet, consectetur adipiscing elit.
        lirum epicus lorem ipsum dolor sit amet, consectetur adipiscing elit.
        lirum epicus lorem ipsum dolor sit amet, consectetur adipiscing elit.
        lirum epicus lorem ipsum dolor sit amet, consectetur adipiscing elit.
        lirum epicus lorem ipsum dolor sit amet, consectetur adipiscing elit.
        lirum epicus lorem ipsum dolor sit amet, consectetur adipiscing elit.
        lirum epicus lorem ipsum dolor sit amet, consectetur adipiscing elit.
        lirum epicus lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <button
        id="the-activities"
        class="ml-10 scroll-mt-10 bg-baytDarkestGreen text-baytBeige tracking-wider relative p-4 my-10 rounded-md claymorph-btn-1"
        @click="$router.push('/activities')"
      >
        ACTIVITES, HIKES & ADVENTRUES
      </button>
    </div>
    <div class="my-5">
      <img
        src="../images/about-2.jpg"
        class="w-1/2 relative left-1/4 logo-shadow"
      />
    </div>
    <div class="bg-baytBeige relative logo-shadow">
      <img
        src="../images/plant1.png"
        class="absolute w-screen h-full opacity-10 -scale-y-100"
      />
      <h2
        id="the-things"
        class="scroll-mt-10 pt-6 font-brush text-baytDarkestGreen tracking-wider pr-4 text-4xl w-screen relative"
      >
        ꧂ Things We Have
      </h2>
      <ul class="p-2 text-baytDarkestGreen font-bradhitc">
        <li class="pb-2">⁍ lirum epicus lorem ipsum dolor sit amet.</li>
        <li class="pb-2">⁍ lirum epicus lorem ipsum dolor sit amet.</li>
        <li class="pb-2">⁍ lirum epicus lorem ipsum dolor sit amet.</li>
        <li class="pb-2">⁍ lirum epicus lorem ipsum dolor sit amet.</li>
        <li class="pb-2">⁍ lirum epicus lorem ipsum dolor sit amet.</li>
        <li class="pb-2">⁍ lirum epicus lorem ipsum dolor sit amet.</li>
      </ul>
      <button
        id="the-visit"
        class="rounded-md scroll-mt-10 w-1/2 left-1/4 bg-baytLightGreen text-baytDarkestGreen tracking-wider relative p-4 mt-10 mb-40 claymorph-btn-2"
        @click="$router.push('/visit')"
      >
        PLAN YOUR VISIT
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.background {
  background: url("./../images/about.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  scroll-behavior: smooth;
}
.logo-bg {
  background: url("./../images/logo-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
}

.claymorph-btn {
  box-shadow: 10px 10px 15px -3px #464545, inset 5px 4px 5px 0 #ffffff,
    inset -5px -4px 5px 0 #b8b5b5;
}

.claymorph-btn-1 {
  box-shadow: 10px 10px 15px -3px #464545, inset 5px 4px 5px 0 #c2d5d3,
    inset -5px -4px 5px 0 #35403f;
}

.claymorph-btn-2 {
  box-shadow: 10px 10px 15px -3px #464545, inset 5px 4px 5px 0 #f6fff5,
    inset -5px -4px 5px 0 #8d938c;
}

.logo-shadow {
  filter: drop-shadow(0 10px 4px #464545b4);
}
</style>
