<template>
  <div class="DiscoverCard">
    <b-row v-for="result in suggestions.Similar.Results" v-bind:key="result.Name" class="discoverCard my-5 border border-primary" b-row >

      <b-col md="12" lg="4" class="YouTube-container">
        <div class="iframe-wrapper" align-v="center">
          <iframe class="embed-responsive-item" :src="result.yUrl" allowfullscreen></iframe>
        </div>
      </b-col>

      <b-col md="12" lg="8" class="discover-descr">
        <h2>{{result.Name}}</h2>
        <p>{{result.wTeaser}}</p>
        <a :href="result.wUrl">Read more...</a>
      </b-col>

    </b-row>
  </div>
</template>


<script>
export default {
  name: "Footer",
  props: {
    suggestions: Array,
  },
};
</script>
