<template>
  <header>
    <h1>TNB Account Generator</h1>
    <h2>
      Create accounts and server node options with ease using this
      <ExternalLink
        content="open source"
        url="https://github.com/sno2/thenewboston-account-generator"
      />
      tool!
    </h2>
  </header>
</template>

<script>
import ExternalLink from "./ExternalLink.vue";
export default {
  components: { ExternalLink },
  name: "Footer",
};
</script>

<style lang="scss">
header {
  h1 {
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 0;
  }

  h2 {
    font-weight: 500;
    margin-top: 0.5rem;
    font-size: 1.35rem;
  }
}
</style>
