<template>
  <div id="sidebar-main" class="row mx-0">

    <!-- This portion below is the index on the side. -->
    <aside id="glossary-aside" class="bg-dark col-lg-2 col-md-12">
      <div id="glossary-sticky">
        <h2 id="glossary-h2" class="text-primary text-center mb-2">Glossary</h2>
        <ul class="text-center px-0">
          <li class="glossary-index-item" v-for="term in terms" v-bind:key="term" @click="glossaryScroll(term.anchor)">{{ term.name }}</li>
        </ul>
      </div>
    </aside>

    <!-- This portion below is for the actual flash cards.  I thought of making the index and the flash cards into separate components, but realized I would just be copying the data to both components - at that point I might as well just build both on the same page so they can reference the same data.-->
    <main id="glossary-main" class="bg-dark col-lg-10 col-md-12">

      <!--For assignment08, this is imported from a component that iterates through the card markup that was here before.  The "terms" array is passed from this parent to the child component, then iterated upon. -->
      <GlossaryCard :terms="this.terms" />

    </main>
  </div>
</template>

<script>
import GlossaryCard from "@/components/GlossaryCard.vue";


export default {
  name: "Glossary",
  components: {
    GlossaryCard
  },
  methods: {

    glossaryScroll(refname) {

      document.getElementById(refname).scrollIntoView();

    },
  },
  data() {
      return {
        terms: [
          {
            name: 'Eighth Note',
            pic: '/glossary/eighth-note-single.png',
            anchor: 'eighth-note',
            definition: 'An eighth note (or 8th note) gets 1/2 of one beat.',
          },
          {
            name: 'Quarter Note',
            pic: '/glossary/quarter-note.png',
            anchor: 'quarter-note',
            definition: 'A quarter note gets 1 beat.',
          },
          {
            name: 'Half Note',
            pic: '/glossary/half-note.png',
            anchor: 'half-note',
            definition: 'A half note gets 2 beats.',
          },
          {
            name: 'Whole Note',
            pic: '/glossary/whole-note.png',
            anchor: 'whole-note',
            definition: 'A whole note gets 4 beats.',
          },
          {
            name: 'Eighth Rest',
            pic: '/glossary/eighth-rest.png',
            anchor: 'eighth-rest',
            definition: 'An eighth rest (or 8th rest) gets 1/2 of one beat.',
          },
          {
            name: 'Quarter Rest',
            pic: '/glossary/quarter-rest.png',
            anchor: 'quarter-rest',
            definition: 'A quarter rest gets 1 beat.',
          },
          {
            name: 'Half Rest',
            pic: '/glossary/half-rest.png',
            anchor: 'half-rest',
            definition: 'A half rest gets 2 beats.  It looks like a "top-half" that Abe Lincoln might\'ve worn!',
          },
          {
            name: 'Whole Rest',
            pic: '/glossary/whole-rest.png',
            anchor: 'whole-rest',
            definition: 'A whole rest gets 4 beats.  It looks like a "whole" in the ground!',
          },
        ]
      }
  }
}
</script>

<style scope>

/* ...but I keep trying. */
* {
  scroll-behavior: smooth;
}

#glossary-sticky {
  height: auto;
  position: sticky;
  top: 2rem;
}
.glossary-index-item {
  color: white;
  list-style: none;
  cursor: pointer;
  margin-top: 1rem;
}
</style>
