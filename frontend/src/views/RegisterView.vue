<template>
  <div class="register">
    <div class="left_side">
      <h2>Vue Blog</h2>
      <img
        src="	https://vue-login-register.netlify.app/assets/te.38f2e2da.jpg"
        alt=""
      />
    </div>
    <form class="right_side">
      <h1>Welcome</h1>
      <p>please enter detail</p>

      <div class="inputs">
        <div class="input">
          <label for="username">Username</label>
          <input type="text" placeholder="Enter your usename" id="username" />
        </div>
        <div class="input">
          <label for="email">Email</label>
          <input type="email" placeholder="Enter your email" id="email" />
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            id="password"
          />
        </div>
        <button>Sign in</button>
        <p style="margin-top: 10px; color: #000">
          Already a member?
          <router-link :to="{ name: 'login' }">Sign in</router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.register {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  .right_side {
    flex-basis: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    p {
      color: #999;
    }
    .inputs {
      width: 350px;
      .input {
        display: flex;
        flex-direction: column;
        input {
          border: 1px solid rgba(29 201 219 / 5%);
          font-size: 13px;
          font-weight: 400;
          line-height: 28px;
          width: 100%;
          height: 50px;
          padding: 10px 16px;
          transition: background-color 200ms ease 0s, outline 200ms ease 0s,
            color 200ms ease 0s, box-shadow 200ms ease 0s,
            -webkit-box-shadow 200ms ease 0s;
          border-radius: 9px;
          outline: none;
          background-color: rgb(243, 243, 244);
          color: rgb(13, 12, 34);
          appearance: none;
          &:hover,
          &:focus {
            border-color: rgba(0, 0, 0, 0.1);
            background-color: rgb(255, 255, 255);
            box-shadow: rgba(210, 30, 36, 21%) 0px 0px 0px 3px;
          }
        }
        label {
          margin-bottom: 20px;
          margin-top: 20px;
          color: rgba($color: #000000, $alpha: 0.7);
          padding-left: 10px;
        }
      }
      button {
        width: 100%;
        border: 1px solid rgba(29 201 219 / 5%);
        font-weight: 400;
        width: 100%;
        height: 40px;
        padding: 10px 16px;
        transition: background-color 200ms ease 0s, outline 200ms ease 0s,
          color 200ms ease 0s, box-shadow 200ms ease 0s,
          -webkit-box-shadow 200ms ease 0s;
        border-radius: 9px;
        outline: none;
        background-color: #ed4a4a;
        color: #fff;
        cursor: pointer;
        margin-top: 20px;
        &:hover,
        &:focus {
          border-color: rgba(0, 0, 0, 0.1);
          box-shadow: rgba(210, 30, 36, 21%) 0px 0px 0px 3px;
        }
      }
    }
  }
  .left_side {
    flex-basis: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
    h2 {
      position: absolute;
      color: #fff;
      top: 29px;
      left: 29px;
      z-index: 2;
    }
  }
  @media (max-width: 882px) {
    .left_side {
      display: none;
      flex-basis: 0%;
    }
    .right_side {
      flex-basis: 100%;
    }
  }
}
</style>
