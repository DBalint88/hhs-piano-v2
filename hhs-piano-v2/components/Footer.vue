<template>
  <!-- Not sure how meticulous comments need to be.  This is just the footer.--> 
  <div class="bg-dark p-2">
    <h1 class="display-4 text-center text-primary my-1">HHS Piano</h1>
    <p class="lead text-primary text-center">Created by Daniel Balint for Hamden Public Schools</p>
    <p class="lead text-primary text-center">All sheet music used with permission from Gil DeBenedetti at <a href="https://gmajormusictheory.org/">G Major Music Theory</a>.  Check out his site for much more!</p>
    <p class="lead text-primary text-center">Version 3.0 with Vue & dynamic links</p>
    <p class="lead text-primary text-center">Last updated 12 Nov 2021</p>
  </div>
</template>


<script>
export default {
  name: "Footer",
  props: {
    msg: String,
  },
};
</script>
