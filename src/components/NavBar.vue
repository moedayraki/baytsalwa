<template>
  <div
    v-if="$route.path !== '/'"
    :class="`fixed top-2 ${textColour} z-10 w-full max-w-[450px] mx-auto`"
  >
    <span
      @click="$router.back()"
      class="inline-block w-1/3 text-center text-xs cursor-pointer"
    >
      {{ $t("back") }}</span
    >
    <router-link to="/" class="inline-block w-1/3 text-center text-xs">{{
      $route.name
    }}</router-link>
    <div @click="toggleLang" class="inline-block w-1/3 text-center text-xs">
      {{ $t("language change") }}
    </div>
  </div>
  <div
    v-else
    :class="`fixed top-2 ${textColour} w-full max-w-[450px] mx-auto z-10`"
  >
    <router-link to="/" class="inline-block w-1/3 text-center text-xs"
      >&nbsp;</router-link
    >
    <router-link to="/" class="inline-block w-1/3 text-center text-xs">
      &nbsp;
    </router-link>
    <div @click="toggleLang" class="inline-block w-1/3 text-center text-xs">
      {{ $t("language change") }}
    </div>
  </div>
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
