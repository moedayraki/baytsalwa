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
        <li class="pb-2">❁{{ $t("contract-list-1") }}</li>
        <li class="pb-2">❁{{ $t("contract-list-2") }}</li>
        <li class="pb-2">
          ❁
          {{ $t("contract-list-3") }}
        </li>
        <li class="pb-2">❁{{ $t("contract-list-4") }}</li>
        <li class="pb-2">❁{{ $t("contract-list-5") }}</li>
        <li class="pb-2">
          ❁
          {{ $t("contract-list-6") }}
        </li>
        <li class="pb-2">
          ❁
          {{ $t("contract-list-7") }}
        </li>
        <li>
          ❁
          {{ $t("contract-list-8") }}
        </li>
      </ul>
    </div>
    <div class="mt-10">
      <div
        class="bg-2 h-60 flex justify-center items-center shadow-md shadow-slate-700/60"
      >
        <div class="text-center text-4xl tracking-widest">What to Bring</div>
      </div>
      <ul class="p-4">
        <li class="pb-2">❁ {{ $t("you-bring-1") }}</li>
        <li class="pb-2">❁ {{ $t("you-bring-2") }}</li>
        <li class="pb-2">❁ {{ $t("you-bring-3") }}</li>
        <li class="pb-2">❁ {{ $t("you-bring-4") }}</li>
        <li class="pb-2">❁ {{ $t("you-bring-5") }}</li>
        <li class="pb-2">❁ {{ $t("you-bring-6") }}</li>
        <li class="pb-2">❁ {{ $t("you-bring-7") }}</li>
        <li class="pb-2">❁ {{ $t("you-bring-8") }}</li>
        <li class="pb-2">❁ {{ $t("you-bring-9") }}</li>
        <li class="pb-2">❁ {{ $t("you-bring-10") }}</li>
        <li class="pb-2">❁ {{ $t("you-bring-11") }}</li>
        <li class="pb-2">❁ {{ $t("you-bring-12") }}</li>
        <li class="pb-2">❁ {{ $t("you-bring-13") }}</li>
        <li>❁ {{ $t("you-bring-14") }}</li>
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
