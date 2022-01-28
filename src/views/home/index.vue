<template>
  <el-row class="mb-4">
    <el-button @click="routerJump('markdown')">markdown 示例</el-button>
    <el-button @click="routerJump('svg')">Svg 示例</el-button>
    <el-button @click="routerJump('login')">Axios 示例</el-button>
    <el-button @click="routerJump('icon')">ICON 示例</el-button>
    <el-button @click="routerJump('windi')">Windi CSS 示例</el-button>
    <el-button @click="routerJump('404')">404 示例</el-button>
  </el-row>
</template>

<script setup lang="ts">
const router = useRouter();
const routerJump = (name: string) => {
  router.push({
    name,
  });
};
</script>
