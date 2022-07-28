<template>
  <div class="cards">
    <div class="card">
      <img src="../assets/images.jpg" alt="image" />
      <div class="info">
        <h4 class="title">What is thidasdasdasddasjdasios to do out</h4>
        <p class="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
          minus?...
        </p>
        <a href="#" class="link">Read Article</a>
      </div>
    </div>
    <div class="card">
      <img src="../assets/images.jpg" alt="image" />
      <div class="info">
        <h4 class="title">What is this to do out</h4>
        <p class="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          voluptatum ea illum saepe eos, corrupti quod dolores quo perferendis
          dolorum adipisci quis ab deleniti at quidem possimus ex natus minus?
        </p>
        <a href="#" class="link">Read Article</a>
      </div>
    </div>
    <div class="card">
      <img src="../assets/images.jpg" alt="image" />
      <div class="info">
        <h4 class="title">WhWhat is to do out</h4>
        <p class="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
          minus?...
        </p>
        <a href="#" class="link">Read Article</a>
      </div>
    </div>
    <div class="card">
      <img src="../assets/images.jpg" alt="image" />
      <div class="info">
        <h4 class="title">What is this to do out</h4>
        <p class="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
          minus?...
        </p>
        <a href="#" class="link">Read Article</a>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>
<style lang="scss" scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 40px;
  .card {
    display: flex;
    flex-direction: column;
    min-height: 420px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    cursor: pointer;
    img {
      max-width: 100%;
      border-radius: 9px;
    }
    .info {
      padding: 32px 16px;
      height: 100%;
      display: flex;
      flex-direction: column;
      .title {
        font-size: 20px;
        font-weight: 300;
        color: #182779;
        padding-bottom: 8px;

        display: -webkit-box;
        max-width: 500px;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .desc {
        font-weight: 400;
        color: rgba(0, 0, 0, 0.493);
        margin-top: 0.2rem;
        margin-bottom: 2.2rem;

        display: -webkit-box;
        max-width: 600px;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .link {
        width: fit-content;
        padding: 10px 23px;
        border: 2px solid rgba(210, 30, 36, 50%);
        border-radius: 5%;
        transition: color 200ms, background-color 150ms;
        margin-top: auto;
        &:hover {
          background-color: rgba(210, 30, 36, 90%);
          color: #fff;
          border: 2px solid rgba(210, 30, 36, 20%);
        }
      }
    }
    transition: 0.3s ease-in;
    &:hover {
      transform: rotate(-2deg) scale(1.02);
      .title {
        // color: #000;
      }
    }
  }
}
</style>