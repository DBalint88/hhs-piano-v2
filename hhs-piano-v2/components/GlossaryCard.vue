<template>
  <div>
    <div v-for="term in terms" v-bind:key="term.name" class="glossary-card card">
      <div :ref="term.anchor" :id="term.anchor" class="card-header">
        {{ term.name }}
      </div>
      <div class="card-body text-center">
        <div class="glossary-image-container">

          <!-- Images are all responsive using Bootstrap img-fluid class. On click, execute the toggleBorder function inside the borderClick mixin imported below to add/remove the .bordered class defined below.-->
          <img class="img-fluid" :src="term.pic"  :alt="term.name">
        </div>
        <h4 class="card-text">{{ term.name }}</h4>
        <p>{{ term.definition }}</p>
      </div>
      <div class="card-footer">
      </div>
    </div>
  </div>
</template>


<script>


export default {
  name: "GlossaryCard",
  props: {
    terms : Array,
  },
};
</script>

<style>

.bordered {
  border: 1px solid blue;
}

</style>
