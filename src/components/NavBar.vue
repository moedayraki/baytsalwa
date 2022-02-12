<template>
  <div
    v-if="$route.path !== '/'"
    :class="`fixed top-2 left-0 ${textColour} w-screen z-10`"
  >
    <span
      @click="$router.back()"
      class="inline-block w-1/3 text-center text-xs"
    >
      Back</span
    >
    <router-link to="/" class="inline-block w-1/3 text-center text-xs">{{
      $route.name
    }}</router-link>
    <router-link to="/" class="inline-block w-1/3 text-center text-xs"
      >عربي</router-link
    >
  </div>
  <div v-else :class="`fixed top-2 left-0 ${textColour} w-screen z-10`">
    <router-link to="/" class="inline-block w-1/3 text-center text-xs"
      >&nbsp;</router-link
    >
    <router-link to="/" class="inline-block w-1/3 text-center text-xs">
      &nbsp;
    </router-link>
    <router-link to="/" class="inline-block w-1/3 text-center text-xs"
      >عربي</router-link
    >
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
};
</script>
