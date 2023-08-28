import React from "react";

const index = ({ isShown }) => {
  return (
    <>
      {isShown ? (
        <div className="h-screen w-screen bg-[rgba(255,255,255,0.8)] flex justify-center items-center fixed inset-0 z-50">
          <div
            className="spinner-border h-96 w-96 bg-[url('/image/loadingdots2.gif')] bg-contain bg-no-repeat bg-blend-normal"
            role="status"
          ></div>
        </div>
      ) : null}
    </>
  );
};

export default index;
