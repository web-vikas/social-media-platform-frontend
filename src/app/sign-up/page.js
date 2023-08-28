"use client";
import { useState } from "react";
import Body from "./Body";
import axios from "axios";
import { toast } from "react-toastify";
export default function SignUP() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isFormSubmitting, setIsFormSubmitting] = useState(false); // Function to handle form submission

  const SignUp = async () => {
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Password validation: at least 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special character
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Check email format
    if (!emailRegex.test(email)) {
      toast.error("Invalid email format");
      return;
    }

    // Check password format
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      );
      return;
    }

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const data = { name, email, password, confirmPassword };

    try {
      setIsFormSubmitting(true);
      const res = await axios.post(
        "https://social-media-platform-backend.vercel.app/v1/auth/sign-up",
        data
      );

      if (res.status === 200) {
        toast.success("User Created Successfully");
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setIsFormSubmitting(false);
      } else {
        setIsFormSubmitting(false);
        toast.error(res.data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while signing up");
    }
  };

  return (
    <Body
      props={{
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        SignUp,
        isFormSubmitting,
      }}
    />
  );
}
