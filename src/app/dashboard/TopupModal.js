import React from "react";

const TopupModal = ({ _this }) => {
  return _this.isTopUPModalOpen ? (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white w-6/12 h-3/6 p-4 rounded shadow-lg z-50 relative">
        <button
          onClick={() => _this.setIsTopUPModalOpen(false)}
          className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          Close
        </button>
        <h1 className="font-bold absolute top-0 left-2 m-2">TopUp</h1>
        <div className="mt-5">
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={_this.handelTopupSubmit}>
              <div>
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Amount
                </label>
                <div className="mt-2">
                  <input
                    id="amount"
                    name="amount"
                    type="number"
                    required
                    value={_this.amount}
                    onChange={(e) => _this.setAmount(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="remarks"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Remarks
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="remarks"
                    name="remarks"
                    type="text"
                    value={_this.remarks}
                    onChange={(e) => _this.setRemarks(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default TopupModal;
