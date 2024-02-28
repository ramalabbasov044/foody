import type { NextPage } from "next";
import Head from "next/head";
import SideBar from "../../../shared/adminComponents/SideBar/SideBar";
import Header from "../../../shared/adminComponents/Header/Header";
import OrderComponent from "../../../shared/adminComponents/OrderComponent/OrderComponent";
import { useEffect, useState } from "react";
import { deleteOrder, getOrders } from "../../../services";
import swal from "sweetalert";
import { useTranslation } from "react-i18next";

const AdminOrders: NextPage = () => {
  const { t } = useTranslation()
  const [activeData,setActiveData] = useState([])

  const deleteOrderF = async (id:any) => {
    const orderObj = {
      order_id: id
    }
    
    const res:any = await deleteOrder(orderObj)
    renderOrders()
    if(res.status == 204){
      swal("order delete");
    };
  }

  const renderOrders = async () => {
    const res = await getOrders()
    setActiveData(res?.data.result.data)
  }

  useEffect(() => {
    renderOrders()
  },[])

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="px-[19px] min-h-screen bg-[#1E1E30]">
        <Header />
        <div className='flex gap-x-4 '>
          <SideBar />
          <div className="flex flex-col w-full">
            <div className="flex justify-between px-8 py-5 bg-[#27283c] mb-[52px] rounded-lg">
              <h3 className="text-[#C7C7C7] text-xl font-semibold">
                {
                  t("Orders")
                }
              </h3>
            </div>

            <div className="flex gap-x-10  gap-y-10 flex-wrap">
              {activeData?.length == 0 ? (
                <div className="flex justify-center items-center w-full h-[400px]">
                  <span className="loader">Loading</span>
                </div>
              ) : (
                <></>
              )}
              <OrderComponent callback={deleteOrderF} activeData={activeData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;