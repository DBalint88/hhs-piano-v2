<template>
  <main class="bg-dark text-primary py-2">

    <h2>Use this page to discover new artists you might like.</h2>
    <p>Enter your favorite artist's name below to begin.</p>

    <div class="disover-form my-5">
      <label for="artist">Artist:
        <input v-model="input" type="text" name="artist" @keyup.enter="callAPI" placeholder="Type in an artist's name..." >
      </label>
      <button type="button" name="button" class="btn btn-success" @click="callAPI">Submit</button>
    </div>

    <div v-if="!this.loading && this.suggestions.Similar.Results.length != 0">
      <h2 v-if="this.suggestions">Showing search results for "{{ suggestions.Similar.Info[0].Name }}":</h2>

      <DiscoverCard :suggestions="this.suggestions"/>

    </div>

    <div v-if="!this.loading && this.suggestions.Similar.Results.length == 0" class="discoverror">
      <h6>Sorry, no search results.</h6>
      <p>This might be because you've misspelled the artist's name.  Please try again.</p>
    </div>

  </main>
</template>

<script>
import axios from 'axios'
import DiscoverCard from "@/components/DiscoverCard.vue"
export default {
  name: "Discover",
  head() {
      return {
        title: this.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'description',
            name: 'description',
            content: 'Discover New Music based on your favorite artists'
          }
        ]
      }
    },
  components: {
    DiscoverCard
  },
  data() {
    return {
      title: 'Discover - HHS Piano',
      suggestions: null,
      loading: true,
      errored: false,
      input: null,
    }
  },

  methods: {
    callAPI() {
      axios
        .get('https://tastedive.com/api/similar?q=' + this.input + '&type=music&info=1&limit=10&k=420205-DanielBa-UVUVOXKE')
        .then(response => (this.suggestions = response.data))
        .catch(error => {
          console.error(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
      this.input = '';
    }
  }
};
</script>

<style>

.discoverCard {
  border-radius: 1rem;
}

.YouTube-container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.iframe-wrapper {
  position: relative;
  padding-top: 56%
}

iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
