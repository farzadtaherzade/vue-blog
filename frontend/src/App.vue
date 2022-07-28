<script>
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Navigation,
    Footer,
  },
  data() {
    return {
      navBar: true,
    };
  },
  created() {
    this.returnRoute();
  },
  methods: {
    returnRoute() {
      if (this.$route.name === "login" || this.$route.name === "register") {
        this.navBar = false;
        return;
      }
      this.navBar = true;
    },
  },
  watch: {
    $route() {
      this.returnRoute();
    },
  },
};
</script>

<template>
  <Navigation v-if="navBar" />
  <RouterView />
  <Footer v-if="navBar" />
</template>

<style lang="css">
@import "@/assets/base.css";

.container {
  max-width: 1440px;
  margin: 0 auto;
  font-weight: normal;
  padding: 0 20px;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
