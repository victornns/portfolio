<template>
  <div class="active-dark">
    <!-- Start Header Area -->
    <Header />
    <!-- End Header Area -->

    <!-- Start Slider Area  -->
    <div class="rn-slider-area poss_relative" id="home">
      <div
        class="slide personal-portfolio-slider slider-style-3 slider-paralax bg_image d-flex align-center"
        :style="{'background-image': 'url(' + require('@/assets/images/wallpaper-universe.jpg') + ')'}"
      >
        <Slider>
          <span slot="designation">WEB DEVELOPER</span>
          <h1 class="heading-title" slot="heading-title">
            Olá, Sou Victor<br>
            <span>JS Developer.</span><br>
            <!--  -->
          </h1>
          <h3 slot="heading-title">Músico por hobby e apaixonado pelo universo</h3>
        </Slider>
      </div>
    </div>
    <!-- End Slider Area -->

    <!-- Start About Area  -->
    <div class="section about-area rn-section-gap bg_color--1" id="sobre">
      <div class="about-wrapper">
        <div class="container">
          <AboutFour>
            <img
              slot="thum-img"
              class="w-100"
              src="../../assets/images/me.jpg"
              alt="About Images"
              style="filter: opacity(0.85);"
            />
          </AboutFour>
        </div>
      </div>
    </div>
    <!-- Start About Area  -->

    <!-- Start Portfolio Area -->
    <div class="rn-portfolio-area rn-section-gap bg_color--5" id="portfolio">
      <div class="portfolio-sacousel-inner pb--30">
        <v-container>
          <v-row>
            <v-col lg="12">
              <div class="section-title text-center mb--20 mb_sm--0">
                <h2 class="heading-title">All Works</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available,
                  <br />
                  but the majority have suffered alteration.
                </p>
              </div>
            </v-col>
          </v-row>
        </v-container>
        <PortfolioFour />
      </div>
    </div>
    <!-- End Portfolio Area -->

    <!-- Start Footer Area  -->
    <Footer />
    <!-- End Footer Area  -->
  </div>
</template>

<script>
  import Header from "../../components/header/Header";
  import Slider from "../../components/slider/Slider";
  import AboutFour from "../../components/about/About";
  import PortfolioFour from "../../components/portfolio/Portfolio";
  import Footer from "../../components/footer/Footer";

  export default {
    components: {
      Header,
      Slider,
      AboutFour,
      PortfolioFour,
      Footer,
    },
    data() {
      return {};
    }
  };
</script>
