import React from "react";
import TopUpModal from "./TopupModal";
import Loading from "@/components/Loading/index";

const Body = ({ _this }) => {
  return (
    <>
      <div>
        <div className="py-10 px-4">
          <div className=" text-white  bg-indigo-600 max-w-sm rounded-[8px] p-6">
            <div className="flex justify-between align-middle">
              <h1 className="mb-5 text-2xl font-extrabold ">Wallet</h1>
              <div className="">
                <div className="h-2 block p-3  bg-red-500 rounded-[50%]"></div>
                <span></span>
              </div>
            </div>
            <p className="mb-4">Utilities for setting the maximum </p>
            <h4 className="mb-10">${_this.currentBalance || 0}</h4>
            <button
              onClick={() => _this.setIsTopUPModalOpen(true)}
              className="bg-red-500 px-6 py-1 rounded-[4px] font-bold text-white hover:bg-red-700"
            >
              Topup
            </button>
          </div>
        </div>
        <div>{/* TODo - Passbook Page Here */}</div>
      </div>
      <TopUpModal _this={_this} />

      <Loading isShown={_this.isFormSubmitting} />
    </>
  );
};

export default Body;
