const NCRstatus = [
  { type: '总量', item: '土建.', count: 10 },
  { type: '总量', item: '钢结构.', count: 9 },
  { type: '总量', item: '管道.', count: 18 },
  { type: '总量', item: '油漆.', count: 15 },
  { type: '总量', item: '保温.', count: 8 },
  { type: '总量', item: '电气.', count: 15 },
  { type: '总量', item: '仪表.', count: 20 },
  { type: '已完成', item: '土建.', count: 10 },
  { type: '已完成', item: '钢结构.', count: 7 },
  { type: '已完成', item: '管道.', count: 17 },
  { type: '已完成', item: '油漆.', count: 14 },
  { type: '已完成', item: '保温.', count: 7 },
  { type: '已完成', item: '电气.', count: 14 },
  { type: '已完成', item: '仪表.', count: 17 },
];
const NCRreason = [
  {
    type: '施工环境不满足施工要求',
    count: 38,
  },
  {
    type: '施工措施未达到方案要求',
    count: 52,
  },
  {
    type: '成品保护措施不到位',
    count: 61,
  },
  {
    type: '材料保护不到位',
    count: 145,
  },
  {
    type: '原材料不合格',
    count: 48,
  },
  {
    type: '测量工具未校验或过期',
    count: 38,
  },
  {
    type: '机械使用不当',
    count: 38,
  },
  {
    type: '质量意识薄弱',
    count: 38,
  },
  {
    type: '人员资质',
    count: 6,
  },
];
const Defect = [
  {
    type: '气孔',
    count: 127,
    precent: 63.5,
  },
  {
    type: '未熔合',
    count: 33,
    precent: 80.0,
  },
  {
    type: '夹渣',
    count: 12,
    precent: 86.0,
  },
  {
    type: '未焊透',
    count: 8,
    precent: 90.0,
  },
  {
    type: '咬边',
    count: 7,
    precent: 93.5,
  },
  {
    type: '内凹',
    count: 6,
    precent: 96.5,
  },
  {
    type: '余高超标',
    count: 5,
    precent: 99.0,
  },
  {
    type: '裂纹',
    count: 1,
    precent: 99.5,
  },
  {
    type: '其他',
    count: 1,
    precent: 100,
  },
];
const Pass = [
  { value: 0.96 },
];
const Joint = [
  {
    name: 'H001',
    count: 46,
    type: '总口数',
  },
  {
    name: 'H002',
    count: 56,
    type: '总口数',
  },
  {
    name: 'H003',
    count: 56,
    type: '总口数',
  },
  {
    name: 'H004',
    count: 45,
    type: '总口数',
  },
  {
    name: 'H005',
    count: 54,
    type: '总口数',
  },
  {
    name: 'H006',
    count: 76,
    type: '总口数',
  },
  {
    name: 'H001',
    count: 3,
    type: '不合格数',
  },
  {
    name: 'H002',
    count: 4,
    type: '不合格数',
  },
  {
    name: 'H003',
    count: 3,
    type: '不合格数',
  },
  {
    name: 'H004',
    count: 1,
    type: '不合格数',
  },
  {
    name: 'H005',
    count: 3,
    type: '不合格数',
  },
  {
    name: 'H006',
    count: 0,
    type: '不合格数',
  },
];
const NEDstatus = [
  { type: '总量', item: 'RT.', count: 638 },
  { type: '总量', item: 'PWHT.', count: 231 },
  { type: '总量', item: 'PT.', count: 52 },
  { type: '总量', item: 'HT.', count: 87 },
  { type: '总量', item: 'PMT.', count: 39 },
  { type: '总量', item: 'FT.', count: 26 },
  { type: '完成量', item: 'RT.', count: 510 },
  { type: '完成量', item: 'PWHT.', count:179 },
  { type: '完成量', item: 'PT.', count: 38 },
  { type: '完成量', item: 'HT.', count: 69 },
  { type: '完成量', item: 'PMT.', count: 22 },
  { type: '完成量', item: 'FT.', count: 18 },
  { type: '剩余量', item: 'RT.', count: 128 },
  { type: '剩余量', item: 'PWHT.', count: 52 },
  { type: '剩余量', item: 'PT.', count: 14 },
  { type: '剩余量', item: 'HT.', count: 18 },
  { type: '剩余量', item: 'PMT.', count: 17 },
  { type: '剩余量', item: 'FT.', count: 8 },
  { type: '四周预计检测量', item: 'RT.', count: 500 },
  { type: '四周预计检测量', item: 'PWHT.', count:210 },
  { type: '四周预计检测量', item: 'PT.', count: 80 },
  { type: '四周预计检测量', item: 'HT.', count: 90 },
  { type: '四周预计检测量', item: 'PMT.', count:150},
  { type: '四周预计检测量', item: 'FT.', count: 70 },
];
const Weldersstatus = [
  {type: '上线', count: 250 },
  {type: '下线', count: 400 },
  {type: '停工', count: 20 },
  {type: '培训', count: 15 },
];



export default () => [NCRstatus, NCRreason, Defect, Pass, Joint, NEDstatus, Weldersstatus];
