<template>
  <div class="background h-screen pt-10 absolute overflow-y-scroll w-screen">
    <div class="logo-bg w-screen relative">
      <img
        src="../images/logo.jpeg"
        class="relative py-10 w-1/3 left-1/3 top-1/4"
      />
    </div>
    <img
      src="../images/plant1.png"
      class="absolute w-screen h-full opacity-30 -scale-y-100"
    />
    <h2
      class="font-brush text-baytDarkestGreen opacity-70 tracking-wider text-2xl bg-baytBeige w-1/2 relative pt-1 px-2 mt-2"
    >
      <a href="#the-name">❁ The Name</a>
    </h2>
    <h2
      class="font-brush text-baytDarkestGreen opacity-70 tracking-wider text-2xl bg-baytBeige w-2/3 relative pt-1 px-2 mt-2"
    >
      <a href="#the-built">❃ How Was it Built?</a>
    </h2>
    <h2
      class="font-brush text-baytDarkestGreen opacity-70 tracking-wider text-2xl bg-baytBeige w-screen relative pt-1 px-2 mt-2"
    >
      <a href="#the-activities">❊ Activities, Hikes, & Adventures</a>
    </h2>
    <h2
      class="font-brush text-baytDarkestGreen opacity-70 tracking-wider text-2xl bg-baytBeige w-screen relative pt-1 px-2 mt-2"
    >
      <a href="#the-things">ꕤ Things We Have In-House</a>
    </h2>
    <h2
      class="font-brush text-baytDarkestGreen opacity-70 tracking-wider text-2xl bg-baytBeige w-2/3 relative pt-1 px-2 mt-2"
    >
      <a href="#the-visit">✤ Plant Your Visit</a>
    </h2>
    <div class="bg-baytDarkestGreen pt-6 mt-20">
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
    <div class="bg-baytBeige pt-6 mt-20">
      <img
        src="../images/plant1.png"
        class="absolute w-screen h-full opacity-30 -scale-x-100"
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
        class="scroll-mt-10 left-[10%] bg-baytDarkestGreen text-baytBeige tracking-wider relative p-4 my-10 border-2 border-baytLightGreen shadow-lg shadow-baytLightGreen"
      >
        ACTIVITES, HIKES & ADVENTRUES
      </button>
    </div>
    <div class="my-5">
      <img src="../images/about-2.jpg" class="w-1/2 relative left-1/4" />
    </div>
    <div class="bg-baytBeige relative">
      <img
        src="../images/plant1.png"
        class="absolute w-screen h-full opacity-30 -scale-y-100"
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
        class="scroll-mt-10 w-1/2 left-1/4 bg-baytLightGreen text-baytDarkestGreen tracking-wider border-2 border-baytDarkestGreen relative p-4 my-10 shadow-lg shadow-baytDarkestGreen"
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
</style>
