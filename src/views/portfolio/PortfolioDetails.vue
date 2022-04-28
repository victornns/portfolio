<template>
  <div>
    <!-- Start Header Area -->
    <Header />
    <!-- End Header Area -->

    <!-- Start Breadcrump Area  -->
    <div
      class="rn-page-title-area pt--120 pb--190 bg_image bg_image--4"
      data-black-overlay="5"
    >
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="rn-page-title text-center pt--100">
              <h2 class="heading-title theme-gradient">
                Getting tickets to the big show
              </h2>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Breadcrump Area  -->

    <!-- Start Portfolio Details Area  -->
    <div class="rn-portfolio-details ptb--120 bg_color--1">
      <v-container>
        <v-row>
          <v-col>
            <div class="portfolio-details">
              <div class="inner mb--50">
                <h2>Hello</h2>
                <p class="subtitle">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commod viverra
                  maecenas accumsan lacus vel facilisis. ut labore et dolore
                  magna aliqua.
                </p>
                <div class="portfolio-view-list d-flex flex-wrap">
                  <div class="port-view">
                    <span>Branch</span>
                    <h4>Ability</h4>
                  </div>
                  <div class="port-view">
                    <span>Project Types</span>
                    <h4>Website</h4>
                  </div>
                  <div class="port-view">
                    <span>Program</span>
                    <h4>View Project</h4>
                  </div>
                </div>
              </div>
              <div class="portfolio-thumb-inner">
                <div class="thumb position-relative mb--30" v-if="items.length">
                  <CoolLightBox
                    :items="items"
                    :index="index"
                    @close="index = null"
                  >
                  </CoolLightBox>

                  <div class="thumbnail position-relative">
                    <div v-for="(image, imageIndex) in items" :key="imageIndex">
                      <img
                        class="w-100"
                        :src="image.thumb"
                        alt="About Images"
                      />
                      <a
                        @click="index = imageIndex"
                        class="video-popup position-top-center theme-color play__btn"
                        ><span class="play-icon"></span
                      ></a>
                    </div>
                  </div>
                </div>
                <div 
                  class="thumb gradient mb--50"
                  v-for="(image, imageIndex) in images" 
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
        items: [
          // {
          //   thumb: require("../../assets/images/projects/constelacao-dvl/about-page-desktop-1230px.jpg"),
          //   src: "https://www.youtube.com/watch?v=ZOoVOfieAF8",
          // },
        ],
        images: [
          {
            thumb: require("../../assets/images/projects/constelacao-dvl/about-page-desktop-1230px.jpg")
          },
        ],
        moreProjects: [
          {
            src: require("../../assets/images/projects/constelacao-dvl/thumb-390x532.jpg"),
            title: "Digital Analysis",
            categorie: "Technique",
          },
          {
            src: require("../../assets/images/projects/constelacao-dvl/thumb-390x532.jpg"),
            title: "Plan Management",
            categorie: "Planning",
          },
        ],
        index: null,
      };
    }
  };
</script>
