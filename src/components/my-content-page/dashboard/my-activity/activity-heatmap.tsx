import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';
import { useQuery } from '@apollo/client';
import { GET_USER_DAILY_ACTIVITY } from '@/lib/gqls/userGQLs';
import { useUser } from '@clerk/nextjs';
import { QueryUsersArgs } from '@/ogm-types';
import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import { Props as ScatterProps } from 'recharts/types/cartesian/Scatter';

type ActivityData = {
    date: string;
    day: number;
    week: number;
    count: number;
};

const getColor = (count: number) => {
    if (count === 0) return '#ebedf0';     // Empty
    if (count <= 1) return '#9be9a8';      // Very Light green
    if (count <= 10) return '#40c463';      // Light green
    if (count <= 30) return '#30a14e';      // Medium green
    if (count <= 50) return '#216e39';      // Dark green
    if (count <= 100) return '#164e26';     // Darker green
    return '#0d3319';
};

const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
};

const generateEmptyData = (days: number = 168): ActivityData[] => {
    const data: ActivityData[] = [];
    const today = new Date();

    // Find the next Sunday after today
    const nextSunday = new Date(today);
    nextSunday.setDate(today.getDate() + (7 - today.getDay()));

    // Start from days before the next Sunday
    const startDate = new Date(nextSunday);
    startDate.setDate(nextSunday.getDate() - days);

    for (let i = 0; i < days; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);

        data.push({
            date: formatDate(date),
            day: date.getDay() + 1, // 1-7 for Sunday-Saturday
            week: Math.floor(i / 7),
            count: 0
        });
    }

    return data;
};

interface RoundedSquareProps extends ScatterProps {
    date?: string;
}

const RoundedSquare: ScatterProps['shape'] = (props: RoundedSquareProps) => {
    const { x = 0, y = 0, width = 0, height = 0, fill = '#000', radius = 2, date } = props;
    const opacity = date && new Date(date) > new Date() ? 0 : 1;

    return (
        <rect
            x={x}
            y={y}
            width={width}
            height={height}
            fill={fill}
            rx={radius}
            ry={radius}
            opacity={opacity}
        />
    );
};

export const ActivityHeatmap = () => {
    const { user } = useUser();
    const { data: activityData } = useQuery(GET_USER_DAILY_ACTIVITY, {
        variables: { where: { clerkId: user?.id } } satisfies QueryUsersArgs,
        skip: !user?.id
    });

    const baseData = generateEmptyData();
    const activityMap = new Map(
        baseData.map(item => [item.date, { ...item }])
    );

    // Merge actual activity data
    if (activityData?.users?.[0]?.dailyActivity) {
        activityData.users[0].dailyActivity.forEach((activity: { date: string; count: number }) => {
            if (activityMap.has(activity.date)) {
                const existing = activityMap.get(activity.date)!;
                existing.count = activity.count;
            }
        });
    }

    const data = Array.from(activityMap.values());
    const chartConfig = {
        desktop: {
            label: "Desktop",
            color: "#2563eb",
        },
        mobile: {
            label: "Mobile",
            color: "#60a5fa",
        },
    } satisfies ChartConfig

    return (
        <ChartContainer config={chartConfig} className="h-32 w-full px-0 md:px-5">
            <ScatterChart
                margin={{ top: 5, right: 0, bottom: 5, left: 5 }}
                width={420}
                height={120}
            >
                <CartesianGrid strokeDasharray="30 30" vertical={false} horizontal={false}/>
                <XAxis
                    type="number"
                    dataKey="week"
                    domain={[0, 24]}
                    axisLine={false}
                    tickLine={false}
                    tick={false}
                    hide={true}
                />
                <YAxis
                    type="number"
                    dataKey="day"
                    domain={[1, 7]}
                    reversed
                    axisLine={false}
                    tickLine={false}
                    tick={false}
                    hide={true}
                    cursor="none"
                />
                <Tooltip
                cursor={false}
                    content={({ payload }) => {
                        if (!payload?.[0]?.payload) return null;
                        const data = payload[0].payload as ActivityData;
                        if (new Date(data.date) > new Date()) return null;

                        return (
                            <div className="bg-white p-2 shadow-lg rounded-lg border">
                                <p className="text-sm font-medium">{new Date(data.date).toLocaleDateString()}</p>
                                <p className="text-sm">{data.count} activities</p>
                            </div>
                        );
                    }}
                />
                <Scatter
                    data={data}
                    shape={<RoundedSquare />}
                    fill="#8884d8"

                >
                    {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={getColor(entry.count)}
                            width={9}
                            height={9}
                        />
                    ))}
                </Scatter>
            </ScatterChart>
        </ChartContainer>

    );
}; 