<template>
  <div>
    <!-- Start Header Area -->
    <Header />
    <!-- End Header Area -->

    <!-- Start Breadcrump Area (Banner image: 1920x600px)  -->
    <div
      class="rn-page-title-area pt--120 pb--190 bg_image"
      data-black-overlay="5"
      :style="{ 'background-image': `url( ${project.banner} )` }"
    >
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="rn-page-title text-center pt--100">
              <h2 class="heading-title theme-gradient">
                {{ project.title }}
              </h2>
              <p></p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Breadcrump Area  -->

    <!-- Start Portfolio Details Area  -->
    <div class="rn-portfolio-details ptb--60 bg_color--1">
      <v-container>
        <v-row>
          <v-col>
            <div class="portfolio-details">
              <div class="inner mb--50">
                <p class="subtitle" v-if="project.subtitle">
                  {{ project.subtitle }}
                </p>
                <p v-if="project.info">
                  {{ project.info }}
                </p>
                <div class="portfolio-view-list d-flex flex-wrap">
                  <div 
                    class="port-view"
                    v-for="(feature, featureIndex) in project.features" :key="featureIndex"
                  >
                    <div v-if="feature.link">
                      <span>{{ feature.title }}</span>
                      <a :href="`//${feature.link}`" target="_blank" class="link">
                        <h4>{{ feature.content }}</h4>
                      </a>
                    </div>
                    <div v-else>
                      <span>{{ feature.title }}</span>
                      <h4>{{ feature.content }}</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="portfolio-thumb-inner">
                <div 
                  class="thumb gradient mb--50"
                  v-for="(image, imageIndex) in project.images" 
                  :key="imageIndex">
                    <img
                      :src="image.thumb"
                      alt="Imagem Ilustrativa"
                    />
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Portfolio Details Area  -->

    <!-- Start Related Work  -->
    <div class="portfolio-related-work pb--120 bg_color--1">
      <v-container>
        <v-row>
          <v-col>
            <div class="section-title text-center">
              <span class="theme-color font--18 fontWeight600"
                >Related Work</span
              >
              <h2>Our More Projects</h2>
            </div>
          </v-col>
        </v-row>
        <v-row class="mt--10">
          <!-- Start Single Work  -->
          <v-col
            lg="6"
            md="6"
            cols="12"
            v-for="(project, i) in moreProjects"
            :key="i"
          >
            <div class="related-work text-center mt--30">
              <div class="thumb">
                <a href="/portfolio-details">
                  <img :src="project.src" alt="Portfolio-images" />
                </a>
              </div>
              <div class="inner">
                <h4>
                  <a href="/portfolio-details">{{ project.title }}</a>
                </h4>
                <span class="category">{{ project.categorie }}</span>
              </div>
            </div>
          </v-col>
          <!-- End Single Work  -->
        </v-row>
      </v-container>
    </div>
    <!-- End Related Work  -->

    <!-- Start Footer Area  -->
    <Footer />
    <!-- End Footer Area  -->
  </div>
</template>

<script>
  import Header from "../../components/header/Header";
  import Footer from "../../components/footer/Footer";

  export default {
    components: {
      Header,
      Footer,
    },
    data() {
      return {
        moreProjects: [
          // {
          //   src: require("../../assets/projects/images/constelacao-dvl/thumb-390x532.jpg"),
          //   title: "Digital Analysis",
          //   categorie: "Technique",
          // },
          // {
          //   src: require("../../assets/projects/images/constelacao-dvl/thumb-390x532.jpg"),
          //   title: "Plan Management",
          //   categorie: "Planning",
          // },
        ],
        index: null,
      };
    },
    computed: {
      project() {
        return this.$route.params.project
      }
    }
  };
</script>
