<template>
  <div class="bg-baytBeige h-full w-screen">
    <div class="grid grid-cols-2 gap-4 pt-10 px-6 max-w-screen-2xl h-full">
      <div
        v-for="img in gridArray()"
        :key="img.id"
        class="flex max-h-40 lg:max-h-96"
        :class="img.rs"
      >
        <img
          :src="img.src"
          :key="img.id"
          alt=""
          class="object-cover rounded-3xl"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Gallery",
  data() {
    return {
      images: [
        {
          id: 1,
          src: "https://via.placeholder.com/150/000000/FFFFFF?text=BaytSalwa",
          rs: "lg:max-h-96",
        },
        {
          id: 2,
          src: "https://via.placeholder.com/150/000000/FFFFFF?text=BaytSalwa",
          rs: "lg:max-h-96",
        },
        {
          id: 3,
          src: "https://via.placeholder.com/150/000000/FFFFFF?text=BaytSalwa",
          rs: "lg:max-h-96",
        },
        {
          id: 4,
          src: "https://via.placeholder.com/150/000000/FFFFFF?text=BaytSalwa",
          rs: "lg:max-h-96",
        },
        {
          id: 5,
          src: "https://via.placeholder.com/150/000000/FFFFFF?text=BaytSalwa",
          rs: "lg:max-h-96",
        },
        {
          id: 6,
          src: "https://via.placeholder.com/150/000000/FFFFFF?text=BaytSalwa",
          rs: "lg:max-h-96",
        },
        {
          id: 7,
          src: "https://via.placeholder.com/150/000000/FFFFFF?text=BaytSalwa",
          rs: "lg:max-h-96",
        },
        {
          id: 8,
          src: "https://via.placeholder.com/150/000000/FFFFFF?text=BaytSalwa",
          rs: "lg:max-h-96",
        },
        {
          id: 9,
          src: "https://via.placeholder.com/150/000000/FFFFFF?text=BaytSalwa",
          rs: "lg:max-h-96",
        },
        {
          id: 10,
          src: "https://via.placeholder.com/150/000000/FFFFFF?text=BaytSalwa",
          rs: "lg:max-h-96",
        },
        {
          id: 11,
          src: "https://via.placeholder.com/150/000000/FFFFFF?text=BaytSalwa",
          rs: "lg:max-h-96",
        },
        {
          id: 12,
          src: "https://via.placeholder.com/150/000000/FFFFFF?text=BaytSalwa",
          rs: "lg:max-h-96",
        },
      ],
    };
  },
  methods: {
    gridArray: function () {
      var grArray = [];
      var len = this.images.length; //Length of the images array
      var counter = 0; //a counter to define how much space is used
      for (var i = 0; i < len; i++) {
        //calc a value for each img
        if (counter >= 5) {
          counter = 0;
        } //The grid has 5 columns, therefore the limit is 5
        var rand = Math.floor(Math.random() * 5) + 1;
        counter += rand;
        while (counter > 5) {
          //if counter exceeds 5, make the rand value of i smaller
          rand--;
          counter--;
        }
        if (i == len - 1) {
          //fill up the space by the last item
          while (counter < 5) {
            counter++;
            rand++;
          }
        }
        var result = "col-span-" + rand.toString(); //create the css class string
        grArray[i] = {
          id: this.images[i].id,
          src: this.images[i].src,
          rs: result,
        };
      }
      return grArray;
    },
  },
};
</script>
