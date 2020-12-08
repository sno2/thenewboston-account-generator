<template>
  <a :href="url" target="_blank" rel="noreferrer noopener" v-text="content" />
</template>

<script>
export default {
  name: "ExternalLink",
  props: {
    content: String,
    url: String,
  },
};
</script>
