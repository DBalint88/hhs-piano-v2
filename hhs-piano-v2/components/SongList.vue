<template>
  <div class="accordion col-lg-3 col-md-12 px-0 my-4" role="tablist" id="accordionExample">
    <b-card v-for="level in levels" v-bind:key="level" no-body class="">
      <b-card-header header-tag="header" class="p-0 col text-center bg-secondary" role="tab">
        <b-button v-b-toggle="'accordion-'+level.index" variant="primary" class="btn-block">{{ level.skillLevel }}</b-button>
      </b-card-header>
      <b-collapse :id="'accordion-'+level.index" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <ol>
            <li v-for="song in level.songs" v-bind:key="song" class="song-button" :data-pdf="'./sheet-music/'+song.pdf+'.pdf'" :data-video="song.video" @click="updateDisplay">{{ song.title }}</li>
          </ol>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>


<script>
export default {
  methods: {
    updateDisplay(e) {
      this.songSheet = e.currentTarget.getAttribute('data-pdf');
      this.songVideo = e.currentTarget.getAttribute('data-video');
      this.$emit("sheetEmit", this.songSheet);
      this.$emit("vidEmit", this.songVideo);
      },
  },
  name: "SongList",
  data() {
      return {
        songSheet: '',
        songVideo: '',
        levels: [
          {
            skillLevel: 'Level 1',
            index: '1',
            songs: [
              {
                title: 'Hot Cross Buns',
                pdf: '01-hot-cross-buns',
                video: 'https://youtu.be/PaaAvBGLem0'
              },
              {
                title: 'Mary Had A Little Lamb',
                pdf: '01-mary-had-a-little-lamb',
                video: 'https://youtu.be/MX2irXhbnCs'
              },
              {
                title: 'Au Clair de la Lune',
                pdf: '01-au-clair-de-la-lune',
                video: 'https://youtu.be/KF8lZntKpSs'
              },
              {
                title: 'Jingle Bells',
                pdf: '01-jingle-bells',
                video: 'https://youtu.be/-FtdwRM0zZY'
              },
              {
                title: 'Rain, Rain, Go Away',
                pdf: '01-rain-rain',
                video: 'https://youtu.be/SOgK23KkYJs'
              },
              {
                title: 'A Tisket, A Tasket',
                pdf: '01-tisket-tasket',
                video: 'https://youtu.be/fEXYaA0sW5M'
              },
              {
                title: 'Ode to Joy',
                pdf: '01-ode-to-joy',
                video: 'https://youtu.be/zA5IbQj2Upk'
              },
              {
                title: 'Sweetly Sings the Donkey',
                pdf: '01-sweetly-sings-the-donkey',
                video: 'https://youtu.be/0lwKqvAa0lw'
              },
              {
                title: 'Go Tell Aunt Rhodie',
                pdf: '01-go-tell-aunt-rhodie',
                video: 'https://youtu.be/5E65FgTD924'
              },
              {
                title: 'Banks of the Ohio',
                pdf: '01-banks-of-the-ohio',
                video: 'https://youtu.be/534fljXmmF8'
              }
            ],
          },
          {
            skillLevel: 'Level 2',
            index: '2',
            songs: [
              {
                title: 'Pop! Goes the Weasel',
                pdf: '02-pop-goes-the-weasel',
                video: 'https://youtu.be/tsCWF9hl5IY'
              },
              {
                title: 'Row, Row, Row Your Boat',
                pdf: '02-row-row-row-your-boat',
                video: 'https://youtu.be/6DjXSeo8KFM'
              },
              {
                title: 'Camptown Races',
                pdf: '02-camptown-races',
                video: 'https://youtu.be/33iakHfcjkM'
              },
              {
                title: 'Swan Lake',
                pdf: '02-swan-lake',
                video: 'https://youtu.be/kdDXiXHXpaE'
              },
              {
                title: 'Auld Lang Syne',
                pdf: '02-auld-lang-syne',
                video: 'https://youtu.be/FIF786MMbdY'
              },
              {
                title: 'Bridal March',
                pdf: '02-bridal-march',
                video: 'https://youtu.be/oy9V4N8y-5I'
              },
              {
                title: 'London Bridge',
                pdf: '02-london-bridge',
                video: 'https://youtu.be/DtGXvaLviHQ'
              },
              {
                title: 'Five Fat Turkeys',
                pdf: '02-five-fat-turkeys',
                video: 'https://youtu.be/ZQgnaRYPAE4'
              },
              {
                title: 'Yankee Doodle',
                pdf: '02-yankee-doodle',
                video: 'https://youtu.be/24K79vIJKi4'
              },
              {
                title: 'Old MacDonald',
                pdf: '02-old-macdonald',
                video: 'https://youtu.be/fYBn15gv7Pw'
              },
              {
                title: 'Twinkle, Twinkle Little Star',
                pdf: '02-twinkle-twinkle',
                video: 'https://youtu.be/qw1PVLdTWiw'
              }
            ]
          },
          {
            skillLevel: 'Level 3',
            index: '3',
            songs: [
              {
                title: 'The Baby Bumble Bee',
                pdf: '03-baby-bumble-bee',
                video: 'https://youtu.be/6wmjVfKydZ8'
              },
              {
                title: 'Happy Birthday',
                pdf: '03-happy-birthday',
                video: 'https://youtu.be/fsCRSQgMpc8'
              },
              {
                title: 'B-I-N-G-O',
                pdf: '03-bingo',
                video: 'https://youtu.be/sT41Nk3u_tg'
              },
              {
                title: 'Ode to Joy (LH only!)',
                pdf: '03-ode-to-joy-lefty',
                video: 'https://youtu.be/x4BN8SNNrSQ'
              },
              {
                title: 'Alouette',
                pdf: '03-alouette',
                video: 'https://youtu.be/ptgYfJ0fIUc'
              },
              {
                title: 'Three Jolly Fishermen',
                pdf: '03-jolly-fisherman',
                video: 'https://youtu.be/nUTtjy7KUmk'
              },
              {
                title: 'Row, Row, Row Your Boat',
                pdf: '03-row-row-row-your-boat',
                video: 'https://youtu.be/cGAHGFYIw_s'
              },
              {
                title: 'Turkey in the Straw',
                pdf: '03-turkey-in-the-straw',
                video: 'https://youtu.be/38Iz1PTYhVQ'
              },
              {
                title: 'Banks of the Ohio',
                pdf: '03-banks-of-the-ohio',
                video: 'https://youtu.be/T6-IGUtqJhE'
              },
              {
                title: 'Ode to Joy',
                pdf: '03-ode-to-joy',
                video: 'https://youtu.be/7VY_2wNueys'
              },
              {
                title: 'Jingle Bells',
                pdf: '03-jingle-bells',
                video: 'https://youtu.be/Sni-g_OcXwU'
              }
            ]
          },
          {
            skillLevel: 'Level 4',
            index: '4',
            songs: [
              {
                title: 'Beautiful Dreamer',
                pdf: '04-beautiful-dreamer',
                video: 'https://youtu.be/fYBn15gv7Pw'
              },
              {
                title: 'Brahms\' Lullaby',
                pdf: '04-brahms-lullaby',
                video: 'https://youtu.be/fYBn15gv7Pw'
              },
              {
                title: 'Clementine',
                pdf: '04-clementine',
                video: 'https://youtu.be/fYBn15gv7Pw'
              },
              {
                title: 'Bullock Cart',
                pdf: '04-bullock-cart',
                video: 'https://youtu.be/fYBn15gv7Pw'
              },
              {
                title: 'The Wheels on the Bus',
                pdf: '04-wheels-on-the-bus',
                video: 'https://youtu.be/fYBn15gv7Pw'
              },
              {
                title: 'Fur Elise',
                pdf: '04-fur-elise',
                video: 'https://youtu.be/fYBn15gv7Pw'
              },
              {
                title: 'Frere Jacques',
                pdf: '04-frere-jacques',
                video: 'https://youtu.be/fYBn15gv7Pw'
              },
              {
                title: 'Bahay Kubo',
                pdf: '04-bahay-kubo',
                video: 'https://youtu.be/fYBn15gv7Pw'
              },
              {
                title: 'I Heard A Robin Singing',
                pdf: '04-i-heard-a-robin-singing',
                video: 'https://youtu.be/fYBn15gv7Pw'
              },
              {
                title: 'Largo - from "New World',
                pdf: '04-largo',
                video: 'https://youtu.be/fYBn15gv7Pw'
              },
              {
                title: 'Skip to my Lou',
                pdf: '04-skip-to-my-lou',
                video: 'https://youtu.be/fYBn15gv7Pw'
              },
              {
                title: 'Sonatina Piccolina',
                pdf: '04-sonatina-piccolina',
                video: 'https://youtu.be/fYBn15gv7Pw'
              }
            ]
          },
        ],
      }
    }
};
</script>

<style>
.btn-block {
  width: 100%
}

</style>
