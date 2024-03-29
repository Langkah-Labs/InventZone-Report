import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import Spinner from "../../../../../components/Spinner";

type EChartsOption = echarts.EChartsOption;
type EChartsType = echarts.EChartsType;

interface Props {
  dataSource?: (string | number)[][];
  isLoading?: boolean | undefined;
}

const colorPalette = ["#5592fdff", "#fbfb5bff", "#fd5854ff"];

const option: EChartsOption = {
  title: {
    text: "ODP Classified By Port",
    subtext: "Data generated by Field Operation",
    left: "center",
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "horizontal",
    left: "left",
    top: "bottom",
  },
  series: [
    {
      name: "ODP Classification",
      type: "pie",
      radius: "50%",
      color: colorPalette,
      data: [],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
  height: "400px",
};

export default function Index({ dataSource, isLoading }: Props) {
  const chartElRender = useRef<HTMLDivElement>(null);
  const chartEl = useRef<EChartsType | null>(null);
  useEffect(() => {
    if (chartElRender.current) {
      const myChart = echarts.init(chartElRender.current);
      myChart.setOption<EChartsOption>(option);
      chartEl.current = myChart;
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    }
    return () => {
      chartEl.current?.dispose();
    };
  }, []); // eslint-disable-line
  useEffect(() => {
    if (chartEl.current) {
      chartEl.current.setOption<EChartsOption>({
        series: [
          {
            data: dataSource,
          },
        ],
      });
    }
  }, [dataSource]); // eslint-disable-line
  return (
    <div className="relative">
      <div ref={chartElRender} className="z-50 h-[400px] w-full" />
      {isLoading ? (
        <div className="absolute left-0 right-0 top-40">
          <Spinner />
        </div>
      ) : null}
    </div>
  );
}
