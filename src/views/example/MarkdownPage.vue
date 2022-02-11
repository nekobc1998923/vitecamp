<template>
  <EnProcess v-if="locale === 'en'"></EnProcess>
  <ZhProcess v-else></ZhProcess>
</template>

<script setup lang="ts">
const { locale } = useI18n();
</script>
