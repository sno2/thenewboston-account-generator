<template>
  <footer>
    Made with ❤ by
    <ExternalLink content="Carter Snook" url="https://github.com/sno2" />
    using
    <ExternalLink
      content="tweetnacl"
      url="https://www.npmjs.com/package/tweetnacl"
    />,
    <ExternalLink
      content="buffer"
      url="https://www.npmjs.com/package/buffer"
    />, <ExternalLink content="vue cli" url="https://cli.vuejs.org/" />, and
    <ExternalLink content="vue 3" url="https://github.com/vuejs/vue-next" />!
  </footer>
</template>

<script>
import ExternalLink from "./ExternalLink.vue";

export default {
  name: "Footer",
  components: {
    ExternalLink,
  },
};
</script>

<style>
footer {
  margin-top: 2rem;
}
</style>
