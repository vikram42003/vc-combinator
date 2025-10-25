import React from "react";

import Navbar from "../components/Navbar";

import { workSans } from "../fonts";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className={workSans.className}>
      <Navbar />

      {children}
    </main>
  );
}
