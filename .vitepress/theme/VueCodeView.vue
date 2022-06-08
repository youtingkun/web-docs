<template>
  <EditorContainer :code="code"></EditorContainer>
  <OutputContainer :autoResize="true"></OutputContainer>
</template>

<script>
import EditorContainer from "./EditorContainer.vue";
import OutputContainer from "./OutputContainer.vue";

export default {
  components: {
    EditorContainer,
    OutputContainer,
  },
  data: () => ({ code: `console.log("Hello World")` }),
};
</script>

<style></style>
