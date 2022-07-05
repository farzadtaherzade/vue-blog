<template>
  <div id="blog_detial">
    <div class="container quillWrapper">
      <small> Posted 30 january </small>
      <h1>iPhone 11 Pro Max Revies - outsiiing mastering bt apple</h1>
<!--      <small class="category"-->
<!--        >Lorem / ipsum / dolor / sit / dsde /ctetur / icing.</small-->
<!--      >-->
      <img src="../assets/image1.jpg" alt="THIB" />
      <div class="post-content post-container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          saepe quia, dolor consequatur aperiam architecto autem fugiat
          temporibus dolore natus?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          saepe quia, dolor consequatur aperiam architecto autem fugiat
          temporibus dolore natus?
        </p>
        </div>
      </div>
    </div>
</template>
<script setup>
import axios from 'axios'

axios 
  .get('http://localhost:5000/api/posts')
  .then(async res =>{
    console.log(res)
  })

</script>
<style lang="scss" scoped>
#blog_detial {
  .container {
    max-width: 1000px;
    padding: 40px 25px;
  }
  .post-container {
    max-width: 900px;
    font-weight: normal;
  }
  .quillWrapper {
    display: flex;
    flex-direction: column;
    h1 {
      font-weight: 600;
      margin-bottom: 10px;
    }
    .category {
      margin-bottom: 30px;
    }
    img {
      width: 100%;
      margin-bottom: 32px;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%),
        0 2px 4px -1px rgb(0 0 0 / 6%);
      border-radius: 5px;
    }
    .post-content {
      line-height: 1.42;

      p {
        font-weight:100;
        //margin-bottom: 12px;
      }

    }
  }
}
</style>