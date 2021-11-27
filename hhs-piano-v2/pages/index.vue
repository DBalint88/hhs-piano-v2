<template>
  <main class="bg-dark">
    <h1 class="text-primary">Welcome to the HHS Piano page!</h1>
    <p class="text-primary">Use the links above to find your music and other information.  Here's what else is going on in the department:</p>
    <!--Reference ot the NewsStory component which takes over to generate the formatted stories. -->
    <NewsStory />
  </main>
</template>

<script>
import NewsStory from "@/components/NewsStory.vue";

export default {
  name: "Home",
  head() {
      return {
        title: this.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'description',
            name: 'description',
            content: 'news and events at Hamden High School'
          }
        ]
      }
    },
  components: {
    NewsStory
  },
  data() {
      return {
        title: 'Home - HHS Piano'
      }
    }
  }
</script>

<style lang="scss">

  .news-card {
    height: auto;
    padding: 1rem;
    border-radius: 1rem;
    margin-bottom: 4rem;
  }

  .news-card-image {
    height: auto;
    padding: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }

  main {
    max-width: 100vw;
    padding: 1.5rem;
  }

</style>
