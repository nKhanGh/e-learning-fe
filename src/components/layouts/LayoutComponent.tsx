"use client";

import { useState } from "react";
import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";

const LayoutClient = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      <Header openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <Sidebar open={openSidebar} />
      <div className={`transition-all duration-300 ${openSidebar ? 'ml-64' : 'ml-20'} p-6`}>
        {children}
      </div>
    </>
  );
}

export default LayoutClient;
