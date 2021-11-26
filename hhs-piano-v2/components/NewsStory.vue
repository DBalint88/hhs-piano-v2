<template>
  <div>
    <div v-for="story in stories" v-bind:key="story" class="news-card row border border-primary">
      <!-- When the screen is medium or wider, these sections are split 8/4, but any smaller and they become 2 rows one on top of the other. -->
      <div class="news-card-image col-lg-4 col-md-12 col-sm-12 bg-secondary">
        <a :href="story.link"><img class="img-fluid" :src="story.pic" alt=""></a>
      </div>
      <div class="news-card-text col-lg-8 col-md-12 col-sm-12 bg-dark text-primary">
        <h3>{{ story.title }}</h3>
        <p>{{ story.date }}</p>
        <p>{{ story.desc }}</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "NewsStory",
  data() {
      return {
        stories: [
          {
            title: 'The Hamden High Virtual Chorus Sings "This Is Me"',
            date: 'March 3, 2021',
            link: 'https://youtu.be/DwSzU8DhETQ',
            pic: '/news/this-is-me.jpg',
            desc: 'Watch our very own chorus members adapting to the pandemic.  We may not be allowed to sing inside the building, but that won\'t stop us from sings.  Have a listen and enjoy This Is Me.'
          },
          {
            title: 'The Hamden High Virtual Chorus Sings "You Will Be Found"',
            date: 'December 17, 2020',
            link: 'https://www.youtube.com/watch?v=Hu0fq5tMOnk',
            pic: '/news/you-will-be-found.jpg',
            desc: 'In these unprecedented times of lock-down and isolation, it is easy to feel like no one knows or cares what you\'re feeling.  You\'re not alone, though, and you will be found.'
          },
          {
            title: 'Opinion: Online Music Classes Sign of a New Era',
            date: 'December 15, 2020',
            link: 'https://www.nhregister.com/opinion/article/Opinion-Online-music-classes-sign-of-a-new-era-15802943.php',
            pic: '/news/hamden-high.jpg',
            desc: 'In the wake of Hamden High School’s sudden transition to full distance learning on Nov. 17, the school’s music department has faced new challenges in keeping students engaged while learning and performing new music.'
          }
        ]
      }
  }
}

</script>
