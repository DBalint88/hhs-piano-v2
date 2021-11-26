<template>
  <div id="sidebar-main" class="row bg-dark mx-0 py-2" >

    <!--The songlist component.  Here, it listens for emissions from that component to trigger the methods below to update & focus the display and pass the correct links to the dynamic buttons-->
    <SongList @sheetEmit="updateDisplay" @vidEmit="updateVidLink"/>



    <!-- The PDF viewer.  Not sure how to use objects/iframes, embed seemed easy enough.  JS loops through the .song-button's above and listens for a click, then updates the src attribute of the embed with the correct file path. -->

    <main id="song-main" class="col-lg-9 col-md-12 bg-dark">
      <!-- This div serves to focus the page when a user clicks a song link, as well as contain dynamic buttons that link to the appropriate YouTube video and downloadable PDF.-->
      <div ref="dynamic-buttons" class="video-download-bar bg-dark">

        <!-- v-if present so that the buttons cannot be clicked before they've been passed a valid URL -->
        <a v-if="selectedSongSheet.length > 0" :href="selectedSongVideo" target="_blank"><button class="dynamic-button btn btn-primary" type="button" name="button">YouTube</button></a>
        <a v-if="selectedSongSheet.length > 0" :href="selectedSongSheet" target="_blank"><button class="dynamic-button btn btn-secondary" type="button" name="button">Download PDF</button></a>
      </div>
      <!-- v-if present so that it doesn't take up the page without an actual song to display -->
      <embed v-if="selectedSongSheet.length > 0" id="pdf-viewer" type="application/pdf" :src="this.selectedSongSheet">

    </main>
  </div>
</template>


<script>

import SongList from "@/components/SongList.vue";


export default {
  name: "Songs",
  data() {
    return {
      selectedSongSheet: "",
      selectedSongVideo: ""
    }
  },
  methods: {
    updateDisplay(e) {
      this.selectedSongSheet = e;
      // e carries the data in the $emit payload
    },
    updateVidLink(e) {
      this.selectedSongVideo = e;
      // e carries the data in the $emit payload

      let dynamicButtons = this.$refs["dynamic-buttons"];
      dynamicButtons.scrollIntoView({ behavior: 'smooth' });
      // smooth scroll seems broken on mobile, but looks great on desktop.
    }
  },
  components: {
    SongList
  }
};
</script>

<style scope lang="scss">

  /* smooth scroll wasn't working via script above, so I stacked on CSS.  Helps on desktop, still broken on mobile*/
  * {
    scroll-behavior: smooth;
  }


  main {
    max-width: 100vw;
    padding: 1.5rem;
  }

  .video-download-bar {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2rem;
    margin-bottom: .8rem;

  }

  .dynamic-button {
    width: 100%;
    border: 1px solid white;
    padding: .45rem;
  }

  #pdf-viewer {
    background-color: white;
  }

</style>
