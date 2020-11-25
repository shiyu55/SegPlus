import { Table } from 'antd';
import { useModel } from 'umi'
const columns = [
  {
    title: 'item',
    dataIndex: 'item',
    key:'key'
    },

  
  
];

const data =[useModel('admi')[7]]
for (let i = 0; i < 46; i++) {
  data.push({
    rowkey="i",
    item:'',
    count:'',
   
  });
}
 

export default () => [
  
<Table columns={columns} dataSource={data} bordered />]