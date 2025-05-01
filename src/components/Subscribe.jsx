import React from "react";
import send from "../assets/send.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const schema = yup.object().shape({
  email: yup.string().email().required("Email is required").trim(),
});

const Subscribe = () => {
  const [error, setError] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    alert("Your email has been added");
    setError(false);
    reset();
  };

  return (
    <div className="container bg-purple-100 h-screen max-h-[400px] mt-[70px] rounded-md rounded-tl-[200px] relative">
      <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-gray-600 font-[800] text-[10px] md:text-[25px] text-center mb-[20px]">
            Subscribe to get information, latest news and ,<br /> other,
            interesting offers about Cobham
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-4 ">
            <input
              type="email"
              placeholder="Enter email"
              {...register("email")}
              className="outline-amber-400 border-2 border-gray-300 rounded-full block w-full mx-auto max-w-[400px] h-[50px] px-4 py-2"
            />
            <p className="text-red-500 text-sm">{errors.email?.message}</p>
            <button
              type="submit"
              className="w-[250px] h-[50px] bg-amber-500 text-white rounded-lg"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
      <img
        src={send}
        alt="send"
        className="absolute top-[-30px] right-[-20px]"
      />
    </div>
  );
};

export default Subscribe;
