import { LineChart as LChart, Line, PieChart, Pie, BarChart, Bar} from "recharts";

const LineChat = () => {

    const mathMarksData = [
  { id: 1, "name": "Ayan", math: 78 },
  { id: 2, "name": "Bithi", math: 85 },
  { id: 3, "name": "Chinmoy", math: 67 },
  { id: 4, "name": "Disha", math: 92 },
  { id: 5, "name": "Elita", math: 74 },
  { id: 6, "name": "Fahim", math: 88 },
  { id: 7, "name": "Gias", math: 60 },
  { id: 8, "name": "Hridoy", math: 81 },
  { id: 9, "name": "Ishita", math: 95 },
  { id: 10, "name": "Junaid", math: 70 }
]

const dataRecharts = [
  { id: 1, name: "Ayan", math: 78, english: 82, science: 74 },
  { id: 2, name: "Bithi", math: 85, english: 79, science: 90 },
  { id: 3, name: "Chinmoy", math: 67, english: 72, science: 68 },
  { id: 4, name: "Disha", math: 92, english: 88, science: 95 },
  { id: 5, name: "Elita", math: 74, english: 81, science: 70 },
  { id: 6, name: "Fahim", math: 88, english: 85, science: 91 },
  { id: 7, name: "Gias", math: 60, english: 64, science: 58 },
  { id: 8, name: "Hridoy", math: 81, english: 76, science: 84 },
  { id: 9, name: "Ishita", math: 95, english: 93, science: 97 },
  { id: 10, name: "Junaid", math: 70, english: 74, science: 65 }
];



    return (
  
  
       <div>
       
          <LChart width={600} height={500} data={mathMarksData}>
            <Line dataKey="math"></Line>
          </LChart>
          <PieChart width={800} height={300} data={dataRecharts}>
            <Pie dataKey= 'english'></Pie>
          </PieChart>
        
       </div>
    );
};

export default LineChat;