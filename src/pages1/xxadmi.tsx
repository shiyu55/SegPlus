import React, { useState } from 'react';
import { Button, Drawer, Table } from 'antd';
import { useModel } from 'umi'
import { G2, Chart, Tooltip, Interval, Coord, PieChart, Axis, Geom } from "bizcharts";
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
export default () => {
   const [visible, setVisible] = useState(false);
   const data1 = useModel('admi')[0];
   const data4 = useModel('admi')[3];
   const data2 = useModel('admi')[1];
   const data3 = useModel('admi')[2];
   const data5 = useModel('admi')[4];
   const data6 = useModel('admi')[5];
   const data7 = useModel('admi')[6];
   const data8 = useModel('admi')[7];
   const data9 = useModel('admi')[8];
   const data10 = useModel('admi')[9];

   return (
      <PageContainer>
          <Drawer
            title="分布表单"
            width={800}
            onClose={() => setVisible(false)}
            visible={visible}
            //footer={submitter}
            destroyOnClose
         >

            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
         </Drawer>
      
         <Button type="primary" onClick={() => setVisible(true)}>
录入数据
          </Button>
       <ProCard>
            <ProCard colSpan="50%" >
               <ProCard gutter={[16, 16]} split="vertical"  tabs={{
                  type: 'card' ,
                  size: 'small',
              
               }} >
                  <ProCard.TabPane key="tab1" tab="人员动迁批件状态"  >
                     <PieChart height={400}
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
                     /> </ProCard.TabPane>
                  <ProCard.TabPane key="tab2" tab="休假下线人员状态">
                     <PieChart height={400}
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
                     /> </ProCard.TabPane>
                  <ProCard.TabPane key="tab3" tab="项目人员分类">
                     <PieChart height={400}
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
                        }} />
                  </ProCard.TabPane>
                  <ProCard.TabPane key="tab4" tab="暂住证状态">
                     <PieChart height={400}
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
                  </ProCard.TabPane>
               </ProCard>
            </ProCard>
            <ProCard colSpan="50" >
               <ProCard gutter={[16, 16]} split="vertical" tabs={{
                  type: 'card'
               }} >
                  <ProCard.TabPane key="tab5" tab="入场ID台账" >
                     <Chart height={400} data={data3} forceFit>

                        <Axis name="type" />
                        <Axis name="count" />
                        <Tooltip
                        // crosshairs用于设置 tooltip 的辅助线或者辅助框
                        // crosshairs={{
                        //  type: "y"
                        // }}
                        />
                        <Geom type="interval" position="type*count" color="type" label="count"/>
                     </Chart>

                  </ProCard.TabPane>
                  <ProCard.TabPane key="tab6" tab="住宿台账">
                     <Chart height={400} padding="auto" data={data1} autoFit>
                        <Interval
                           adjust={[
                              {
                                 type: 'stack',
                              },
                           ]}
                           color="name"
                           position="type*count"
                           label={'count'
                        }
                        />
                        <Tooltip shared />
                     </Chart>
                  </ProCard.TabPane>
                  <ProCard.TabPane key="tab7" tab="项目部人员">
                     <Chart height={400} data={data2} forceFit>
                  
                        <Axis name="type" />
                        <Axis name="count" />
                        <Tooltip
                        // crosshairs用于设置 tooltip 的辅助线或者辅助框
                        // crosshairs={{
                        //  type: "y"
                        // }}
                        />
                        <Geom type="interval" position="type*count" color="type" label="count"/>
                     </Chart>
                  </ProCard.TabPane>
                  <ProCard.TabPane key="tab8" tab="间接人员">
                     <Chart height={400} data={data9} forceFit autoFit>

                        <Axis name="type" />
                        <Axis name="count" />
                        <Tooltip
                        // crosshairs用于设置 tooltip 的辅助线或者辅助框
                        // crosshairs={{
                        //  type: "y"
                        // }}
                        />
                        <Geom type="interval" position="type*count" color="type" label="count"autoFit/>
                     </Chart>
                  </ProCard.TabPane>
                  <ProCard.TabPane key="tab9" tab="直接人员">
                     <Chart height={400} data={data10} forceFit autoFit>
                        <Axis name="type" />
                        <Axis name="count" />
                        <Tooltip
                        // crosshairs用于设置 tooltip 的辅助线或者辅助框
                        // crosshairs={{
                        //  type: "y"
                        // }}
                        />
                        <Geom type="interval" position="type*count" label="count" color="type" autoFit/>
                     </Chart>
                  </ProCard.TabPane>
               </ProCard>
            </ProCard>
            </ProCard>


      </PageContainer>

   )
}