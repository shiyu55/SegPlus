import { defineConfig } from 'umi';

export default defineConfig({

  layout: {
    layout:'top',
    title:'FCCplus',
    logo:'./logo.png',
    navTheme:'dark',
  },
  routes: [
    
    {
      path: '/dashboard',
      name: '驾驶舱',
      icon: 'dashboard',
      routes: [
       
        {         
          name: '分析页',
          path: '/dashboard/analysis',
          component: './Dashboard/Analysis',
        },
        {         
          name: '市场开发',
          path: '/dashboard/sckf',
          component: './Dashboard/Sckf',
        },
        {         
          name: '项目行政部',
          path: '/dashboard/admin',
          component: './Dashboard/Admin',
        },
        {         
          name: '施工部',
          path: '/dashboard/construction',
          component: './Dashboard/Construction',
        },
        {         
          name: '质量部',
          path: '/dashboard/qaqc',
          component: './Dashboard/QAQC',
        },
        
      ],
    },
    {         
      name: 'Users',
      path: '/users',
      component: './users/user',
    },
  ],
  "proxy": {
    "/api": {
      "target": "http://jsonplaceholder.typicode.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  },
});
