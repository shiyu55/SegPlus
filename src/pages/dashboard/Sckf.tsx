import React, { useState } from 'react';
import { Row, Col, Card,  Drawer, Table, Tabs } from 'antd';
import { useModel } from 'umi'
import { Chart, Tooltip, Interval, PieChart, Axis, Geom, Coordinate } from "bizcharts";
import { PageContainer } from '@ant-design/pro-layout';



export default () => {
   const [visible, setVisible] = useState(false);
   const data1 = useModel('sckf')[0];
   const data2 = useModel('sckf')[1];
   const data3 = useModel('sckf')[2];
   const data4 = useModel('sckf')[3];
   const columns = useModel('sckf')[5];

   const { TabPane } = Tabs;
   return (
      <PageContainer>



         <Row gutter={[16, 16]}>

            <Col span={8}>
               <Tabs defaultActiveKey="1">
                  <TabPane tab="中标项目" key="1">
                     <Card title="中标项目" extra={<a onClick={() => setVisible(true)} href="#">More</a>}>
                        <PieChart height={300}
                           legend={{
                              position: 'bottom-center',
                              offsetY: 10,
                           }}
                           data={data3}
                           radius={0.8}
                           angleField='count'
                           colorField='item'
                           label={{
                              visible: true,
                              type: 'outer',
                              offset: 20,
                           }}
                        />
                     </Card>
                  </TabPane>
                  <TabPane tab="投标状态" key="2">
                     <Card title="投标状态">
                        <PieChart height={300}
                           legend={{
                              position: 'bottom-center',
                              offsetY: 10,
                           }}
                           data={data4}
                           radius={0.8}
                           angleField='count'
                           colorField='item'
                           label={{
                              visible: true,
                              type: 'outer',
                              offset: 20,
                           }}
                        />
                     </Card>
                  </TabPane>
               </Tabs>
            </Col>
            <Col span={16}>
               <Tabs defaultActiveKey="1">
                  <TabPane tab="市场开发目标完成" key="1">

                     <Card title="市场开发目标完成">
                        <Chart height={300} data={data1} forceFit padding={[40, 40, 0, 60]}>

                           <Axis name="type" />
                           <Axis name="count" />
                           <Tooltip
                           // crosshairs用于设置 tooltip 的辅助线或者辅助框
                           // crosshairs={{
                           //  type: "y"
                           // }}
                           />
                           <Geom type="interval" position="type*count" label="count" color="type" />
                           <Coordinate transpose />
                           <Axis
                              name="type"
                           />
                           <Axis name="type" visible={true} />

                        </Chart>
                     </Card>
                  </TabPane>
                  <TabPane tab="投标区域和目标情况" key="2">
                     <Card title="投标区域和目标情况">
                        <Chart height={300} data={data2} autoFit padding={[60, 40, 0, 60]}>
                           <Interval
                              adjust={[
                                 {
                                    type: 'stack',
                                 },
                              ]}
                              color="name"
                              position="type*count"
                              label="count"
                           />
                           <Tooltip shared />
                           <Coordinate transpose />
                           <Axis
                              name="type"
                           />
                           <Axis name="type" visible={true} />
                        </Chart>
                     </Card>
                  </TabPane>
               </Tabs>
            </Col>
         </Row>
         <Drawer
            title="分布表单"
            width={800}
            onClose={() => setVisible(false)}
            visible={visible}
            //footer={submitter}
            destroyOnClose
         >
            <Table columns={columns} dataSource={data3} />

         </Drawer>
      </PageContainer>

   )
}