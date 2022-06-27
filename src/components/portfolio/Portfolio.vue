<template>
  <div>
    <!-- Start Portfolio Activation  -->
    <VueSlickCarousel
      v-bind="settings"
      class="rn-slick-activation portfolio-slick-activation item-fluid slick-dotted rn-slick-dot mt--40 mt_sm--40"
    >
      <!-- Start Single Portfolio (thumbnail: 550x650px)  -->
      <div class="portfolio" v-for="(item, i) in portfolioContent" :key="i">
        <div class="thumbnail-inner">
          <v-img class="thumbnail" :src="item.thumb"></v-img>
          <v-img class="bg-blr-image" :src="item.thumb"></v-img>
        </div>
        <div class="content">
          <div class="inner">
            <div v-for="(item, i) in item.features" :key="i">
              <p v-if="item.title === 'Tipo'">{{ item.content }}</p>
            </div>
            <h4>
              <router-link :to="`/projeto/${item.slug}`">{{ item.title }}</router-link>
            </h4>
            <div class="portfolio-button">
              <router-link class="rn-btn" :to="`/projeto/${item.slug}`"
                >Ver Projeto</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <!-- End Single Portfolio  -->
    </VueSlickCarousel>
  </div>
</template>

<script>
  import VueSlickCarousel from "vue-slick-carousel";
  export default {
    components: {
      VueSlickCarousel,
    },
    data() {
      return {
        // for all works
        settings: {
          dots: true,
          arrows: true,
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 0,
          centerMode: true,

          responsive: [
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 1263,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 770,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1,
              },
            },
            {
              breakpoint: 599,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
              },
            },
          ],
        },
      };
    },
    computed: {
      portfolioContent () {
        return this.$store.state.projects.filter(
          project => project.showHome
        )
      }
    }
  };
</script>
