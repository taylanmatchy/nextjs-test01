//@ts-nocheck
import Header from "@/components/Header/Header";
import React from "react";

export default function Naviglayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
