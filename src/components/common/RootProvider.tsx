"use client";
import Aos from "aos";
import React, { useEffect } from "react";

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);
  return <div>{children}</div>;
};

export default RootProvider;
