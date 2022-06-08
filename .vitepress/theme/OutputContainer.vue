<script setup lang="ts">
import { Repl } from "@vue/repl";
import "@vue/repl/style.css";
</script>

<template>
  <Repl style="height: 500px" @keydown.ctrl.s.prevent @keydown.meta.s.prevent />
</template>
