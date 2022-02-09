<template>
  <el-row>
    <el-col>
      <el-result icon="warning" title="页面未找到" sub-title="请检查路径后重试或返回首页">
        <template #extra>
          <el-button type="primary" @click="goBack">Back</el-button>
        </template>
      </el-result>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
const router = useRouter();
const goBack = () => {
  router.push({
    name: 'home',
  });
};
</script>
