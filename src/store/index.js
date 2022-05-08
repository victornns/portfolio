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
                slug: 'loopa', // id
                active: true,
                showHome: true,
                thumb: '/projects/images/loopa/thumb.jpg',
                meta: 'Website',
                banner: '/projects/images/loopa/banner.jpg',
                title: 'Loopa',
                subtitle: 'Informações Técnicas',
                info: '',
                tags: ['Lorem', 'Ipsum', 'Dolor'],
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
                        title: 'Área',
                        content: 'Financeiro'
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
                meta: 'CMS',
                banner: '/projects/images/galeria-rock/banner.jpg',
                title: 'Galeria do Rock',
                subtitle: 'Informações Técnicas',
                info: '',
                tags: ['Lorem', 'Ipsum', 'Dolor'],
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
                        title: 'Área',
                        content: 'Entretenimento'
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
                meta: 'Blog',
                banner: '/projects/images/juliao-coelho/banner.jpg',
                title: 'Julião Coelho',
                subtitle: 'Informações Técnicas',
                info: '',
                tags: ['Lorem', 'Ipsum', 'Dolor'],
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
                        title: 'Área',
                        content: 'Advocacia'
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
                meta: 'Landing Page',
                banner: '/projects/images/covabra-supermercados/banner.jpg',
                title: 'Covabra Supermercados',
                subtitle: 'Informações Técnicas',
                info: '',
                tags: ['Lorem', 'Ipsum', 'Dolor'],
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
                        title: 'Área',
                        content: 'Campanha'
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
                meta: 'Landing Page',
                banner: '/projects/images/unic/banner.jpg',
                title: 'UNIC',
                subtitle: 'Informações Técnicas',
                info: '',
                tags: ['Lorem', 'Ipsum', 'Dolor'],
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
                        title: 'Área',
                        content: 'Corporativo'
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
                meta: 'Landing Page',
                banner: '/projects/images/metlycs/banner.jpg',
                title: 'Metlycs',
                subtitle: 'Informações Técnicas',
                info: '',
                tags: ['Lorem', 'Ipsum', 'Dolor'],
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
                        title: 'Área',
                        content: 'Marketing'
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
                meta: 'Website',
                banner: '/projects/images/constelacao-dvl/banner.jpg',
                title: 'Constelação DVL',
                subtitle: 'Informações Técnicas',
                info: '',
                tags: ['Lorem', 'Ipsum', 'Dolor'],
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
                        title: 'Área',
                        content: 'Psicologia'
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
                meta: 'CMS',
                banner: '/projects/images/franquia-dia/banner.jpg',
                title: 'Franquia DIA',
                subtitle: 'Informações Técnicas',
                info: '',
                tags: ['Lorem', 'Ipsum', 'Dolor'],
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
                        title: 'Área',
                        content: 'Franqueadora'
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