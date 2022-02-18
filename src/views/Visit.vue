<template>
  <div class="bg-baytDarkestGreen">
    <div class="pt-10">
      <div
        class="bg-1 h-60 flex justify-center items-center shadow-md shadow-slate-700/60"
      >
        <div class="text-center text-4xl tracking-widest">
          Play By the Rules
        </div>
      </div>
      <ul class="p-4">
        <li>❁ lorem ipsem dolor sit amet, consectetur adipiscing elit.</li>
        <li>❁ lorem ipsem dolor sit amet, consectetur adipiscing elit.</li>
        <li>❁ lorem ipsem dolor sit amet, consectetur adipiscing elit.</li>
        <li>❁ lorem ipsem dolor sit amet, consectetur adipiscing elit.</li>
      </ul>
    </div>
    <div class="mt-10">
      <div
        class="bg-2 h-60 flex justify-center items-center shadow-md shadow-slate-700/60"
      >
        <div class="text-center text-4xl tracking-widest">What to Bring</div>
      </div>
      <ul class="p-4">
        <li>❁ lorem ipsem dolor sit amet, consectetur adipiscing elit.</li>
        <li>❁ lorem ipsem dolor sit amet, consectetur adipiscing elit.</li>
        <li>❁ lorem ipsem dolor sit amet, consectetur adipiscing elit.</li>
        <li>❁ lorem ipsem dolor sit amet, consectetur adipiscing elit.</li>
      </ul>
    </div>
  </div>
</template>

<script>
import ScrollParallax from "vue3-parallax/src/components/ScrollParallax.vue";
export default {
  name: "Visit",
  components: {
    ScrollParallax,
  },
};
</script>

<style scope>
.bg-1 {
  background-image: url("https://picsum.photos/id/1000/1024/300");
}
.bg-2 {
  background-image: url("https://picsum.photos/id/1001/1024/300");
}
</style>
