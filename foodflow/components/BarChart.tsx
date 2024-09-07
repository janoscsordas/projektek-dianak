"use client"

import { ChartContainer, type ChartConfig, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

const chartData = [
    { month: "Január", desktop: 186, mobile: 190 },
    { month: "Február", desktop: 100, mobile: 165 },
    { month: "Március", desktop: 56, mobile: 100 },
    { month: "Április", desktop: 23, mobile: 250 },
    { month: "Május", desktop: 54, mobile: 150 },
    { month: "Június", desktop: 300, mobile: 230 }
]

const chartConfig = {
  desktop: {
    label: "PC",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobil",
    color: "#60a5fa",
  },
} satisfies ChartConfig

export function Chart() {
    return (
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    )
}

const eatingChartData = [
    { row: "Naponta", fifteenToThirtyFour: 35.6, thirtyFiveToSixtyFour: 49, sixtyFiveAndUp: 71.4 },
    { row: "Hetente Gyümölcs", fifteenToThirtyFour: 48.5, thirtyFiveToSixtyFour: 41.8, sixtyFiveAndUp: 22.2, },
    { row: "Ritkábban vagy soha", fifteenToThirtyFour: 15.9, thirtyFiveToSixtyFour: 9.2, sixtyFiveAndUp: 6.5 },
    { row: "Naponta", fifteenToThirtyFour: 36, thirtyFiveToSixtyFour: 38.8, sixtyFiveAndUp: 51.4 },
    { row: "Hetente Zöldség", fifteenToThirtyFour: 51.8, thirtyFiveToSixtyFour: 50.4, sixtyFiveAndUp: 40.6 },
    { row: "Ritkábban vagy soha", fifteenToThirtyFour: 12.2, thirtyFiveToSixtyFour: 10.8, sixtyFiveAndUp: 8 }
]

const eatingChartConfig = {
    fifteenToThirtyFour: {
        label: "15-34",
        color: "#2563eb",
    },
    thirtyFiveToSixtyFour: {
        label: "35-64",
        color: "#60a5fa",
    },
    sixtyFiveAndUp: {
        label: "65+",
        color: "#93c5fd",
    }
} satisfies ChartConfig

export function EatingChart() {
    return (
        <ChartContainer config={eatingChartConfig} className="min-h-[200px] w-full">
            <BarChart accessibilityLayer data={eatingChartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                dataKey="row"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="fifteenToThirtyFour" fill="var(--color-fifteenToThirtyFour)" radius={4} />
                <Bar dataKey="thirtyFiveToSixtyFour" fill="var(--color-thirtyFiveToSixtyFour)" radius={4} />
                <Bar dataKey="sixtyFiveAndUp" fill="var(--color-sixtyFiveAndUp)" radius={4} />
            </BarChart>
        </ChartContainer>
    )
}
