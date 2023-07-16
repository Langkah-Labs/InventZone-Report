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
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [0, 1, 2, 0, 0, 2, 0],
      type: "bar",
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
