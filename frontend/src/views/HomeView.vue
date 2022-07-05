<template>
  <main>
    <div class="container">
      <div class="slider">
        <swiper
          :slidesPerView="1"
          :spaceBetween="30"
          :loop="true"
          :pagination="{
            clickable: true,
          }"
          :navigation="true"
          :autoplay="{
            delay: 2000,
            disableOnInteraction: false,
          }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide
            ><img src="../assets/slider.jpg.webp" alt="" /></swiper-slide
          ><swiper-slide><img src="../assets/images.jpg" alt="" /></swiper-slide
          ><swiper-slide><img src="../assets/image.avif" alt="" /></swiper-slide
          ><swiper-slide
            ><img src="../assets/download.jpg" alt=""
          /></swiper-slide>
        </swiper>
      </div>

      <div class="cards">
        <h2>View More Recent Blogs</h2>
        <BlogCard />
      </div>
      <UpdateNews />
    </div>
  </main>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

// Our Component
import BlogCard from "../components/BlogCard.vue";
import UpdateNews from "../components/UpdateNews.vue";
import axios from "axios";
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    Swiper,
    SwiperSlide,
    BlogCard,
    UpdateNews,
  },
  setup() {
    const store = useStore();

    axios.get("/auth").then((res) => {
      store.blogs = res.data;
      console.log(store.blogs);
    });
    return {
      modules: [Autoplay, Pagination, Navigation],
      // blogs,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/slider.css";
main {
  margin-top: 70px;
  margin-bottom: 70px;
  .container {
    .slider {
      height: 500px;
      .swiper-slide {
        img {
          width: 100%;
        }
      }
    }
    .cards {
      margin-top: 29px;
      h2 {
        font-weight: 300;
        font-size: 28px;
        padding: 20px;
      }
    }
  }
}
</style>