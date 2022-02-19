<template>
  <div class="background h-screen font-gulim">
    <router-link to="/book">
      <div
        class="w-full h-1/4 border-b-2 border-baytLightGreen text-baytLightGreen text-2xl relative"
      >
        <div
          :class="`border-b-2 border-baytLightGreen px-2 absolute w-fit left-1/4 bottom-4 tracking-widest lrt:first-letter:text-4xl ${fadeTop}`"
        >
          {{ $t("lets book") }}
        </div>
      </div>
    </router-link>
    <div class="flex h-3/4">
      <router-link to="/about" class="w-2/5">
        <div
          class="text-right h-full ltr:border-r-2 rtl:border-l-2 border-baytLightGreen ltr:pl-4 rtl:pr-4 pt-2 text-baytLightGreen text-2xl relative"
        >
          <div
            :class="`ltr:border-r-2 rtl:border-l-2 border-baytLightGreen px-2 h-fit py-2 absolute inset-y-52 right-4 tracking-widest lrt:first-letter:text-4xl ${fadeLeft}`"
          >
            {{ $t("bayt salwa") }}
          </div>
        </div>
      </router-link>
      <div class="w-3/5">
        <router-link to="/gallery" class="">
          <div
            class="h-1/3 border-b-2 border-baytLightGreen pl-4 pt-2 text-baytLightGreen text-2xl relative"
          >
            <div
              :class="`border-l-2 border-baytLightGreen px-2 py-2 absolute top-1/3 left-4 tracking-widest lrt:first-letter:text-4xl ${fadeRight}`"
            >
              {{ $t("gal") }}<br />{{ $t("lery") }}
            </div>
          </div>
        </router-link>
        <router-link to="/contact" class="">
          <div class="h-2/3 pl-4 pt-2 text-baytLightGreen text-2xl relative">
            <div
              :class="`border-l-2 border-baytLightGreen px-2 py-2 absolute top-1/2 left-4 tracking-widest lrt:first-letter:text-4xl ${fadeBottom}`"
            >
              {{ $t("reach") }}<br />{{ $t("us") }}
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      fadeTop: "",
      fadeLeft: "",
      fadeRight: "",
      fadeBottom: "",
    };
  },
  mounted() {
    let that = this;
    this.$nextTick(() => {
      that.fadeTop = "fade-top";
      that.fadeLeft = "fade-left";
      that.fadeRight = "fade-right";
      that.fadeBottom = "fade-bottom";
    });
  },
};
</script>
<style scoped>
.background {
  background-image: radial-gradient(
      50% 103%,
      rgba(25, 40, 43, 0.74) 50%,
      rgba(0, 0, 0, 0.87) 100%
    ),
    url("./../images/home.jpg");
  background-size: cover;
  background-position: center;
}

.fade-top {
  animation: fadeTop 0.5s ease-in-out;
}

.fade-left {
  animation: fadeLeft 0.5s ease-in-out;
}

.fade-right {
  animation: fadeRight 0.5s ease-in-out;
}

.fade-bottom {
  animation: fadeBottom 0.5s ease-in-out;
}
@keyframes fadeTop {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

@keyframes fadeLeft {
  0% {
    opacity: 0;
    transform: translateX(-10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}

@keyframes fadeRight {
  0% {
    opacity: 0;
    transform: translateX(10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}

@keyframes fadeBottom {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
