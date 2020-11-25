import React, { useState } from 'react';
import ProCard from '@ant-design/pro-card';
import { Drawer } from 'antd';
import { FunnelChart, WaterfallChart,GroupedColumnChart,BulletChart } from "bizcharts";

import { useModel } from 'umi';
import { PlusOutlined } from '@ant-design/icons';


export default ({ loading }: { loading: boolean }) => {
  
  //const [data1,data2,data3] =  useModel('demo');
  const data = useModel('demo');//useModel 是一个 React Custom Hook，传入 namespace 即可获取对应 model 的返回值。

  const [visible, setVisible] = useState(false);
  
  //const [tab, setTab] = useState('tab2');
  //const [tabPosition, setTabPosition] = useState<ProCardTabsProps['tabPosition']>('top');
  return (
    
    <>

      <ProCard style={{ marginTop: 8 }} gutter={8} ghost>
        <ProCard colSpan="30%" extra={<a onClick={() => { }}><PlusOutlined /></a>} tooltip="这是提示">
        <BulletChart
      data={data[2]}
      title={{
        visible: true,
        text: '项目控制情况',
      }}
      rangeMax={100}
    />
        </ProCard>
        <ProCard tabs={{ type: 'line', }} extra={<a type="primary" onClick={() => setVisible(true)}><PlusOutlined /></a>} tooltip="这是提示">
          <ProCard.TabPane key="tab1" tab="项目人员动迁">
            <ProCard tabs={{ type: 'line', }}>

              <ProCard.TabPane tab="按单位" key="1">
                <FunnelChart
                  data={data[0]}
                  xField='action'
                  yField='pv'
                  transpose
                  dynamicHeight
                />
              </ProCard.TabPane>
              <ProCard.TabPane tab="按工种" key="2">

              </ProCard.TabPane>
            </ProCard>

          </ProCard.TabPane>
          <ProCard.TabPane key="tab2" tab="项目资金情况">
            <WaterfallChart
              data={data[1]}

              forceFit
              padding="auto"
              xField='type'
              yField='money'
              meta={{
                type: {
                  alias: '类别',
                },
                money: {
                  alias: '金额',
                },
              }}
            />
          </ProCard.TabPane>
          <ProCard.TabPane key="tab3" tab="人力资源投入">
            <GroupedColumnChart
              data={data[0]}
              forceFit
              xField='专业'
              yField='数量'
              yAxis={{
                min: 0,
              }}
              label={{
                visible: true,
              }}
              groupField='TYPE'
              color={['#1ca9e6', '#f88c24']}
            />
          </ProCard.TabPane>
          <ProCard.TabPane key="tab4" tab="施工机械设备投入">
            内容二
            </ProCard.TabPane>
        </ProCard>
      </ProCard>

      <Drawer
        title="分布表单"
        width={800}
        onClose={() => setVisible(false)}
        visible={visible}
        //footer={submitter}
        destroyOnClose
      >

        
      </Drawer>





    </>
  )
};
