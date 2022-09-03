<template>
  <div class="background h-screen">
    <h2 class="pl-2">
      Welcome to where you find your
      <div class="mask">
        <span data-show>escape.</span>
        <span>peace.</span>
        <span>nature.</span>
        <span>self.</span>
      </div>
    </h2>
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

      setInterval(function () {
        var show = document.querySelector("span[data-show]");
        var next =
          show.nextElementSibling || document.querySelector("span:first-child");
        var up = document.querySelector("span[data-up]");

        if (up) {
          up.removeAttribute("data-up");
        }

        show.removeAttribute("data-show");
        show.setAttribute("data-up", "");

        next.setAttribute("data-show", "");
      }, 2000);
    });
  },
};
</script>
<style scoped>
.background {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: radial-gradient(
      50% 103%,
      rgba(0, 0, 0, 0.7) 100%,
      rgba(0, 0, 0, 0.7) 100%
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

h2 {
  width: 980px;
  font-size: 100px;
  font-family: Helvetica;
  line-height: 1.06;
  letter-spacing: -0.02em;
  color: #ffffff;
}

.mask {
  height: 106px;
  position: relative;
  overflow: hidden;
  margin-top: var(--offset);
}

.mask span {
  display: block;
  box-sizing: border-box;
  position: absolute;
  top: 100px;
  padding-bottom: var(--offset);

  background-size: 100% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-repeat: no-repeat;
}

.mask span[data-show] {
  transform: translateY(-100%);
  transition: 0.5s transform ease-in-out;
}

.mask span[data-up] {
  transform: translateY(-200%);
  transition: 0.5s transform ease-in-out;
}

.mask span:nth-child(1) {
  background-image: linear-gradient(45deg, #0ecffe 50%, #07a6f1);
}

.mask span:nth-child(2) {
  background-image: linear-gradient(45deg, #18e198 50%, #0ec15d);
}

.mask span:nth-child(3) {
  background-image: linear-gradient(45deg, #8a7cfb 50%, #633e9c);
}

.mask span:nth-child(4) {
  background-image: linear-gradient(45deg, #fa7671 50%, #f45f7f);
}
</style>
