

const data1 = [
    { name: '入住', type: '单人间', count: 23 },
    { name: '入住', type: '二人间', count: 34 },
    { name: '入住', type: '三人间.', count: 254 },
    { name: '入住', type: '五人间', count: 234 },
    { name: '未入住', type: '单人间', count: 22 },
    { name: '未入住', type: '二人间', count: 28 },
    { name: '未入住', type: '三人间.', count: 34 },
    { name: '未入住', type: '五人间', count: 98 },
//住宿台账
];
const data2 = [
    { name: '人', type: '石化员工', count: 89 },
    { name: '人', type: '劳务派遣', count: 76 },
    { name: '人', type: '项目外聘', count: 34 },
    { name: '人', type: '国内分包', count: 237 },
    { name: '人', type: '第三国聘用', count: 94},
    { name: '人', type: '当地聘用', count: 87 },
]
//项目部人员
const data3 = [
    { name: '人', type: '已办理人数', count: 234 },
    { name: '人', type: '待办理人数', count: 453 },
    { name: '人', type: '到期待更新人数', count: 342 },
    { name: '人', type: '注销人数', count: 342 },
]
//入场ID台账
const data4 = [
    {
      item: "间接人员",
      count: 497
    },
    {
      item: "直接人员",
      count: 5431
    },
  ];
  //项目人员分类
  const data5 = [
    {
      item: "外国籍人员下线",
      count: 97
    },
    {
      item: "外国籍人员休假",
      count: 31
    },
    {
        item: "中国籍人员休假",
        count: 497
      },
      {
        item: "中国籍人员下线",
        count: 131
      },
  ];
  //休假下线人员状态
  const data6 = [
    {
      item: "已办理人数",
      count: 1197
    },
    {
      item: "新办理人数",
      count: 331
    },
    {
        item: "待办理人数",
        count: 297
      },
      {
        item: "待更新人数",
        count: 731
      },
  ];
  //暂住证状态
  const data7 = [
    {
      item: "正在办理人数",
      count: 1197
    },
    {
      item: "待办理人数",
      count: 331
    },
    {
        item: "已审批人数",
        count: 297
      },

  ];
  //人员动迁批件状态
  const data8 = [
    {
      item: "机关人数",
      count: 97
    },
    {
      item: "借出人数",
      count: 31
    },
    {
        item: "马来西亚人数",
        count: 3
      },
      {
        item: "EOEG人数",
        count: 27
      },
      {
        item: "科威特人数",
        count: 3
      },
      {
          item: "哈拉德人数",
          count: 77
        },
  ];
  //海外分公司人员
  const data9 = [
    { name: '人', type: '项目领导班子', count: 6 },
    { name: '人', type: '行政管理人员', count: 13 },
    { name: '人', type: '质量管理人员', count: 42 },
    { name: '人', type: '安全管理人员', count: 37 },
    { name: '人', type: '施工管理人员', count: 94},
    { name: '人', type: '控制管理人员', count: 17 },
    { name: '人', type: '采购管理人员', count: 27 },
    { name: '人', type: '财务管理人员', count: 6 },
    { name: '人', type: '信息管理人员', count: 7 },
    { name: '人', type: '分包管理人员', count: 21 },
    { name: '人', type: '辅助人员', count: 37 },
]
//间接人员
const data10 = [
  { name: '人', type: '队长', count: 89 },
  { name: '人', type: '钢筋工', count: 76 },
  { name: '人', type: '木工', count: 34 },
  { name: '人', type: '混泥土工', count: 237 },
  { name: '人', type: '铆工', count: 94},
  { name: '人', type: '起重工', count: 87 },
  { name: '人', type: '钳工', count: 87 },
  { name: '人', type: '管工', count: 87 },
  { name: '人', type: '焊工', count: 87 },
  { name: '人', type: '电气安装工', count: 87 },
  { name: '人', type: '仪表安装工', count: 87 },
  { name: '人', type: '接线工', count: 87 },
  { name: '人', type: '调试工', count: 87 },
  { name: '人', type: '油漆工', count: 87 },
  { name: '人', type: '喷砂工', count: 87 },
  { name: '人', type: '保温工', count: 87 },
  { name: '人', type: '铁皮工', count: 87 },
  { name: '人', type: '架子工', count: 87 },
  { name: '人', type: '热处理工', count: 87 },
  { name: '人', type: '普工', count: 87 },
]
//直接人员
export default () => [data1,data2,data3,data4,data5,data6,data7,data8,data9,data10];
