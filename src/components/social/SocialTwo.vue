<template>
  <ul
    class="social-share social-style--2 color-black d-flex justify-content-start liststyle"
  >
    <li v-for="(social, i) in socialList" :key="i">
      <a :href="social.url" target="_blank"
        ><i class="fab" :class="social.icon"></i
      ></a>
    </li>
  </ul>
</template>
<script>
  export default {
    data() {
      return {
        socialList: [
          // {
          //   icon: "fa-facebook-f",
          //   url: "https://www.facebook.com/",
          // },
          {
            icon: "fa-github",
            url: "https://github.com/victornns",
          },
          {
            icon: "fa-linkedin-in",
            url: "https://www.linkedin.com/in/victornns/",
          },
          {
            icon: "fa-google",
            url: "mailto:victor.nascimento.ns@gmail.com",
          },
          {
            icon: "fa-whatsapp",
            url: "https://api.whatsapp.com/send?phone=+5511967395380",
          },
          // {
          //   icon: "fa-twitter",
          //   url: "https://twitter.com/",
          // },
          // {
          //   icon: "fa-instagram",
          //   url: "https://instagram.com/",
          // },
        ],
      };
    },
  };
</script>
