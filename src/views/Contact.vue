<template>
  <div
    class="w-screen h-full pt-12 bg-baytLightGreen absolute overflow-y-scroll max-w-[450px]"
  >
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13337.205083583605!2d35.4789851!3d33.3109384!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x203989ecff56af5!2sBayt%20Salwa!5e0!3m2!1sen!2sca!4v1644371991681!5m2!1sen!2sca"
      width="100%"
      height="300"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      class="shadow-md shadow-slate-700/60"
    ></iframe>
    <img
      src="./../images/cabin.png"
      alt="cabin"
      class="absolute top-1/2 opacity-20 pointer-events-none"
    />
    <h2 class="text-2xl text-center p-4">
      {{ $t("best-moment") }}
    </h2>
    <div class="grid grid-cols-4 gap-2 text-center mb-5">
      <a
        href="https://www.facebook.com/search/top?q=بيت%20سلوى"
        target="_blank"
        class="ltr:ml-[25%] rtl:mr-[25%]"
      >
        <svg
          x="0px"
          y="0px"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          style="fill: #000000"
        >
          <path
            d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23c12.683,0,23-10.317,23-23S37.683,2,25,2z M32,16h-3.29 C26.772,16,26,16.455,26,17.806V21h6l-1,5h-5v13h-6V26h-3v-5h3v-2.774C20,14.001,21.686,11,26.581,11C29.203,11,32,12,32,12V16z"
          ></path>
        </svg>
      </a>
      <a
        href="https://www.instagram.com/bayt_salwa/"
        target="_blank"
        class="ltr:ml-[25%] rtl:mr-[25%]"
      >
        <svg
          x="0px"
          y="0px"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          style="fill: #000000"
        >
          <path
            d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"
          ></path>
        </svg>
      </a>
      <div class="ltr:ml-[25%] rtl:mr-[25%]">
        <svg
          @click="shareMe"
          x="0px"
          y="0px"
          width="50"
          height="50"
          viewBox="0 0 30 30"
          style="fill: #000000"
        >
          <path
            d="M 23 3 A 4 4 0 0 0 19 7 A 4 4 0 0 0 19.09375 7.8359375 L 10.011719 12.376953 A 4 4 0 0 0 7 11 A 4 4 0 0 0 3 15 A 4 4 0 0 0 7 19 A 4 4 0 0 0 10.013672 17.625 L 19.089844 22.164062 A 4 4 0 0 0 19 23 A 4 4 0 0 0 23 27 A 4 4 0 0 0 27 23 A 4 4 0 0 0 23 19 A 4 4 0 0 0 19.986328 20.375 L 10.910156 15.835938 A 4 4 0 0 0 11 15 A 4 4 0 0 0 10.90625 14.166016 L 19.988281 9.625 A 4 4 0 0 0 23 11 A 4 4 0 0 0 27 7 A 4 4 0 0 0 23 3 z"
          ></path>
        </svg>
      </div>
      <a
        href="mailto:moe@dayrakiarts.com?subject=BaytSalwa"
        class="ltr:ml-[25%] rtl:mr-[25%]"
      >
        <svg
          x="0px"
          y="0px"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          style="fill: #000000"
        >
          <path
            d="M 14 4 C 8.4886661 4 4 8.4886661 4 14 L 4 36 C 4 41.511334 8.4886661 46 14 46 L 36 46 C 41.511334 46 46 41.511334 46 36 L 46 14 C 46 8.4886661 41.511334 4 36 4 L 14 4 z M 13 16 L 37 16 C 37.18 16 37.349766 16.020312 37.509766 16.070312 L 27.679688 25.890625 C 26.199688 27.370625 23.790547 27.370625 22.310547 25.890625 L 12.490234 16.070312 C 12.650234 16.020312 12.82 16 13 16 z M 11.070312 17.490234 L 18.589844 25 L 11.070312 32.509766 C 11.020312 32.349766 11 32.18 11 32 L 11 18 C 11 17.82 11.020312 17.650234 11.070312 17.490234 z M 38.929688 17.490234 C 38.979688 17.650234 39 17.82 39 18 L 39 32 C 39 32.18 38.979687 32.349766 38.929688 32.509766 L 31.400391 25 L 38.929688 17.490234 z M 20 26.410156 L 20.890625 27.310547 C 22.020625 28.440547 23.510234 29 24.990234 29 C 26.480234 29 27.959844 28.440547 29.089844 27.310547 L 29.990234 26.410156 L 37.509766 33.929688 C 37.349766 33.979688 37.18 34 37 34 L 13 34 C 12.82 34 12.650234 33.979687 12.490234 33.929688 L 20 26.410156 z"
          ></path>
        </svg>
      </a>
    </div>
    <div class="grid grid-cols-2 gap-4 mx-4 relative mb-20">
      <div
        class="border-2 border-baytDarkestGreen text-baytDarkestGreen px-8 py-4 tracking-widest cursor-pointer shadow-lg shadow-slate-700/60"
        @click="openModal"
      >
        {{ $t("contact-1") }}
      </div>
      <div
        class="bg-baytDarkestGreen p-4 text-baytLightGreen px-8 py-4 tracking-widest text-right shadow-lg shadow-slate-700/60"
      >
        {{ $t("contact-2") }}
      </div>
      <div
        class="bg-baytLightGreen p-4 text-baytDarkestGreen border-2 border-baytDarkestGreen px-8 py-4 tracking-widest shadow-lg shadow-slate-700/60"
      >
        {{ $t("contact-3") }}
      </div>
      <div
        class="border-2 border-baytDarkestGreen p-4 text-baytDarkestGreen px-8 py-4 tracking-widest text-right shadow-lg shadow-slate-700/60"
      >
        {{ $t("contact-4") }}
      </div>
    </div>
    <div
      class="fixed flex items-stretch bottom-0 w-full justify-between max-w-[450px]"
    >
      <div
        class="text-4xl bg-baytDarkestGreen text-left m-3 p-3 rounded-lg shadow-lg shadow-slate-700/60 border border-black text-baytLightGreen"
      >
        <svg class="h-10 w-10 fill-baytLightGreen" viewBox="0 0 20 20">
          <path
            d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
          />
        </svg>
      </div>
      <div
        class="text-4xl bg-baytDarkestGreen text-right m-3 p-3 rounded-lg shadow-lg shadow-slate-700/60 border border-black text-baytLightGreen"
      >
        <svg
          class="h-10 w-10 fill-baytLightGreen"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52c.149-.174.198-.298.298-.497c.099-.198.05-.371-.025-.52c-.075-.149-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074c.149.198 2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413c.248-.694.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214l-3.741.982l.998-3.648l-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"
          />
        </svg>
      </div>
    </div>
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal">
        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="min-h-screen px-4 text-center">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <DialogOverlay class="fixed inset-0" />
            </TransitionChild>

            <span class="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>

            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <div
                class="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
              >
                <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-gray-900"
                >
                  Waitlist
                </DialogTitle>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Vestibulum quis porttitor dui. Donec eget ex
                    euismod,efficitur nunc eu, consectetur nunc. Vestibulum ante
                    ipsum primis in faucibus orci luctus etultrices posuere
                    cubilia Curae; Donec eget ex euismod.
                  </p>
                  <div class="relative z-0 mb-6 mx-10 group">
                    <input
                      type="email"
                      name="floating_email"
                      class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-baytLightGreen peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_email"
                      class="absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-baytLightGreen peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >Booking Date</label
                    >
                  </div>
                  <div class="relative z-0 mb-6 mx-10 group">
                    <input
                      type="email"
                      name="floating_email"
                      class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-baytLightGreen peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_email"
                      class="absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-baytLightGreen peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      ># of People</label
                    >
                  </div>
                  <div class="relative z-0 mb-6 mx-10 group">
                    <input
                      type="email"
                      name="floating_email"
                      class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-baytLightGreen peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_email"
                      class="absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-baytLightGreen peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >Full Name</label
                    >
                  </div>
                  <div class="relative z-0 mb-6 mx-10 group">
                    <input
                      type="email"
                      name="floating_email"
                      class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-baytLightGreen peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_email"
                      class="absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-baytLightGreen peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >Phone #</label
                    >
                  </div>
                </div>

                <div class="mt-4">
                  <button
                    type="button"
                    class="inline-flex justify-center px-4 py-2 text-sm font-medium text-green-900 bg-green-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 mr-4"
                    @click="closeModal"
                  >
                    Submit Request
                  </button>
                  <button
                    type="button"
                    class="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    @click="closeModal"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>
<script>
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from "@headlessui/vue";
export default {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
  },
  setup() {
    const isOpen = ref(false);

    return {
      isOpen,
      closeModal() {
        isOpen.value = false;
      },
      openModal() {
        isOpen.value = true;
      },
    };
  },
  methods: {
    shareMe() {
      if (navigator.share) {
        navigator
          .share({
            title: "WebShare API Demo",
            url: "https://codepen.io/ayoisaiah/pen/YbNazJ",
          })
          .then(() => {
            console.log("Thanks for sharing!");
          })
          .catch(console.error);
      } else {
        alert(
          "Your browser does not support the Web Share. Please copy link manually."
        );
      }
    },
  },
};
</script>
