import {
  CartesianGrid,
  LabelList,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useGetPrefName } from "../../hooks/useGetPrefName";
import { useQueriesPopulation } from "../../hooks/useQueriesPopulation";
import { usePrefecture } from "../../store/store";

export const MainChart = () => {
  const prefCodeArray = usePrefecture((state) => state.prefCodeArray);
  const result = useQueriesPopulation(prefCodeArray);
  const { getPrefName } = useGetPrefName();

  return (
    <section>
      <ResponsiveContainer width="100%" height={800}>
        <LineChart
          margin={{
            top: 50,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            type="number"
            dataKey="year"
            label={{
              value: "年度",
              position: "right",
              dx: -20,
              dy: 15,
            }}
            domain={[1960, 2045]}
            tick={{
              fontSize: 14,
            }}
            tickCount={18}
            allowDuplicatedCategory={false}
          />
          <YAxis
            label={{
              value: "人口数",
              position: "insideTopLeft",
              dy: -40,
            }}
            tick={{
              fontSize: 14,
            }}
            tickCount={8}
          />
          <Tooltip />
          <LabelList dataKey="name" position="top" />
          <Legend
            verticalAlign="top"
            height={36}
            wrapperStyle={{
              padding: "10px 10px 10px 60px",
              display: "block",
              height: "auto",
            }}
            contentStyleType="circle"
          />
          {result.map((data) => {
            if (!data.data || data.status !== "success") return null;

            return (
              <Line
                key={data.data.prefCode}
                data={data.data.data}
                name={getPrefName(data.data.prefCode)}
                type="linear"
                dataKey="value"
                stroke={`hsl(${data.data.prefCode * 19}deg, 100%, 35%)`}
                strokeWidth={1}
                dot={false}
              />
            );
          })}
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
};
