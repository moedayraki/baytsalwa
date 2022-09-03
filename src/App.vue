<script setup></script>

<template>
  <div class="max-w-[450px] mx-auto">
    <loading-comp v-if="loading" v-on:end-loading="loading = false" />
    <main v-else>
      <nav-bar />
      <router-view />
    </main>
  </div>
</template>
<script>
import { setPageLocale } from "./util-frontend";
export default {
  data() {
    return {
      loading: "",
    };
  },
  created() {
    setPageLocale();
  },
  mounted() {
    if (localStorage.locale) this.loading = false;
    else this.loading = true;
  },
  computed: {},
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
