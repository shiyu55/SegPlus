import { defineConfig } from 'umi';

export default defineConfig({

  layout: {
    layout:'top',
    title:'FCCplus',
    logo:'./logo.png',
    navTheme:'dark',
  },
  routes: [
    //1234
    { name: '综合部',path: '/', component: '@/pages/index' },
    { name: '项目行政部',path: '/xxadmi', component: '@/pages/xxadmi' },
    { name: '市场开发部',path: '/1', component: '@/pages/sckf' },
    { name: '安全部',path: '/table', component: '@/table/index1' },
 
 
  ],
});
