"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "@/redux/features/userSlice";
import { fetchUsers } from "@/redux/features/userSlice";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.users);
  console.log(userData);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <main>
      <Header />
      <h1>Hello World!</h1>
    </main>
  );
}
