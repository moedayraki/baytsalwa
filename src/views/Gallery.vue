<template>
  <div class="bg-baytBeige h-full w-screen max-w-[450px]">
    <div
      class="grid grid-cols-2 gap-1 pt-10 px-6 max-w-screen-2xl h-full place-content-stretch"
    >
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
          class="object-cover rounded-md"
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
          src: "https://picsum.photos/id/237/1024/800",
          rs: "lg:max-h-96",
        },
        {
          id: 2,
          src: "https://picsum.photos/id/238/1024/800",
          rs: "lg:max-h-96",
        },
        {
          id: 3,
          src: "https://picsum.photos/id/239/1024/800",
          rs: "lg:max-h-96",
        },
        {
          id: 4,
          src: "https://picsum.photos/id/240/1024/800",
          rs: "lg:max-h-96",
        },
        {
          id: 5,
          src: "https://picsum.photos/id/241/1024/800",
          rs: "lg:max-h-96",
        },
        {
          id: 6,
          src: "https://picsum.photos/id/242/1024/800",
          rs: "lg:max-h-96",
        },
        {
          id: 7,
          src: "https://picsum.photos/id/243/1024/800",
          rs: "lg:max-h-96",
        },
        {
          id: 8,
          src: "https://picsum.photos/id/244/1024/800",
          rs: "lg:max-h-96",
        },
        {
          id: 9,
          src: "https://picsum.photos/id/1/1024/800",
          rs: "lg:max-h-96",
        },
        {
          id: 10,
          src: "https://picsum.photos/id/250/1024/800",
          rs: "lg:max-h-96",
        },
        {
          id: 11,
          src: "https://picsum.photos/id/247/1024/800",
          rs: "lg:max-h-96",
        },
        {
          id: 12,
          src: "https://picsum.photos/id/248/1024/800",
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
