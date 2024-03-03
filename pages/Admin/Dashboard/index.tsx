import Header from "../../../shared/adminComponents/Header/Header";
import SideBar from "../../../shared/adminComponents/SideBar/SideBar";

import { useTranslation } from "react-i18next";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},{name: 'Page B', uv: 100, pv: 1000, amt: 2400},{name: 'Page C', uv: 300, pv: 1700, amt: 2400}];
const Dashboard: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div className="px-[19px] min-h-screen bg-[#1E1E30]">
      <Header />

      <div className='flex gap-x-4 justify-between relative'>
        <SideBar />

        <div className="w-full flex gap-[30px]">
          <div className="bg-[#27283C] rounded-[14px] max-w-[472px] max-h-[472px] w-full px-[24px] py-[16px] flex text-left flex-col gap-14">
            <p className="text-[#C7C7C7] text-[20px] font-medium">
              {
                t("Orders")
              }
            </p>

            <div className="w-full flex justify-center items-center">
              <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
              </LineChart>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}

export default Dashboard;