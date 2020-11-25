
const data1 = [
   { name: '总量', type: '钢筋', count: 30 },
   { name: '总量', type: '模板', count: 28.8},
   { name: '总量', type: '型材', count: 39.3 },
   { name: '总量', type: '油漆', count: 81.4 },
   { name: '总量', type: '保温', count: 47  },
   { name: '总量', type: '焊材', count: 65.3 },
   { name: '总量', type: '脚手架', count: 54 },
   { name: '库存量', type: '钢筋', count: 12.4 },
   { name: '库存量', type: '模板', count: 23.2 },
   { name: '库存量', type: '型材', count: 34.5 },
   { name: '库存量', type: '油漆', count: 69.7 },
   { name: '库存量', type: '保温', count: 32.6 },
   { name: '库存量', type: '焊材', count: 35.5 },
   { name: '库存量', type: '脚手架',count: 37.4 },


      
 ];

const data2 = [
   { type: '已完成', count: 1023, },
   { type: '剩余量', count: 7892, },
  ];

const data3 = [
   { month: "Jan", city: "计划进度", temperature: 4.4},
   { month: "Jan", city: "实际进度", temperature: 2.2 },
   { month: "Feb", city: "计划进度", temperature: 11.1 },
   { month: "Feb", city: "实际进度", temperature: 7.6 },
   { month: "Mar", city: "计划进度", temperature: 18.8 },
   { month: "Mar", city: "实际进度", temperature:14.4 },
   { month: "Apr", city: "计划进度", temperature: 27 },
   { month: "Apr", city:"实际进度", temperature: 24 },
   { month: "May", city: "计划进度", temperature: 36 },
   { month: "May", city: "实际进度", temperature: 36 },
   { month: "Jun", city: "计划进度", temperature: 45 },
   { month: "Jun", city: "实际进度", temperature: 50 },
   { month: "Jul", city: "计划进度", temperature: 54 },
   { month: "Jul", city: "实际进度", temperature: 63 },
   { month: "Aug", city: "计划进度", temperature: 63 },
   { month: "Aug", city: "实际进度", temperature: 74 },
   { month: "Sep", city: "计划进度", temperature: 72 },
   { month: "Sep", city: "实际进度", temperature: 83 },
   { month: "Oct", city: "计划进度", temperature: 81 },
   { month: "Oct", city: "实际进度", temperature: 89 },
   { month: "Nov", city: "计划进度", temperature: 90 },
   { month: "Nov", city: "实际进度", temperature: 95 },
   { month: "Dec", city: "计划进度", temperature: 100 },
   { month: "Dec", city: "实际进度", temperature: 100 }
];

const data4 = [
   { action: '总包数', pv: 50000, quarter: '01区' },
   { action: '焊接完成', pv: 35000, quarter: '01区' },
   { action: '检测完成', pv: 25000, quarter: '01区' },
   { action: '已试压', pv: 11500, quarter: '01区' },
   { action: '总包数', pv: 80000, quarter: '02区' },
   { action: '焊接完成', pv: 63000, quarter: '02区' },
   { action: '检测完成', pv: 47000, quarter: '02区' },
   { action: '已试压', pv: 17500, quarter: '02区' },
 ];

const data5a = [
   { day: '一', 产量: 38 },
   { day: '二', 产量: 52 },
   { day: '三', 产量: 61 },
   { day: '四', 产量: 45 },
   { day: '五', 产量: 48 },
   { day: '六', 产量: 38 },
   { day: '七', 产量: 38 },
];
const data5b = [
   { day: '一', 产量: 38 },
   { day: '二', 产量: 46 },
   { day: '三', 产量: 56 },
   { day: '四', 产量: 60 },
   { day: '五', 产量: 54 },
   { day: '六', 产量: 55 },
   { day: '七', 产量: 59 },
];
const data5c = [
   { day: '一', 产量: 56 },
   { day: '二', 产量: 52 },
   { day: '三', 产量: 57 },
   { day: '四', 产量: 67 },
   { day: '五', 产量: 56 },
   { day: '六', 产量: 67 },
   { day: '七', 产量: 66 },
];
const data6 = [
   { 区域: '01区', 类型: '吊车', 数量: 18.9 },
   { 区域: '01区', 类型: '板车.', 数量: 39.3 },
   { 区域: '01区', 类型: '叉车.', 数量: 81.4 },
   { 区域: '01区', 类型: '升降车', 数量: 47 },
   { 区域: '01区', 类型: '挖掘机.', 数量: 20.3 },
   { 区域: '01区', 类型: '铲车.', 数量: 24 },
   { 区域: '01区', 类型: '自卸车.', 数量: 35.6 },
   { 区域: '02区', 类型: '吊车', 数量: 11.9 },
   { 区域: '02区', 类型: '板车.', 数量: 29.3 },
   { 区域: '02区', 类型: '叉车.', 数量: 51.4 },
   { 区域: '02区', 类型: '升降车', 数量: 27 },
   { 区域: '02区', 类型: '挖掘机.', 数量: 10.3 },
   { 区域: '02区', 类型: '铲车.', 数量: 14 },
   { 区域: '02区', 类型: '自卸车.', 数量: 15.6 },
];
const data7 = [
   { action: '预制完成', pv: 50000,  },
   { action: '检测完成', pv: 35000,  },
   { action: '已释放', pv: 15000,  },
  
 ];
const data8a = [
   { day: '一月', 产量: 38 },
   { day: '二月', 产量: 42 },
   { day: '三月', 产量: 48 },
   { day: '四月', 产量: 50 },
   { day: '五月', 产量: 55 },
   { day: '六月', 产量: 59 },
   { day: '七月', 产量: 64 },
   { day: '八月', 产量: 63 },
   { day: '九月', 产量: 60 },
   { day: '十月', 产量: 52 },
   { day: '十一月', 产量: 42 },
   { day: '十二月', 产量: 30 },
];
const data8b = [
   { 区域: '主管', 类型: '施工部', 数量: 12 },
   { 区域: '主管', 类型: '质量部.', 数量: 3 },
   { 区域: '主管', 类型: '安全部.', 数量: 2 },
   { 区域: '主管', 类型: '控制部', 数量: 2 },
   { 区域: '主管', 类型: '其他.', 数量: 5 },
   
   { 区域: '工程师', 类型: '施工部', 数量: 63 },
   { 区域: '工程师', 类型: '质量部.', 数量: 23 },
   { 区域: '工程师', 类型: '安全部.', 数量: 12 },
   { 区域: '工程师', 类型: '控制部', 数量: 10 },
   { 区域: '工程师', 类型: '其他.', 数量: 23 },
  
   { 区域: '休假', 类型: '施工部', 数量: 25 },
   { 区域: '休假', 类型: '质量部.', 数量: 9 },
   { 区域: '休假', 类型: '安全部.', 数量: 6 },
   { 区域: '休假', 类型: '控制部', 数量: 3 },
   { 区域: '休假', 类型: '其他.', 数量: 16 },
  
];
const data9 = [
   {     label: '管道',     type: '已收到',     value: 2800,   },
   {     label: '管道',     type: '已细化',     value: 2260,   },
   {     label: '管道',     type: '已发布',     value: 1260,   },
   {     label: '土建',     type: '已收到',     value: 800,   },
   {     label: '土建',     type: '已细化',     value: 260,   },
   {     label: '土建',     type: '已发布',     value: 160,   },
   {     label: '钢结构',     type: '已收到',     value: 1800,   },
   {     label: '钢结构',     type: '已细化',     value: 1260,   },
   {     label: '钢结构',     type: '已发布',     value: 860,   },
   {     label: '设备',     type: '已收到',     value: 600,   },
   {     label: '设备',     type: '已细化',     value: 260,   },
   {     label: '设备',     type: '已发布',     value: 160,   },
   {     label: '电仪',     type: '已收到',     value: 1000,   },
   {     label: '电仪',     type: '已细化',     value: 660,   },
   {     label: '电仪',     type: '已发布',     value: 360,   },

 ];


export default () => [data1, data2, data3, data4, data5a, data5b, data5c,data6,data7,data8a,data8b,data9];

