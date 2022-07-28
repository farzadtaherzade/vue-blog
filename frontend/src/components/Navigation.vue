<template>
  <header>
    <nav class="container">
      <div
        class="menu-btn"
        v-show="mobile"
        @click="toggleMobileNav"
        :class="{ open: mobileNav }"
        style="flex: 0.2; cursor: pointer; background-color: aquamarine"
      >
        <div class="menu-btn-burger"></div>
      </div>
      <div class="links">
        <h1 class="logo-name">jsBlog</h1>
        <ul v-if="!mobile">
          <router-link :to="{ name: 'home' }">Home</router-link>
          <router-link :to="{ name: 'blogs' }">Blogs</router-link>
        </ul>
      </div>
      <div class="right">
        <div class="searching-box" v-if="!mobile">
          <input type="search" id="search" placeholder="Search..." />
        </div>
        <div class="auth">
          <router-link :to="{ name: 'login' }" class="sign-in" v-if="!mobile"
            >sign in</router-link
          >
          <router-link :to="{ name: 'login' }" class="sign-up"
            >sign up</router-link
          >
        </div>
      </div>
    </nav>
    <transition name="mobile-nav">
      <div class="mobile-nav" v-if="mobileNav">
        <input type="search" id="search" placeholder="Search..." />
        <ul>
          <router-link :to="{ name: 'home' }">Home</router-link>
          <router-link :to="{ name: 'blogs' }">Blogs</router-link>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      mobile: false,
      mobileNav: false,
      windowWidth: null,
    };
  },
  created() {},
  mounted() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 768) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  padding: 20px 0;
  box-shadow: 1px 25px 45px rgb(13 12 34 / 7%);
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .links {
      display: flex;
      align-items: center;
      .logo-name {
        margin-right: -10px;
      }
      ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        a {
          list-style-type: none;
          color: rgba(0, 0, 0, 0.7);
          padding: 10px;
          margin-right: 10px;
          transition: color 0.2s;
          &:hover {
            color: rgba(210, 30, 36);
          }
          cursor: pointer;
        }
      }
    }
    .right {
      display: flex;
      align-items: center;
      .searching-box {
        max-width: 150px;
        #search {
          border: 1px solid rgba(29 201 219 / 5%);
          font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica,
            Arial, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 28px;
          box-sizing: border-box;
          width: 100%;
          height: 40px;
          padding: 10px 16px;
          transition: background-color 200ms ease 0s, outline 200ms ease 0s,
            color 200ms ease 0s, box-shadow 200ms ease 0s,
            -webkit-box-shadow 200ms ease 0s;
          border-radius: 8px;
          outline: none;
          background-color: rgb(243, 243, 244);
          color: rgb(13, 12, 34);
          appearance: none;
          &:hover {
            border-color: rgba(0, 0, 0, 0.1);
            background-color: rgb(255, 255, 255);
            box-shadow: rgba(210, 30, 36, 21%) 0px 0px 0px 3px;
          }
          &:focus {
            box-shadow: rgba(210, 30, 36, 11%) 0px 0px 0px 3px;
            border-color: rgba(210, 30, 36, 30%);
          }
        }
      }
      .auth {
        margin-left: 10px;
        .sign-up {
          display: inline-block;
          padding: 10px 16px;
          border-radius: 10%;
          background: rgba(210, 30, 36);
          color: #fff;
          cursor: pointer;
          margin-left: 20px;
          transition: background 20ms ease;
          &:hover {
            background: rgba(210, 30, 36, 0.8);
          }
          &:active {
            background: rgb(236, 11, 19);
          }
        }
        .sign-in {
          cursor: pointer;
          transition: color 200ms ease;
          &:hover {
            color: rgba(210, 30, 36);
          }
        }
      }
    }
    .menu-btn {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.5s ease-in-out;
      height: 30px;
      .menu-btn-burger {
        width: 25px;
        height: 2px;
        background-color: #000;
        // border-radius: ;
        box-shadow: 0 2px 5px rgba(255, 101, 75, 0.2);
        transition: all 0.5s ease-in-out;
        &::after,
        &::before {
          content: "";
          position: absolute;
          width: 25px;
          height: 2px;
          background-color: #000;
          box-shadow: 0 2px 5px rgba(255, 101, 75, 0.2);
          transition: all 0.5s ease-in-out;
        }
        &::before {
          transform: translateY(-7px);
        }
        &::after {
          transform: translateY(7px);
        }
      }
    }
    .open .menu-btn-burger {
      transform: translateX(-50px);
      background: transparent;
      box-shadow: none;
      &::before {
        transform: rotate(45deg) translate(35px, -35px);
      }
      &::after {
        transform: rotate(-45deg) translate(35px, 35px);
      }
    }
  }
  .mobile-nav {
    width: 100%;
    height: 100%;
    max-width: 350px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    background-color: #f8f8f8f8;
    transition: all 0.7s ease;
    z-index: 2;
    padding: 50px 20px;
    #search {
      border: 1px solid rgba(29 201 219 / 5%);
      font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial,
        sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 28px;
      box-sizing: border-box;
      width: 100%;
      height: 40px;
      padding: 10px 16px;
      transition: background-color 200ms ease 0s, outline 200ms ease 0s,
        color 200ms ease 0s, box-shadow 200ms ease 0s,
        -webkit-box-shadow 200ms ease 0s;
      border-radius: 8px;
      outline: none;
      background-color: rgb(243, 243, 244);
      color: rgb(13, 12, 34);
      appearance: none;
      &:hover {
        border-color: rgba(0, 0, 0, 0.1);
        background-color: rgb(255, 255, 255);
        box-shadow: rgba(210, 30, 36, 21%) 0px 0px 0px 3px;
      }
      &:focus {
        box-shadow: rgba(210, 30, 36, 11%) 0px 0px 0px 3px;
        border-color: rgba(210, 30, 36, 30%);
      }
    }
    ul {
      display: flex;
      flex-direction: column;
      padding: 10px;

      margin-top: 20px;
      a {
        margin-bottom: 20px;
        color: #080808;
      }
    }
  }

  .mobile-nav-leave-active,
  .mobile-nav-enter-active {
    transition: all 0.7s ease;
  }
  .mobile-nav-enter-from,
  .mobile-nav-leave-to {
    transform: translateX(250px);
  }
  .mobile-nav-enter-to {
    transform: translateX(0px);
  }
}
</style>
