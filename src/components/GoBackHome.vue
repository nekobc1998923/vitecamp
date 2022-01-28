<template>
  <div class="top-header m-2">
    <el-page-header content="回到首页" @back="goBack" />
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();
const goBack = () => {
  router.push({
    name: 'home',
  });
};
</script>

<style lang="scss">
.top-header {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
}
</style>
