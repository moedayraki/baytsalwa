<script setup></script>

<template>
  <div class="max-w-[450px] mx-auto">
    <loading-comp v-if="loading" v-on:end-loading="loading = false" />
    <main v-else>
      <nav-bar />
      <router-view />
    </main>
    <!-- <a target="_blank" href="https://api.whatsapp.com/send?phone=15199923329">
      <img
        style="
          height: 64px;
          position: fixed;
          display: flex;
          right: 22px;
          bottom: 22px;
          z-index: 9999;
        "
        title="whatsapp"
        src="../src/images/w.png"
        alt="whatsapp"
      />
    </a> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
    };
  },
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
