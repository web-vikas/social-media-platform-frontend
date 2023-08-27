import React from "react";
import { useRouter } from "next/navigation";
const Index = () => {
  const router = useRouter();
  const Logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("is_authenticated");
    router.push("/");
  };
  return (
    <>
      <header className="flex  justify-between items-center p-7 bg-slate-300">
        <div>
          <h1 className="text-xl font-extrabold">Home</h1>
        </div>
        <div className="">
          <button
            className="bg-indigo-600 px-6 py-1 rounded-[4px] font-bold text-white hover:bg-indigo-700"
            onClick={Logout}
          >
            Logout
          </button>
        </div>
      </header>
    </>
  );
};

export default Index;
