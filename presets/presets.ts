import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import svgLoader from 'vite-svg-loader';
import legacy from '@vitejs/plugin-legacy';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import { ElementPlusResolver, VueUseComponentsResolver } from 'unplugin-vue-components/resolvers';
import WindiCSS from 'vite-plugin-windicss';
import Markdown from 'vite-plugin-md';
import Prism from 'markdown-it-prism';
import PkgConfig from 'vite-plugin-package-config';
import checker from 'vite-plugin-checker';
import ViteFonts from 'vite-plugin-fonts';
// 重新启用插件 vite-plugin-style-import 的原因见 Issue：https://github.com/antfu/unplugin-vue-components/issues/301
// 对于 ElMessage 组件的第一次扫描失效，只有手动进入了页面才会加载
// TODO: 何时问题解决，何时移除插件
import styleImport, { ElementPlusResolve } from 'vite-plugin-style-import';

const defaultClasses = 'prose prose-sm m-auto text-left';

export default () => {
  return [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    vueJsx(),
    svgLoader(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    AutoImport({
      dts: './src/auto-imports.d.ts',
      imports: ['vue', 'pinia', 'vue-router', '@vueuse/core'],
      // Generate corresponding .eslintrc-auto-import.json file.
      // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dts: './src/components.d.ts',
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      // imports 指定组件所在位置，默认为 src/components; 有需要也可以加上 view 目录
      dirs: ['src/components/'],
      resolvers: [ElementPlusResolver(), IconsResolver(), VueUseComponentsResolver()],
    }),
    styleImport({
      resolves: [ElementPlusResolve()],
    }),
    Icons({
      compiler: 'vue3',
      autoInstall: true,
    }),
    ViteFonts({
      google: {
        families: ['Open Sans', 'Montserrat', 'Fira Sans'],
      },
    }),
    WindiCSS({
      safelist: defaultClasses,
    }),
    Markdown({
      wrapperClasses: defaultClasses,
      headEnabled: false,
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Prism);
      },
    }),
    PkgConfig(),
    checker({
      typescript: true,
      vueTsc: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx,vue}"',
        dev: {
          logLevel: ['error'],
        },
      },
    }),
  ];
};
