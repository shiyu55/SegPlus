import React, { useState } from 'react';

import { Chart, Tooltip, Interval, PieChart } from "bizcharts";
import { Row, Col, Tabs, Card, Drawer } from 'antd';
import { Line, Point } from 'bizcharts';
import { useModel } from 'umi';
import { FunnelChart } from 'bizcharts';
import { GroupedBarChart } from 'bizcharts';
import { PageContainer } from '@ant-design/pro-layout';


const { TabPane } = Tabs;
export default () => {
   const data1 = useModel('const')[0];
   const data2 = useModel('const')[1];
   const data3 = useModel('const')[2];
   const data4 = useModel('const')[3];
   const data5a = useModel('const')[4];
   const data5b = useModel('const')[5];
   const data5c = useModel('const')[6];
   const data6 = useModel('const')[7];
   const data7 = useModel('const')[8];
   const data8a = useModel('const')[9];
   const data8b = useModel('const')[10];
   const data9 = useModel('const')[11];

   const [visible, setVisible] = useState(false);
   const showDrawer = () => {
      setVisible(true);
   };
   const onClose = () => {
      setVisible(false);
   };


   return (
      <PageContainer>
        
         <Drawer
            title="Basic Drawer"
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
         >
          
         </Drawer>
         <div>
               <Row gutter={[16, 16]}>
              
               <Col span={8}>
                  <Card title="项目工程量">
                     <PieChart
                        data={data2}
                        title={{ visible: true, text: '', }}
                        description={{ visible: true, text: '', }}
                        radius={0.8}
                        angleField='count'
                        colorField='type'
                        label={{ visible: true, type: 'outer', offset: 20, }}
                     />
                  </Card>

               </Col>
               <Col span={8}>
                  <Card>
                     <Tabs defaultActiveKey="1" >
                        <TabPane tab="项目直接人员" key="1">
                           <Col span={12}></Col>
                           <h2>2020年</h2>
                           <h4>数量</h4>
                           <Chart height={309} width={600} data={data8a} >
                              <Interval position="day*产量" />
                           </Chart>
                        </TabPane>
                        <TabPane tab="项目间接人员" key="2">
                           <Col span={12}></Col>
                           <h4>（人数）</h4>
                           <Card>
                              <Chart height={300} padding="auto" data={data8b} autoFit>
                                 <Interval
                                    adjust={[{ type: 'stack', },]}
                                    color="区域"
                                    position="类型*数量"
                                 />
                                 <Tooltip shared />
                              </Chart>
                           </Card>
                        </TabPane>

                     </Tabs>
                  </Card>
               </Col>
               <Col span={8}>
                  <Card title="施工进度计划">
                     <Chart scale={{ temperature: { min: 0 } }} padding={[30, 20, 50, 40]} autoFit height={400}
                        data={data3} interactions={['element-active']}>
                        <Line shape="smooth" position="month*temperature" color="city" label="temperature" />
                        <Point position="month*temperature" color="city" />
                        <Tooltip shared showCrosshairs />
                     </Chart>
                  </Card>
               </Col>
               <Col span={8}>
                  <Card title="施工图纸统计">
                     <GroupedBarChart
                        data={data9}
                        xField='value'
                        yField='label'
                        groupField='type'
                        color={['#1383ab', '#c52125']}
                        label={{
                           formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
                        }}
                     />
                  </Card>
               </Col>
               <Col span={8}> 
                  <Card title="施工材料"
                  
                   extra={<a onClick={showDrawer} href="#">More</a>}
                  >             

                     <Chart height={400} padding="auto" data={data1} autoFit >
                        <Interval adjust={[{ type: 'dodge', marginRatio: 0, },]}
                           color="name" position="type*count"
                        />
                        <Tooltip shared />
                     </Chart>
                  </Card>
               </Col>
               <Col span={8}>
                  <Card title="管段释放状态">
                     <FunnelChart
                        data={data7}
                        xField='action'
                        yField='pv'

                        transpose
                     />
                  </Card>
               </Col>
               <Col span={8}>
                  <Card>
                     <Tabs defaultActiveKey="1" >
                        <TabPane tab="焊接产量" key="1">
                           <Col span={12}></Col>
                           <h2>近七天管道焊接产量</h2>
                           <h4>（英寸）</h4>
                           <Chart height={309} width={600} data={data5a} >
                              <Interval position="day*产量" />
                           </Chart>
                        </TabPane>
                        <TabPane tab="支架产量" key="2">
                           <Col span={12}></Col>
                           <h2>近七天支架接产量</h2>
                           <h4>（个数）</h4>
                           <Chart height={309} width={600} data={data5b} >
                              <Interval position="day*产量" />
                           </Chart>
                        </TabPane>
                        <TabPane tab="油漆产量" key="3">
                           <Col span={12}></Col>
                           <h2>近七天油漆产量</h2>
                           <h4>（平方米）</h4>
                           <Chart height={309} width={600} data={data5c} >
                              <Interval position="day*产量" />
                           </Chart>
                        </TabPane>
                     </Tabs>
                  </Card>
               </Col>
               <Col span={8}>
                  <Card title="施工机械统计分布">
                     <Chart height={400} padding="auto" data={data6} autoFit>
                        <Interval
                           adjust={[{ type: 'stack', },]}
                           color="区域"
                           position="类型*数量"
                        />
                        <Tooltip shared />
                     </Chart>
                  </Card>
               </Col>
               <Col span={8}>
                  <Card title="试压包状态">
                     <FunnelChart
                        data={data4}
                        xField='action'
                        yField='pv'
                        compareField='quarter'
                        transpose
                     />
                  </Card>
               </Col>

            </Row>
         </div >
      </PageContainer>
   );
};