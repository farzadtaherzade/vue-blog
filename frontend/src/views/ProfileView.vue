<template>
  <div class="profile container">
    <a href="#" class="link">Create Post</a>
    <BlogCard />
  </div>
</template>
<script setup>
import BlogCard from "../components/BlogCard.vue";
</script>
<style lang="scss" scoped>
.profile {
  width: 100%;
  padding: 50px;
  .link {
    margin-bottom: 50px;
    background-color: rgb(210, 30, 36);
    padding: 10px 20px;
    border-radius: 10px;
    color: #fff;
  }
  .cards {
    margin-top: 20px;
  }
}
</style>