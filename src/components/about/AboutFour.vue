<template>
  <v-row class="row--35" align="center">
    <v-col lg="5" md="5" cols="12">
      <div class="thumbnail">
        <slot name="thum-img"></slot>
      </div>
    </v-col>
    <v-col lg="7" md="7" cols="12">
      <div class="about-inner inner pt--40 pt_sm--40 pt_md--40">
        <div class="section-title">
          <h2 class="heading-title">Sobre Mim</h2>
          <p class="description">Formado em Análise e Desenvolvimento de Sistemas e motivado por novos conhecimentos. Trabalho com desenvolvimento web há alguns anos e constantemente envolvo-me em novos projetos. Meu sonho de adolescente era ser astrônomo ou hippie, ambos não aconteceram. Especializado em desenvolvimento front-end e músico nas horas livres. Sou de SP, trabalho remoto e sempre que possível estou viajando.</p>
        </div>
        <!-- End .section-title -->
        <div class="tab-wrapper mt--30">
          <v-row>
            <TabTwo />
          </v-row>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
  import TabTwo from "../../components/tabs/TabTwo";
  export default {
    components: { TabTwo },
    data() {
      return {};
    },
  };
</script>
