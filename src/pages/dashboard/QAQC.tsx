import React, { useState } from 'react';
import { Drawer,  Table } from 'antd';
import { GaugeChart, GroupedColumnChart, StackedColumnChart, Chart, Tooltip, Legend, Interval, Line, Point, BarChart, PieChart, registerShape} from "bizcharts";
import { useModel } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';

const { Column } = Table;
registerShape('point', 'pointer', {
  draw(cfg, container) {
    const group = container.addGroup();
    const center = this.parsePoint({ x: 0, y: 0 }); // 获取极坐标系下画布中心点
    const start = this.parsePoint({ x: 0, y: 0.5 }); // 获取极坐标系下起始点
    // 绘制指针
    const line = group.addShape('line', {
      attrs: {
        x1: center.x,
        y1: center.y,
        x2: start.x,
        y2: start.y,
        stroke: cfg.color,
        lineWidth: 5,
        lineCap: 'round',
      },
    });
    group.addShape('circle', {
      attrs: {
        x: center.x,
        y: center.y,
        r: 9.75,
        stroke: cfg.color,
        lineWidth: 4.5,
        fill: '#fff',
      },
    });

    const angle1 = Math.atan((start.y - center.y) / (start.x - center.x));
    const angle = (Math.PI - 2 * angle1) * cfg.points[0].x;
    if (group.cfg.animable) {
        group.animate((ratio) => {
        group.resetMatrix();
        group.rotateAtPoint(center.x, center.y, angle * ratio);
      }, 300);
    } else {
      group.rotateAtPoint(center.x, center.y, angle);
    }

    return group;
  },
});

export default () => {
  const NCRstatus = useModel('QAQC')[0];
  const NCRreason = useModel('QAQC')[1];
  const Defect = useModel('QAQC')[2];
  const Pass = useModel('QAQC')[3];
  const Joint = useModel('QAQC')[4];
  const NEDstatus = useModel('QAQC')[5];
  const Weldersstatus = useModel('QAQC')[6];

  const scale = {
    累计百分比: {
      min: 0,
      max: 100,
    },
    数量: {
      min: 0,
      max: 150,
    },
  };
  const colors = ["#6394f9", "#62daaa"];


  const [visible, setVisible] = useState(false);
  const showDrawer = () => { setVisible(true); };
  const onClose = () => { setVisible(false); };

  let chartIns = null;

  return (
    <PageContainer>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Table dataSource={Weldersstatus}>
          <Column title="焊工状态" dataIndex="type" key="type" />
          <Column title="人数" dataIndex="count" key="count" />
        </Table>
      </Drawer>
      <>

        <ProCard>
          <ProCard title="NDE状态"           colSpan={{
            xs: '10%',
            sm: '20%',
            md: '30%',
            lg: '40%',
            xl: '50%',
          }}>
            <GroupedColumnChart
              data={NEDstatus}
              forceFit
              xField='item'
              yField='count'
              yAxis={{
                min: 0,
              }}
              label={{
                visible: true,
              }}
              groupField='type'
              color={['blue', 'green', 'red', 'yellow']}
            />
          </ProCard>
          <ProCard tabs={{ type: 'card' }}>
            <ProCard.TabPane key="tab1" tab="NCR状况">
              <Chart height={400} autoFit padding="auto" data={NCRstatus}>
                <Interval
                  adjust={[
                    {
                      type: 'dodge',
                      marginRatio: 0,
                    },
                  ]}
                  color="type"
                  position="item*count"
                />
                <Tooltip shared />
              </Chart>
            </ProCard.TabPane>
            <ProCard.TabPane key="tab2" tab="NCR原因分析">
              <BarChart
                data={NCRreason}
                forceFit
                width={900}
                xField='count'
                yField='type'
                xAxis={{
                  title: {
                    visible: true,
                    text: '数量',
                  },
                  tickLine: {
                    visible: true,
                  },
                }}
              />

            </ProCard.TabPane>
          </ProCard>
        </ProCard>

        <ProCard
          title="焊工，焊口"
          headerBordered
          collapsible
          defaultCollapsed
          onCollapse={(collapse) => console.log(collapse)}
          gutter={[{ xs: 8, sm: 8, md: 16, lg: 24, xl: 32 }, 16]}
        >
          <ProCard split="vertical">
            <ProCard title='焊工状态' extra={<a onClick={showDrawer} href="#">修改</a>} colSpan="40%">
              <PieChart
                data={Weldersstatus}
                radius={0.8}
                angleField='count'
                colorField='type'
                label={{
                  visible: true,
                  type: 'outer',
                  offset: 20,
                }}
              />
            </ProCard>
            <ProCard tabs={{ type: 'card', }}>
              <ProCard.TabPane key="tab1" tab='焊工合格率'>
                <StackedColumnChart
                  data={Joint}
                  forceFit
                  padding='auto'
                  xField='name'
                  yField='count'
                  xAxis={{
                    title: {
                      visible: true,
                      text: '焊工姓名',
                    },
                  }}
                  yAxis={{
                    title: {
                      visible: true,
                      text: '数量',
                    },
                    min: 0,
                  }}
                  color={['green', 'red']}
                  stackField='type'
                />
              </ProCard.TabPane>
              <ProCard.TabPane key="tab2" tab="焊口合格率">
                <GaugeChart
               
                  width={400}
                  height={400}
                  value={96}
                  min={0}
                  max={100}
                  range={[0, 25, 50, 75, 100]}
                  color={['#39B8FF', '#52619B', '#43E089', '#C0EDF3']}
                  statistic={{
                    visible: true,
                    text: '合格率',
                    color: '#30bf78',
                  }}
                />
              </ProCard.TabPane>
              <ProCard.TabPane key="tab3" tab="焊口缺陷分析">
                <Chart
                  scale={scale}
                  forceFit
                  height={400}
                  data={Defect}
                  onGetG2Instance={(chart) => {
                    chartIns = chart;
                    chartIns.on("interval:mouseenter", (e) => {
                      console.log(chartIns);
                      chartIns.geometries.forEach((g) => {
                        if (g.type === "interval") {
                          (g.getShapes() || []).forEach((s) => {
                            s.set("origin_fill", s.get("attrs").fill);
                            s.attr("fill", "red");
                          });
                        }
                      });
                    });
                    chartIns.on("interval:mouseleave", (e) => {
                      console.log(chartIns);
                      chartIns.geometries.forEach((g) => {
                        if (g.type === "interval") {
                          (g.getShapes() || []).forEach((s) => {
                            s.attr("fill", s.get("origin_fill"));
                          });
                        }
                      });
                    });
                  }}
                >
                  {/*  如需使用单轴 
        <Axis name="waiting" visible={true} />
        <Axis name="people" visible={false} /> 
        */}
                  <Legend
                    custom={true}
                    allowAllCanceled={true}
                    items={[
                      {
                        value: "count",
                        name: "数量",
                        marker: {
                          symbol: "square",
                          style: { fill: colors[0], r: 5 },
                        },
                      },
                      {
                        value: "precent",
                        name: "累计百分比",
                        marker: {
                          symbol: "hyphen",
                          style: { stroke: colors[1], r: 5, lineWidth: 3 },
                        },
                      },
                    ]}
                    onChange={(ev) => {
                      const item = ev.item;
                      const value = item.value;
                      const checked = !item.unchecked;
                      const geoms = chartIns.geometries;

                      for (let i = 0; i < geoms.length; i++) {
                        const geom = geoms[i];

                        if (geom.getYScale().field === value) {
                          if (checked) {
                            geom.show();
                          } else {
                            geom.hide();
                          }
                        }
                      }
                    }}
                  />
                  <Tooltip shared />
                  <Interval position="type*count" color={colors[0]} />
                  <Line
                    position="type*precent"
                    color={colors[1]}
                    size={3}
                    shape="smooth"
                  />
                  <Point
                    position="type*precent"
                    color={colors[1]}
                    size={3}
                    shape="circle"
                  />
                </Chart>
              </ProCard.TabPane>
            </ProCard>
          </ProCard>
        </ProCard>
      </>
    </PageContainer >
  );
};
