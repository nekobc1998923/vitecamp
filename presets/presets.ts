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
import PkgConfig from 'vite-plugin-package-config';
// import styleImport, { ElementPlusResolve } from 'vite-plugin-style-import';

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
    // styleImport({
    //   resolves: [ElementPlusResolve()],
    // }),
    Icons({
      compiler: 'vue3',
      autoInstall: true,
    }),
    Markdown(),
    WindiCSS(),
    PkgConfig(),
  ];
};
