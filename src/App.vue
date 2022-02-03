<script setup></script>

<template>
  <div class="sm:container sm:mx-auto">
    <main>
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
