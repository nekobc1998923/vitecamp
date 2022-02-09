<template>
  <el-row>
    <el-col>
      <el-result icon="warning" title="页面无权限" sub-title="请联系管理员申请权限">
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
