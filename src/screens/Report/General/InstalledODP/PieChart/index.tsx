import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import Spinner from "../../../../../components/Spinner";

type EChartsOption = echarts.EChartsOption;
type EChartsType = echarts.EChartsType;

interface Props {
  dataSource?: (string | number)[][];
  isLoading?: boolean | undefined;
}

const option: EChartsOption = {
  title: {
    text: "Referer of a Website",
    subtext: "Fake Data",
    left: "center",
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "vertical",
    left: "left",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: "50%",
      data: [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
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
        dataset: {
          source: dataSource,
        },
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
