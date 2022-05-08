<template>
  <v-col lg="12">
    <div class="tab-default">
      <v-tabs v-model="tab" flat hide-slider>
        <v-tab v-for="item in items" :key="item.id" :ripple="false">
          {{ item.name }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item
          transition="fade-transition"
          v-for="item in tabContent"
          :key="item.id"
        >
          <v-card flat>
            <v-card-text>
              <div class="single-tab-content">
                <ul>
                  <li v-for="(item, i) in item.content" :key="i">
                    <div v-if="item.link">
                      {{ item.title }}
                      <a :href="`//${item.link}`" target="_blank" style="display: inline-block;">
                        <span> - {{ item.name }}</span>
                      </a>
                    </div>
                    <div v-else>
                      {{ item.title }}
                      <span> - {{ item.name }}</span>
                    </div>
                    {{ item.desc }}
                  </li>
                </ul>
              </div>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </v-col>
</template>
<script>
  export default {
    data() {
      return {
        tab: null,
        items: [
          {
            id: 1,
            name: "Skills",
          },
          {
            id: 2,
            name: "Experiências",
          },
          {
            id: 3,
            name: "Educação",
          },
        ],

        tabContent: [
          {
            id: 1,
            content: [
              {
                title: "User Interface Development",
                name: "✓",
              },
              {
                title: "Reactive Programming",
                name: "✓",
              },
              {
                title: "CMS Development",
                name: "✓",
              },
              {
                title: "Web Performance Optimization",
                name: "✓",
              },
              {
                title: "Cross-browser/Device Testing",
                name: "✓",
              },
              {
                title: "Web Accessibility",
                name: "✓",
              },
            ],
          },
          {
            id: 2,
            content: [
              {
                title: "Front-end Developer",
                name: "One Digital (Growth Agency)",
                link: "www.one.com.br",
                desc: "2019 - Atual",
              },
              {
                title: "Front-end Developer",
                name: "Cave Digital (Agência de Estratégia e Comunicação Digital)",
                link: "www.cavedigital.com.br",
                desc: "2018 - 2019",
              },
              {
                title: "Front-end Developer",
                name: "Profite (Implantação de E-Commerce, SEO e Evolução)",
                link: "www.profite.com.br",
                desc: "2018 - 2018",
              },
              {
                title: "Front-end Developer",
                name: "L4U (Aceleradora de Marketing e Negócios Digitais)",
                link: "www.l4u.com.br",
                desc: "2016 - 2017",
              },
            ],
          },
          {
            id: 3,
            content: [
              {
                title: "Análise e Desenvolvimento de Sistemas",
                name: "Faculdade Impacta de Tecnologia",
                desc: "2019 - 2020",
              },
              {
                title: "Ciência da Computação",
                name: "Universidade São Judas Tadeu",
                desc: "2015 - 2018 (Bacharelado trancado em 2017)",
              },
            ],
          },
        ],
      };
    },
  };
</script>
