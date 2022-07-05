<template>
  <div class="blogs">
    <div class="container">
        <BlogCard />
    </div>
  </div>
</template>
<script>
import BlogCard from "../components/BlogCard.vue";
export default {
  components: {
    BlogCard,
  },
};
</script>
<style lang="scss" scoped>
.blogs {
    margin: 90px 0;
}
</style>