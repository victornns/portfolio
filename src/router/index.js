import Vue from "vue";
import VueRouter from "vue-router";
import goTo from "vuetify/es5/services/goto";
import Missing from "../views/404.vue";
import Home from "../views/home/Home.vue";
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      title: "Portfólio",
    },
  },
  {
    path: "/projeto/:slug",
    name: "PortfolioDetails",
    meta: {
      title: "Portfólio - Detalhes",
    },
    props: true,
    component: () => import("../views/portfolio/PortfolioDetails.vue"),
    beforeEnter: (to, from, next) => {
      let slug = to.params.slug

      store.dispatch('getProjectBySlug', slug).then(response => {
        if (!response) {
          next({ name: "Missing" })
        }

        to.params.project = response;

        next();
      })
    }
  },
  {
    path: "/404",
    alias: "*",
    name: "Missing",
    component: Missing,
    meta: {
      title: "Página não encontrada",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0;

    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }

    return goTo(scrollTo);
  },
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
