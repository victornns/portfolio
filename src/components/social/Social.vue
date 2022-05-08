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
        socialList: this.$store.state.information.socialList,
      };
    },
  };
</script>
