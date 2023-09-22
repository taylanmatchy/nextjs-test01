"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import { NextUIProvider } from "@nextui-org/react";

function Providers({ children }) {
  return (
    <NextUIProvider>
      <Provider store={store}>{children}</Provider>
    </NextUIProvider>
  );
}

export default Providers;
