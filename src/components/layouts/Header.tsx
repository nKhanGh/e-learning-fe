"use client";
import { faChevronRight, faCircleUser, faGear, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Bell, ChevronDown, List, MessageCircleMore } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [login, setLogin] = useState<boolean>(false);
  const [openBoard, setOpenBoard] = useState<boolean>(false);

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
        <div className="h-16 relative flex items-center rounded-xl bg-gray-100 py-4 px-6 gap-4">
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
          <button
            className="p-1 hover:bg-gray-200 rounded-full cursor-pointer"
            onClick={() => setOpenBoard(!openBoard)}
          >
            <ChevronDown />
          </button>
            {openBoard && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-md shadow-lg p-2">
                    <div className="bg-gray-100 p-2 mb-4 rounded-md min-w-80">
                        <div className="flex gap-2 p-4">
                            <Image src="/default-avatar.jpg" alt="User Avatar" width={40} height={32} className="rounded-full border-4 box-content border-white" />
                            <div>
                                <p className="font-bold">Nguyen Huu Khang</p>
                                <p className="text-sm  text-gray-500">huukhang855@gmail.com</p>
                            </div>
                        </div>
                        <div className="w-full h-px bg-gray-300"></div>
                        <button className="block w-full text-left px-4 py-2 bg-gray-200 rounded-2xl mt-2 hover:bg-gray-300 justify-center">
                            <FontAwesomeIcon icon={faCircleUser} className="mr-2" />
                            Xem hồ sơ
                        </button>
                    </div>
                    <button className="block w-full text-left px-4 py-3 hover:bg-gray-100 mb-2 rounded-sm ">
                        <FontAwesomeIcon icon={faGear} className="mr-4" />
                        Cài đặt
                        <FontAwesomeIcon icon={faChevronRight} className="mr-2 ml-auto" />
                    </button>
                    <button className="w-full text-left px-4 py-3 hover:bg-gray-100 rounded-sm flex items-center justify-start">
                        <FontAwesomeIcon icon={faRightFromBracket} className="mr-4" />
                        Đăng xuất
                        <FontAwesomeIcon icon={faChevronRight} className="mr-2 ml-auto" />

                    </button>
                </div>
            )}
        </div>
      ) : (
        <>
          <button className="bg-primary w-36 h-10 text-white rounded-2xl cursor-pointer mr-4 hover:bg-blue-600 justify-center">
            Đăng ký
          </button>
          <button
            className="bg-gray-300 w-36 h-10 text-primary border-3 hover:border-blue-600 hover:text-white box-border rounded-2xl cursor-pointer mr-4 hover:bg-blue-600 justify-center"
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
