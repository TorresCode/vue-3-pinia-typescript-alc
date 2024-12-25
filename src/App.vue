<script setup lang="ts">
import { RouterView } from 'vue-router';

</script>

<template>
  <aside>
    <ul>
      <a href="/admin">Home</a>
      <a href="/admin/contate">Contate</a>
      <a href="/">Logout</a>
    </ul>
  </aside>
  <RouterView />
</template>

<style scoped>
</style>
