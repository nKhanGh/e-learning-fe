"use client";
import { Bell, ChevronDown, List, MessageCircleMore } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [login, setLogin] = useState<boolean>(false);

  return (
    <div className="fixed top-0 left-0 w-full h-20 bg-white shadow-md flex items-center z-50 px-8">
      <button className="mr-12 hover:bg-blue-100 rounded-full cursor-pointer p-3 hover:text-primary focus:bg-blue-100 focus:text-primary">
        <List />
      </button>
      <Image src="/logo_blue.png" alt="Logo" width={140} height={40} />
      <button className="ml-auto mr-4 bg-gray-100 hover:bg-blue-100 rounded-full cursor-pointer p-3 hover:text-primary focus:bg-blue-100 focus:text-primary">
        <Bell />
      </button>
      <button className="mr-6 bg-gray-100 hover:bg-blue-100 rounded-full cursor-pointer p-3 hover:text-primary focus:bg-blue-100 focus:text-primary">
        <MessageCircleMore />
      </button>
      {login ? (
        <div className="h-16 flex items-center rounded-xl bg-gray-100 py-4 px-6 gap-4">
          <Image
            src="/default-avatar.jpg"
            alt="User Avatar"
            width={40}
            height={32}
            className="rounded-full border-4 box-content border-white"
          />
          <div>
            <p className="font-bold">Nguyen Huu Khang</p>
            <p className="text-sm font-bold text-primary">Student</p>
          </div>
          <button className="p-1 hover:bg-gray-200 rounded-full cursor-pointer">
            <ChevronDown />
          </button>
        </div>
      ) : (
        <>
          <button className="bg-primary w-36 h-10 text-white rounded-2xl cursor-pointer mr-4 hover:bg-blue-600">
            Đăng ký
          </button>
          <button
            className="bg-gray-300 w-36 h-10 text-primary border-3 hover:border-blue-600 hover:text-white box-border rounded-2xl cursor-pointer mr-4 hover:bg-blue-600"
            onClick={() => setLogin(!login)}
          >
            Đăng nhập
          </button>
        </>
      )}
    </div>
  );
};
export default Header;
