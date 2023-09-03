"use client";

import React from "react";
import { Button } from "antd";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      LoginPage
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto max-w-md border-solid border-1 border-black flex flex-col gap-4"
      >
        <input
          placeholder="firstname"
          {...register("firstName")}
          className="border-solid border rounded-lg p-3 border-black "
        />
        <input
          placeholder="surname"
          {...register("lastName")}
          className="border-solid border rounded-lg p-3 border-black"
        />
        <select
          {...register("gender")}
          className="border-solid border rounded-lg p-3 border-black"
        >
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <input type="submit" />
      </form>
    </>
  );
}
