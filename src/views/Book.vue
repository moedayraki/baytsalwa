<template>
  <div class="background h-screen pt-10 overflow-y-scroll">
    <div class="text-baytBeige text-2xl font-bold px-5 pb-2 text-center">
      Select Date
    </div>
    <div class="text-center mb-10">
      <DatePicker
        :attributes="dateAttributes"
        v-model="range"
        :min-date="new Date()"
        :max-date="nextMonth"
        is-range
        title-position="left"
        :rows="2"
      />
    </div>
    <div class="relative z-0 mb-6 mx-10 group">
      <input
        type="email"
        name="floating_email"
        class="block py-2.5 px-0 w-full text-sm text-baytBeige bg-transparent border-0 border-b-2 border-baytBeige appearance-none focus:outline-none focus:ring-0 focus:border-baytLightGreen peer"
        placeholder=" "
        required
      />
      <label
        for="floating_email"
        class="absolute text-sm text-baytBeige duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-baytLightGreen peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Booking Date</label
      >
    </div>
    <div class="relative z-0 mb-6 mx-10 group">
      <input
        type="email"
        name="floating_email"
        class="block py-2.5 px-0 w-full text-sm text-baytBeige bg-transparent border-0 border-b-2 border-baytBeige appearance-none focus:outline-none focus:ring-0 focus:border-baytLightGreen peer"
        placeholder=" "
        required
      />
      <label
        for="floating_email"
        class="absolute text-sm text-baytBeige duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-baytLightGreen peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        ># of People</label
      >
    </div>
    <div class="relative z-0 mb-6 mx-10 group">
      <input
        type="email"
        name="floating_email"
        class="block py-2.5 px-0 w-full text-sm text-baytBeige bg-transparent border-0 border-b-2 border-baytBeige appearance-none focus:outline-none focus:ring-0 focus:border-baytLightGreen peer"
        placeholder=" "
        required
      />
      <label
        for="floating_email"
        class="absolute text-sm text-baytBeige duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-baytLightGreen peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Full Name</label
      >
    </div>
    <div class="relative z-0 mb-6 mx-10 group">
      <input
        type="email"
        name="floating_email"
        class="block py-2.5 px-0 w-full text-sm text-baytBeige bg-transparent border-0 border-b-2 border-baytBeige appearance-none focus:outline-none focus:ring-0 focus:border-baytLightGreen peer"
        placeholder=" "
        required
      />
      <label
        for="floating_email"
        class="absolute text-sm text-baytBeige duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-baytLightGreen peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Phone #</label
      >
    </div>
    <div class="relative z-0 mb-6 mx-10 group">
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        for="user_avatar"
        >Upload ID Photo</label
      >
      <input
        class="block w-full text-sm text-gray-900 bg-baytSoil rounded-lg border border-gray-300 cursor-pointer focus:outline-none focus:border-transparent"
        aria-describedby="user_avatar_help"
        id="user_avatar"
        type="file"
      />
      <div
        class="mt-1 text-xs text-gray-500 dark:text-gray-300"
        id="user_avatar_help"
      >
        A proof of ID is useful to confirm legal information.
      </div>
    </div>
    <div
      class="text-center underline decoration-red-500 text-white decoration-2 mb-10"
      @click="openModal"
    >
      Contract Agreement
    </div>
    <div class="text-center mb-20">
      <button
        class="bg-baytLightGreen text-baytDarkestGreen font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-baytBeige hover:text-baytLightGreen"
        type="submit"
      >
        Book Now
      </button>
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
                Contract Agreement
              </DialogTitle>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.Vestibulum quis porttitor dui. Donec eget ex
                  euismod,efficitur nunc eu, consectetur nunc. Vestibulum ante
                  ipsum primis in faucibus orci luctus etultrices posuere
                  cubilia Curae; Donec eget ex euismod.
                </p>
                <li>Bla Bla Bla</li>
                <li>Bla Bla Bla</li>
                <li>Bla Bla Bla</li>
              </div>

              <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center px-4 py-2 text-sm font-medium text-green-900 bg-green-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  @click="closeModal"
                >
                  I, Moe Dayraki , Agree to the Terms
                </button>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { DatePicker } from "v-calendar";
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
    DatePicker,
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
  data() {
    let today = new Date();
    let nextMonth = new Date();
    nextMonth = new Date(nextMonth.setMonth(nextMonth.getMonth() + 1));
    let year = today.getFullYear();
    let month = today.getMonth();
    return {
      today,
      nextMonth,
      dateAttributes: [
        {
          highlight: {
            color: "red",
            fillMode: "solid",
          },
          dates: new Date(year, month, 26),
        },
        {
          highlight: {
            color: "red",
            fillMode: "solid",
          },
          dates: new Date(year, month, 27),
        },
        {
          highlight: {
            color: "red",
            fillMode: "solid",
          },
          dates: new Date(year, month, 12),
        },
      ],
    };
  },
};
</script>
<style>
.background {
  background-image: radial-gradient(
      58% 108%,
      rgba(25, 40, 43, 0.46) 58%,
      rgba(0, 0, 0, 0.87) 100%
    ),
    url("./../images/booking.jpg");
  background-size: cover;
  background-position: center;
}
.vc-container {
  background-color: #ffffff66 !important;
}
.vc-weekday {
  color: #ededeb !important;
}
.vc-title {
  color: #ededeb !important;
}
</style>
