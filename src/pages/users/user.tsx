import React, { FC } from 'react';
import { IndexModelState, ConnectProps, Loading, connect } from 'umi';
import {Table} from 'antd'
interface PageProps extends ConnectProps {
  index: IndexModelState;
  loading: boolean;
}
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
   
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Website',
    dataIndex: 'website',
    key: 'website',
  },
  {
    title: 'Operation',
    key: 'operation',
   
  },
];
const IndexPage: FC<PageProps> = ({ index, dispatch }) => {
  const { list } = index;
  return <div > <Table dataSource={list} columns={columns} bordered></Table></div>;
};
export default connect(({ index}: { index: IndexModelState}) => ({
  index,
  
}))(IndexPage);

