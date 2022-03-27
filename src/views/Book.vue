<template>
  <div class="background h-screen pt-10 overflow-y-scroll">
    <div class="text-baytBeige text-2xl font-bold px-5 pb-2 text-center">
      {{ $t("select date") }}
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
        :locale="language"
      />
    </div>
    <div class="relative z-0 mb-6 mx-10 group">
      <input
        type="text"
        name="checkin"
        class="block py-2.5 px-0 w-full text-sm text-baytBeige bg-transparent border-0 border-b-2 border-baytBeige appearance-none focus:outline-none focus:ring-0 focus:border-baytLightGreen peer"
        placeholder=" "
        required
        readonly
        :value="checkIn"
      />
      <label
        for="floating_email"
        class="absolute text-sm text-baytBeige duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-baytLightGreen peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >{{ $t("check in") }}</label
      >
    </div>
    <div class="relative z-0 mb-6 mx-10 group">
      <input
        type="text"
        name="checkout"
        class="block py-2.5 px-0 w-full text-sm text-baytBeige bg-transparent border-0 border-b-2 border-baytBeige appearance-none focus:outline-none focus:ring-0 focus:border-baytLightGreen peer"
        placeholder=" "
        required
        readonly
        :value="checkOut"
      />
      <label
        for="floating_email"
        class="absolute text-sm text-baytBeige duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-baytLightGreen peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >{{ $t("check out") }}</label
      >
    </div>
    <div class="relative z-0 mb-6 mx-10 group">
      <input
        type="email"
        name="floating_email"
        class="block py-2.5 px-0 w-full text-sm text-baytBeige bg-transparent border-0 border-b-2 border-baytBeige appearance-none focus:outline-none focus:ring-0 focus:border-baytLightGreen peer"
        placeholder=" "
        required
        v-model="form.guests"
      />
      <label
        for="floating_email"
        class="absolute text-sm text-baytBeige duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-baytLightGreen peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >{{ $t("# of people") }}</label
      >
    </div>
    <div class="relative z-0 mb-6 mx-10 group">
      <input
        type="email"
        name="floating_email"
        class="block py-2.5 px-0 w-full text-sm text-baytBeige bg-transparent border-0 border-b-2 border-baytBeige appearance-none focus:outline-none focus:ring-0 focus:border-baytLightGreen peer"
        placeholder=" "
        required
        v-model="form.name"
      />
      <label
        for="floating_email"
        class="absolute text-sm text-baytBeige duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-baytLightGreen peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >{{ $t("full name") }}</label
      >
    </div>
    <div class="relative z-0 mb-6 mx-10 group">
      <input
        type="email"
        name="floating_email"
        class="block py-2.5 px-0 w-full text-sm text-baytBeige bg-transparent border-0 border-b-2 border-baytBeige appearance-none focus:outline-none focus:ring-0 focus:border-baytLightGreen peer"
        placeholder=" "
        required
        v-model="form.phone"
      />
      <label
        for="floating_email"
        class="absolute text-sm text-baytBeige duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-baytLightGreen peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >{{ $t("phone #") }}</label
      >
    </div>
    <div class="relative z-0 mb-6 mx-10 group">
      <label
        class="block mb-2 text-sm font-medium text-baytBeige"
        for="user_avatar"
        >{{ $t("upload photo id") }}</label
      >
      <input
        class="block w-full text-sm text-gray-900 bg-baytSoil rounded-lg border border-gray-300 cursor-pointer focus:outline-none focus:border-transparent"
        aria-describedby="user_avatar_help"
        id="user_avatar"
        type="file"
        @change="onFileChange"
      />
      <div class="mt-1 text-xs text-baytLightGreen" id="user_avatar_help">
        {{ $t("id explanation") }}
      </div>
    </div>
    <div
      class="text-center underline decoration-red-500 text-white decoration-2 mb-10 cursor-pointer"
      @click="openModal"
    >
      {{ $t("contract agreement") }}
    </div>
    <div class="text-center mb-20">
      <button
        class="bg-baytLightGreen text-baytDarkestGreen font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-baytBeige hover:text-baytLightGreen claymorph-btn"
        type="submit"
        @click="bookNow"
      >
        {{ $t("book now") }}
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
                class="text-lg font-medium leading-6 text-gray-900 ltr:text-left rtl:text-right"
              >
                {{ $t("contract agreement") }}
              </DialogTitle>
              <div class="mt-2 ltr:text-left rtl:text-right">
                <p class="text-sm text-gray-500">
                  {{ $t("contract-1") }} {{ form.name }}
                  <br />
                  <br />
                  {{ $t("contract-2") }} <br />
                  {{ $t("contract-3") }} <br />
                  {{ $t("contract-4") }} <br />
                  {{ $t("contract-5") }} <br />
                  <br />
                  {{ $t("contract-6") }} {{ form.checkin }} <br />
                  {{ $t("contract-7") }} {{ form.checkout }} <br />

                  {{ $t("contract-8") }} <br />
                  <br />
                  {{ $t("contract-9") }} <br />
                  <br />
                  {{ $t("contract-10") }} <br />
                  <br />
                </p>
                <ul class="list-disc pl-5 text-sm">
                  <li>{{ $t("contract-list-1") }}</li>
                  <li>{{ $t("contract-list-2") }}</li>
                  <li>
                    {{ $t("contract-list-3") }}
                  </li>
                  <li>{{ $t("contract-list-4") }}</li>
                  <li>{{ $t("contract-list-5") }}</li>
                  <li>
                    {{ $t("contract-list-6") }}
                  </li>
                  <li>
                    {{ $t("contract-list-7") }}
                  </li>
                  <li>
                    {{ $t("contract-list-8") }}
                  </li>
                </ul>
                <div class="mt-5 text-sm">
                  <input
                    type="checkbox"
                    class="w-6 h-6 text-green-600 border-0 rounded-md focus:ring-0"
                  />
                  <span class="ml-2">{{ $t("terms") }}</span>
                </div>
              </div>

              <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center px-4 py-2 text-sm font-medium text-green-900 bg-green-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ltr:mr-4 rtl:ml-4"
                  @click="acceptAgreement"
                >
                  {{ $t("agree") }}
                </button>
                <button
                  type="button"
                  class="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  @click="closeModal"
                >
                  {{ $t("disagree") }}
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
import axios from "axios";
import { DatePicker } from "v-calendar";
import dayjs from "dayjs";
import "v-calendar/dist/style.css";
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
      form: {
        checkin: null,
        checkout: null,
        guests: null,
        name: null,
        phone: null,
        image: null,
        contract: 0,
      },
      today,
      nextMonth,
      dateAttributes: [],
      range: {
        start: null,
        end: null,
      },
    };
  },
  created() {
    this.getBookings();
  },
  computed: {
    checkIn() {
      if (this.range.start === null) return "";
      let d = new Date(
        this.range.start.getFullYear(),
        this.range.start.getMonth(),
        this.range.start.getDate(),
        14,
        0,
        0,
        0
      );
      this.form.checkin = `${dayjs(d).format("ddd MMM DD, YYYY")} @ 4:00 PM`;
      return `${dayjs(d).format("ddd MMM DD, YYYY")} @ 4:00 PM`;
    },
    checkOut() {
      if (this.range.end === null) return "";
      let d = new Date(
        this.range.end.getFullYear(),
        this.range.end.getMonth(),
        this.range.end.getDate(),
        14,
        0,
        0,
        0
      );
      this.form.checkout = `${dayjs(d).format("ddd MMM DD, YYYY")} @ 2:00 PM`;
      return `${dayjs(d).format("ddd MMM DD, YYYY")} @ 2:00 PM`;
    },
  },
  methods: {
    onFileChange(e) {
      this.form.image = e.target.files[0];
    },
    acceptAgreement() {
      this.form.contract = 1;
      this.closeModal();
    },
    bookNow() {
      let formData = new FormData();
      let checkin = new Date(this.form.checkin).toUTCString();
      let checkout = new Date(this.form.checkout).toUTCString();
      formData.append("checkin", checkin);
      formData.append("checkout", checkout);
      formData.append("guests", this.form.guests);
      formData.append("name", this.form.name);
      formData.append("phone", this.form.phone);
      formData.append("agreement", this.form.contract);
      formData.append("image", this.form.image);

      axios
        .post("https://api.baytsalwa.dayrakiarts.com/api/book", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          alert("Booking Successful!");
          this.dateAttributes = [];
          (this.form.checkin = null),
            (this.form.checkout = null),
            (this.form.guests = null),
            (this.form.name = null),
            (this.form.phone = null),
            (this.form.image = null),
            (this.form.contract = 0),
            (this.range.start = null),
            (this.range.end = null);
          this.getBookings();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getBookings() {
      axios
        .get("https://api.baytsalwa.dayrakiarts.com/api/book")
        .then((res) => {
          res.data.forEach((item) => {
            let d = new Date(item.check_out);
            this.dateAttributes.push({
              highlight: {
                color: "red",
                fillMode: "solid",
              },
              dates: {
                start: new Date(item.check_in),
                end: new Date(item.check_out).setDate(d.getDate() - 1),
              },
            });
          });
        });
    },
  },
};
</script>
<style scoped>
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
.claymorph-btn {
  box-shadow: 10px 10px 15px -3px #000000, inset 5px 4px 5px 0 #e6ede6,
    inset -5px -4px 5px 0 #566654;
}
</style>
<style>
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
