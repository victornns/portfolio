import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        information: {
            socialList: [
                {
                    name: "Github",
                    icon: "fa-github",
                    url: "https://github.com/victornns",
                },
                {
                    name: "Linkedin",
                    icon: "fa-linkedin-in",
                    url: "https://www.linkedin.com/in/victornns/",
                },
                {
                    name: "Gmail",
                    icon: "fa-google",
                    url: "mailto:victor.nascimento.ns@gmail.com",
                },
                {
                    name: "Whatsapp",
                    icon: "fa-whatsapp",
                    url: "https://api.whatsapp.com/send?phone=5511967395380",
                },
            ]
        },
        projects: [
            
            {
                slug: 'm2bpro', // id
                active: true,
                showHome: true,
                thumb: '/projects/images/m2bpro/thumb.jpg',
                banner: '/projects/images/m2bpro/banner.jpg',
                title: 'M2B PRO',
                tags: ['Node.js', 'ES6', 'React.js', 'Tailwind', 'AWS', 'Strapi CMS', 'Sass', 'BemCSS', 'GIT'],
                link: 'www.m2bpro.com.br',
                features: [
                    {
                        title: 'Contratante',
                        content: 'LD&B Agency',
                        link: 'www.linkedin.com/company/ldbagency'
                    },
                    {
                        title: 'Tipo',
                        content: 'CMS'
                    },
                    {
                        title: 'Data',
                        content: 'Ago/2021'
                    },
                ],
                images: [
                    { thumb: '/projects/images/m2bpro/page.png' },
                ],
                moreProjects: [
                    { slug: '' }, { slug: '' }
                ]
            },

            {
                slug: 'kt', // id
                active: true,
                showHome: true,
                thumb: '/projects/images/kt/thumb.jpg',
                banner: '/projects/images/kt/banner.jpg',
                title: 'KT Retailing',
                tags: ['Node.js', 'ES6', 'Vue.js', 'Tailwind', 'AWS', 'Strapi CMS', 'Sass', 'BemCSS', 'GIT'],
                link: 'www.kt.arq.br',
                features: [
                    {
                        title: 'Contratante',
                        content: 'LD&B Agency',
                        link: 'www.linkedin.com/company/ldbagency'
                    },
                    {
                        title: 'Tipo',
                        content: 'CMS'
                    },
                    {
                        title: 'Data',
                        content: 'Jun/2021'
                    },
                ],
                images: [
                    { thumb: '/projects/images/kt/page.png' },
                ],
                moreProjects: [
                    { slug: '' }, { slug: '' }
                ]
            },

            {
                slug: 'goodspine', // id
                active: true,
                showHome: true,
                thumb: '/projects/images/goodspine/thumb.jpg',
                banner: '/projects/images/goodspine/banner.jpg',
                title: 'Good Spine',
                tags: ['Node.js', 'ES6', 'Vue.js', 'Tailwind', 'Sass', 'BemCSS', 'GIT'],
                link: 'travesseiro.goodspine.com.br',
                features: [
                    {
                        title: 'Contratante',
                        content: 'Good Spine',
                    },
                    {
                        title: 'Tipo',
                        content: 'Landing Page'
                    },
                    {
                        title: 'Data',
                        content: 'Abr/2021'
                    },
                ],
                images: [
                    { thumb: '/projects/images/goodspine/page.png' },
                ],
                moreProjects: [
                    { slug: '' }, { slug: '' }
                ]
            },
            
            {
                slug: 'loopa', // id
                active: true,
                showHome: true,
                thumb: '/projects/images/loopa/thumb.jpg',
                banner: '/projects/images/loopa/banner.jpg',
                title: 'Loopa',
                tags: ['Wordpress', 'Theme', 'Understrap', 'Javascript', 'Sass', 'BemCSS', 'GIT'],
                link: 'www.loopa.digital',
                features: [
                    {
                        title: 'Contratante',
                        content: 'Cave Digital',
                        link: 'www.cavedigital.com'
                    },
                    {
                        title: 'Tipo',
                        content: 'CMS'
                    },
                    {
                        title: 'Data',
                        content: 'Mar/2019'
                    },
                ],
                images: [
                    { thumb: '/projects/images/loopa/page.png' },
                ],
                moreProjects: [
                    { slug: '' }, { slug: '' }
                ]
            },
            
            {
                slug: 'galeria-rock', // id
                active: true,
                showHome: true,
                thumb: '/projects/images/galeria-rock/thumb.jpg',
                banner: '/projects/images/galeria-rock/banner.jpg',
                title: 'Galeria do Rock',
                tags: ['Wordpress', 'Theme', 'Understrap', 'Javascript', 'Sass', 'BemCSS', 'GIT'],
                link: 'www.galeriadorock.com.br',
                features: [
                    {
                        title: 'Contratante',
                        content: 'Cave Digital',
                        link: 'www.cavedigital.com'
                    },
                    {
                        title: 'Tipo',
                        content: 'CMS'
                    },
                    {
                        title: 'Data',
                        content: 'Fev/2019'
                    },
                ],
                images: [
                    { thumb: '/projects/images/galeria-rock/page-up.png' },
                    { thumb: '/projects/images/galeria-rock/page-down.png' },
                ],
                moreProjects: [
                    { slug: '' }, { slug: '' }
                ]
            },
            
            {
                slug: 'juliao-coelho', // id
                active: true,
                showHome: true,
                thumb: '/projects/images/juliao-coelho/thumb.jpg',
                banner: '/projects/images/juliao-coelho/banner.jpg',
                title: 'Julião Coelho',
                tags: ['Wordpress', 'Theme', 'Understrap', 'Javascript', 'Sass', 'BemCSS', 'GIT'],
                link: 'www.juliaocoelho.com.br',
                features: [
                    {
                        title: 'Contratante',
                        content: 'Cave Digital',
                        link: 'www.cavedigital.com'
                    },
                    {
                        title: 'Tipo',
                        content: 'Blog'
                    },
                    {
                        title: 'Data',
                        content: 'Nov/2018'
                    },
                ],
                images: [
                    { thumb: '/projects/images/juliao-coelho/page.png' },
                ],
                moreProjects: [
                    { slug: '' }, { slug: '' }
                ]
            },
            
            {
                slug: 'covabra-supermercados', // id
                active: true,
                showHome: true,
                thumb: '/projects/images/covabra-supermercados/thumb.jpg',
                banner: '/projects/images/covabra-supermercados/banner.jpg',
                title: 'Covabra Supermercados',
                tags: ['Node.js', 'Javascript', 'BemCSS', 'Gulp', 'Git'],
                link: '',
                features: [
                    {
                        title: 'Contratante',
                        content: 'Cave Digital',
                        link: 'www.cavedigital.com'
                    },
                    {
                        title: 'Tipo',
                        content: 'Landing Page'
                    },
                    {
                        title: 'Data',
                        content: 'Set/2018'
                    },
                ],
                images: [
                    { thumb: '/projects/images/covabra-supermercados/page.png' },
                ],
                moreProjects: [
                    { slug: '' }, { slug: '' }
                ]
            },

            {
                slug: 'unic', // id
                active: true,
                showHome: true,
                thumb: '/projects/images/unic/thumb.jpg',
                banner: '/projects/images/unic/banner.jpg',
                title: 'UNIC',
                tags: ['Node.js', 'Javascript', 'BemCSS', 'Gulp', 'Git'],
                link: 'www.unic-corporativos.com.br',
                features: [
                    {
                        title: 'Contratante',
                        content: 'Cave Digital',
                        link: 'www.cavedigital.com'
                    },
                    {
                        title: 'Tipo',
                        content: 'Landing Page'
                    },
                    {
                        title: 'Data',
                        content: 'Ago/2018'
                    },
                ],
                images: [
                    { thumb: '/projects/images/unic/page.png' },
                ],
                moreProjects: [
                    { slug: '' }, { slug: '' }
                ]
            },
            
            {
                slug: 'metlycs', // id
                active: true,
                showHome: true,
                thumb: '/projects/images/metlycs/thumb.jpg',
                banner: '/projects/images/metlycs/banner.jpg',
                title: 'Metlycs',
                tags: ['Node.js', 'Vue.js', 'Pug.js', 'CSS animations', 'BemCSS', 'Webpack', 'Git'],
                link: 'www.metlycs.com.br',
                features: [
                    {
                        title: 'Contratante',
                        content: 'Agência L4U',
                        link: 'www.l4u.com.br'
                    },
                    {
                        title: 'Tipo',
                        content: 'Landing Page'
                    },
                    {
                        title: 'Data',
                        content: 'Mar/2018'
                    },
                ],
                images: [
                    { thumb: '/projects/images/metlycs/page.png' },
                ],
                moreProjects: [
                    { slug: '' }, { slug: '' }
                ]
            },
            
            {
                slug: 'constelacao-dvl', // id
                active: true,
                showHome: true,
                thumb: '/projects/images/constelacao-dvl/thumb.jpg',
                banner: '/projects/images/constelacao-dvl/banner.jpg',
                title: 'Constelação DVL',
                tags: ['Theme', 'Javascript', 'Node', 'Heroku', 'Sass', 'BemCSS', 'Git'],
                link: 'www.constelacaodvl.com.br',
                features: [
                    {
                        title: 'Contratante',
                        content: 'Agência L4U',
                        link: 'www.l4u.com.br'
                    },
                    {
                        title: 'Tipo',
                        content: 'Website'
                    },
                    {
                        title: 'Data',
                        content: 'Jan/2018'
                    },
                ],
                images: [
                    { thumb: '/projects/images/constelacao-dvl/page.jpg' },
                ],
                moreProjects: [
                    { slug: '' }, { slug: '' }
                ]
            },
            
            {
                slug: 'franquia-dia', // id
                active: true,
                showHome: true,
                thumb: '/projects/images/franquia-dia/thumb.jpg',
                banner: '/projects/images/franquia-dia/banner.jpg',
                title: 'Franquia DIA',
                tags: ['Wordpress', 'Theme', 'Javascript', 'Sass', 'BemCSS', 'GIT'],
                link: 'www.franquiadia.com.br',
                features: [
                    {
                        title: 'Contratante',
                        content: 'Agência L4U',
                        link: 'www.l4u.com.br'
                    },
                    {
                        title: 'Tipo',
                        content: 'CMS'
                    },
                    {
                        title: 'Data',
                        content: 'Out/2017'
                    },
                ],
                images: [
                    { thumb: '/projects/images/franquia-dia/page.png' },
                ],
                moreProjects: [
                    { slug: '' }, { slug: '' }
                ]
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