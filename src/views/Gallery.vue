<template>
  <div
    class="elfsight-app-9b700a63-b4c5-4ec9-b439-5e77e806b897 max-w-[450px] mx-auto"
  ></div>
</template>
<script>
import axios from "axios";
export default {
  name: "Gallery",
  data() {
    return {
      images: [
        {
          id: 1,
          src: "/src/images/gallery/1.jpg",
        },
        {
          id: 2,
          src: "/src/images/gallery/2.jpg",
        },
        {
          id: 3,
          src: "/src/images/gallery/3.jpg",
        },
        {
          id: 4,
          src: "/src/images/gallery/4.jpg",
        },
        {
          id: 5,
          src: "/src/images/gallery/5.jpg",
        },
        {
          id: 6,
          src: "/src/images/gallery/6.jpg",
        },
        {
          id: 7,
          src: "/src/images/gallery/7.jpg",
        },
        {
          id: 8,
          src: "/src/images/gallery/8.jpg",
        },
        {
          id: 9,
          src: "/src/images/gallery/9.jpg",
        },
        {
          id: 10,
          src: "/src/images/gallery/10.jpg",
        },
      ],
    };
  },
  // mounted() {
  //   let that = this;
  //   axios
  //     .get(
  //       "https://graph.instagram.com/me/media?fields=media_url&access_token=IGQVJVQkI4RnlyN2xiNngxaE9XQ3ZA6M0Q5bmV4M3ZAkbjh5d1ROUmY0ZA3JwMXBJQXFjNUVnVXhBSlNYNzFCRFpQbWhBTWYtQnE2WlNBa2tLMnFCWV81OHZAyZAXdNdGZA0Ylg3ZAGltNUpB"
  //     )
  //     .then((response) => {
  //       that.images = response.data.data;
  //     });
  // },
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
