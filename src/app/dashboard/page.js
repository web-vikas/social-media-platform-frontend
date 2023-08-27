"use client";
import React, { useState, useEffect } from "react";
import Body from "./Body";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";

const page = () => {
  const [isTopUPModalOpen, setIsTopUPModalOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [remarks, setRemarks] = useState("");
  const [currentBalance, setCurrentBalance] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (
      !localStorage.getItem("access_token") ||
      !localStorage.getItem("user_id") ||
      localStorage.getItem("is_authenticated") !== "true"
    ) {
      router.push("/");
    } else {
      init();
    }
  }, []);

  const handelTopupSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://social-media-platform-backend.vercel.app/v1/wallet/insert-amount",
        {
          customerId: localStorage.getItem("user_id"),
          creditBalance: amount,
          creditRemarks: remarks,
        },
        {
          headers: {
            Authorization: "Bearer: " + localStorage.getItem("access_token"),
          },
        }
      );

      if (res.status === 200) {
        toast.success("Added Successfully");
        setAmount("");
        setRemarks("");
        init();
        setIsTopUPModalOpen(false);
      } else {
        toast.error(res.data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred");
    }
  };
  const init = async () => {
    try {
      const res = await axios.post(
        "https://social-media-platform-backend.vercel.app/v1/wallet/get-amount",
        {
          id: localStorage.getItem("user_id"),
        },
        {
          headers: {
            Authorization: "Bearer: " + localStorage.getItem("access_token"),
          },
        }
      );
      if (res) {
        setCurrentBalance(res.data.credit_amount);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Header />
      <Body
        _this={{
          isTopUPModalOpen,
          setIsTopUPModalOpen,
          amount,
          setAmount,
          remarks,
          setRemarks,
          handelTopupSubmit,
          currentBalance,
        }}
      />
    </>
  );
};

export default page;
