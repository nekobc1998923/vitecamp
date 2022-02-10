<template>
  <div class="text-center">
    <el-tooltip content="主页">
      <router-link class="icon-btn mx-2" to="/">
        <i-mdi-home-search-outline style="font-size: 1.3em" />
      </router-link>
    </el-tooltip>

    <el-tooltip :content="isDark ? '点击切换为亮色主题' : '点击切换为暗黑主题'">
      <button class="icon-btn mx-2 !outline-none" @click="toggleDark()">
        <i-ph-cloud-moon-bold v-if="isDark" style="font-size: 1.3em" />
        <i-ph-sun-horizon-bold v-else style="font-size: 1.3em" />
      </button>
    </el-tooltip>

    <el-tooltip content="使用本模板的方法">
      <router-link class="icon-btn mx-2" to="/markdown">
        <i-ri-article-line style="font-size: 1.3em" />
      </router-link>
    </el-tooltip>

    <el-tooltip content="模板配置流程">
      <a class="icon-btn mx-2" href="https://juejin.cn/post/7058201396113309703" target="_blank" title="JveJin">
        <i-mdi-content-duplicate style="font-size: 1.3em" />
      </a>
    </el-tooltip>

    <el-tooltip content="GitHub">
      <a class="icon-btn mx-2" href="https://github.com/nekobc1998923/vitecamp" target="_blank" title="GitHub">
        <i-akar-icons-github-fill style="font-size: 1.3em" />
      </a>
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
import { isDark, toggleDark } from '@/utils/dark';
</script>
