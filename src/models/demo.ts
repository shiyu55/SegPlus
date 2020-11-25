
//import data from '../../mock/DataList.csv'
const data1 = [
  { action: '任务件办完', pv: 5000, quarter: '2020Q1' },
  { action: '安全培训完', pv: 3500, quarter: '2020Q1' },
  { action: '签证完', pv: 2500, quarter: '2020Q1' },
  { action: '体检完', pv: 1500, quarter: '2020Q1' },
  { action: '机票完', pv: 1150, quarter: '2020Q1' },
];



// step3 引用 DataView
//chart.source(dv);



  const data2 = [
    { type: '1月', money: 120 },
    { type: '2月', money: 900 },
    { type: '3月', money: 200 },
    { type: '4月', money: 300 },
    { type: '5月', money: 1200 },
    { type: '6月', money: 1000 },
    { type: '7月', money: -2000 },
    { type: '8月', money: -900 },
    { type: '9月', money: 200 },
    { type: '10月', money: 300 },
    { type: '11月', money: -120 },
    { type: '12月', money: 900 },
  ];
  const data3 = [
    {
      title: "进度",
      measures:  [30, 50],
      ranges: [40, 70, 100],
      targets: [90],
    },
    {
      title: "成本",
      measures:  [40, 70, 100],
      ranges: [40, 70, 100],
      targets: [90],
    },
    {
      title: "工效",
      measures:  [30, 50],
      ranges: [40, 70, 100],
      targets: [90],
    },

  ];
export default () => [data1,data2,data3];
