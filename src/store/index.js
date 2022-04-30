import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        projects: [
            {
                slug: 'constelacao-dvl', // id
                title: 'Constelação DVL',
                subtitle: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
                banner: '/images/projects/constelacao-dvl/banner-1920x600.jpg',
            },
        ]
    },
    actions: {
        getProjectBySlug({ commit, state }, slug) {
            return state.projects.find(project => project.slug === slug)
        },
    },
})

export default store;