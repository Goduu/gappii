"use client"
import { ChartConfig, ChartContainer } from '@/components/ui/chart';
import { Lesson } from '@/ogm-types';
import React, { useState } from 'react';
import { PieChart, Pie, Sector, Cell } from 'recharts';
import { PieSectorDataItem } from 'recharts/types/polar/Pie';
import { ActiveShape } from 'recharts/types/util/types';

const chartConfig = {
    desktop: {
        label: "Desktop",
    },
} satisfies ChartConfig

const renderActiveShape: ActiveShape<PieSectorDataItem> = (props: PieSectorDataItem) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;

    if (!cx || !cy || !outerRadius || !percent) return <g></g>
    const sin = Math.sin(-RADIAN * (midAngle || 1));
    const cos = Math.cos(-RADIAN * (midAngle || 1));
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor='middle' fill={fill}>
                {/* {payload.name} */}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
                onClick={() => console.log(props)}
                className='cursor-pointer transition-all duration-300'
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{payload.name}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                {`${value} activities`}
            </text>
        </g>
    );
};

type SubtopicsPieProps = {
    innerRadius?: number
    outerRadius?: number
    lessons: Lesson[]
}

export const SubtopicsPie = ({ innerRadius = 44, outerRadius = 63, lessons }: SubtopicsPieProps) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const onPieEnter = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <ChartContainer config={chartConfig} className="h-full w-full absolute overflow-visible -top-4">
            <PieChart width={400} height={400}>
                <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={lessons.map(lesson => ({ name: lesson.title, value: lesson.hasActivities.length }))}
                    cx="50%"
                    cy="50%"
                    paddingAngle={5}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    fill="#8884d8"
                    dataKey="value"
                    onMouseEnter={(_, index) => onPieEnter(index)}
                >
                    {lessons.map((lesson, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ChartContainer>
    );

}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#82ca9d', '#a4de6c', '#d0ed57', '#ffc658', '#ffa600'];
