<template>
  <footer class="footer-area footer-default mt--100">
    <div class="footer-wrapper">
      <v-row align="end" class="row--0">
        <v-col md="6" sm="12" cols="12">
          <div class="footer-left">
            <div class="inner">
              <!-- <span>Pronto</span> -->
              <!-- <h2>
                Let's get <br />
                to work
              </h2> -->
              <a class="rn-button-style--2" :href="`${contactMe[0].url}`" target="_blank">
                Contate-me
              </a>
            </div>
          </div>
        </v-col>
        <!-- End .col -->
        <v-col md="6" sm="12" cols="12">
          <div class="footer-right" data-black-overlay="6">
            <v-row>
              <!-- Start Single Widget -->
              <!-- <v-col lg="6" sm="6" cols="12">
                <div class="footer-widget">
                  <h4>Quick Link</h4>
                  <ul class="ft-link">
                    <li v-for="(nav, i) in navList" :key="i">
                      <router-link :to="nav.to">{{ nav.navItem }}</router-link>
                    </li>
                  </ul>
                </div>
              </v-col> -->
              <!-- End Single Widget  -->
              <!-- Start Single Widget -->
              <v-col lg="6" sm="6" cols="12" class="mt_mobile--30">
                <div class="footer-widget">
                  <h4>Diga, oi</h4>
                  <ul class="ft-link">
                    <li v-for="(mail, i) in mailList" :key="i">
                      <a :href="mail.to">{{ mail.mailItem }}</a>
                    </li>
                  </ul>

                  <div class="social-share-inner">
                    <ul
                      class="social-share social-style--2 d-flex justify-content-start liststyle mt--15"
                    >
                      <li v-for="(social, i) in socialList" :key="i">
                        <a :href="social.url" target="_blank">
                          <i class="fab" :class="social.icon"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </v-col>
              <!-- End Single Widget  -->

              <v-col lg="12">
                <div class="copyright-text">
                  <p></p>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <!-- End .col -->
      </v-row>
    </div>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        socialList: this.$store.state.information.socialList,
        navList: [
          {
            navItem: "Home",
            to: "/#home",
          },
          {
            navItem: "Sobre",
            to: "/#sobre",
          },
          {
            navItem: "Portfólio",
            to: "/#portfolio",
          },
        ],
        mailList: [
          {
            mailItem: "victor.nascimento.ns@gmail.com",
            to: "mailto:victor.nascimento.ns@gmail.com",
          },
        ],
      };
    },
    computed: {
      contactMe () {
        return this.$store.state.information.socialList.filter(
          socialItem => socialItem.name === 'Whatsapp'
        )
      }
    }
  };
</script>
