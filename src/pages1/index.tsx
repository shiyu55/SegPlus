import React from 'react';
import { Row, Col, Card } from 'antd';
import { useModel } from 'umi'
import { G2, Chart, Tooltip, Interval, Coord, PieChart, Axis, Geom } from "bizcharts";
import { PageContainer } from '@ant-design/pro-layout';

export default () => {
   const data1 = useModel('admi')[0];
   const data4 = useModel('admi')[3];
   const data2 = useModel('admi')[1];
   const data3 = useModel('admi')[2];
   const data5 = useModel('admi')[4];
   const data6 = useModel('admi')[5];
   const data7 = useModel('admi')[6];
   const data8 = useModel('admi')[7];
   return (
      <PageContainer>

         <div><Row gutter={[16, 16]}>
         <Col span={8}>
               <Card title="海外分公司人员">
                  <PieChart height={300}
                     legend={{
                        position: 'bottom-center',
                        offsetY: 10,
                     }}
                     data={data8}
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
            </Col>
            <Col span={8}>
               <Card title="人员动迁批件状态">
                  <PieChart height={300}
                     legend={{
                        position: 'bottom-center',
                        offsetY: 10,
                     }}
                     data={data7}
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
            </Col>
         </Row>
            <Row gutter={[16, 16]}>

            <Col span={8}>
               <Card title="休假下线人员">
                  <PieChart height={300}
                     legend={{
                        position: 'bottom-center',
                        offsetY: 10,
                     }}
                     data={data5}
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
            </Col>

            <Col span={8}>
               <Card title="暂住证状态">
                  <PieChart height={300} 
                     legend={{
                        position: 'bottom-center',
                        offsetY: 10,
                     }}
                     data={data6}
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
            </Col>

          

         </Row>
            <Row gutter={[16, 16]}>

            <Col span={8}>
               <Card title="项目人员分类">
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
            </Col>

            <Col span={8}>
                  <Card title="入场ID台账">
                     <Chart height={300}  data={data3} forceFit>

                        <Axis name="type" />
                        <Axis name="count" />
                        <Tooltip
                        // crosshairs用于设置 tooltip 的辅助线或者辅助框
                        // crosshairs={{
                        //  type: "y"
                        // }}
                        />
                        <Geom type="interval" position="type*count" />
                     </Chart>
                  </Card>
               </Col>
               </Row>

               <Row gutter={[16, 16]}>
               <Col span={8}>
                  <Card title="住宿台账">
                     <Chart height={300}  padding="auto" data={data1} autoFit>
                        <Interval
                           adjust={[
                              {
                                 type: 'stack',
                              },
                           ]}
                           color="name"
                           position="type*count"
                        />
                        <Tooltip shared />
                     </Chart>
                  </Card>
               </Col>

               <Col span={8}>
                  <Card title="项目部人员来源">
                     <Chart height={300}  data={data2} forceFit>

                        <Axis name="type" />
                        <Axis name="conut" />
                        <Tooltip 
                        // crosshairs用于设置 tooltip 的辅助线或者辅助框
                        // crosshairs={{
                        //  type: "y"
                        // }}
                        />
                        <Geom type="interval" position="type*count" />
                     </Chart>
                  </Card>
               </Col>
            </Row>
         </div >
      </PageContainer>

   )
};