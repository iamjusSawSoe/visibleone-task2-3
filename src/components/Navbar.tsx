import ImgProfile from "@/assets/navbar-profile.png";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import {
  MdHomeFilled,
  MdOutlineLibraryMusic,
  MdOutlineShowChart,
} from "react-icons/md";
import { PiUserListLight } from "react-icons/pi";
import { RiPlayList2Line } from "react-icons/ri";
import { SlPlaylist } from "react-icons/sl";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="bg-secondary px-7 py-10 text-third rounded-bl-[35px] w-[250px]">
      <div className="flex gap-3 items-center mb-10 mt-8">
        <Image
          src={ImgProfile}
          alt="profile image"
          className="object-cover rounded-full"
          width={30}
          height={50}
          priority={true}
        />
        <div className="flex flex-col gap-0">
          <div className="flex justify-center items-center gap-1">
            <span className="text-sm text-black font-semibold">Joshua </span>
            <FaChevronDown className="text-[10px]" />
          </div>
          <span className="text-[8px] w-10 text-gray-400 border-gray-400 border-[1px] border-solid rounded-sm">
            PREMIUM
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-gray-400 font-semibold text-xs">BROWSE</h2>
        <div className="flex gap-4 items-center cursor-pointer">
          <MdHomeFilled className="text-black" />
          <span className="font-bold text-sm text-black">Home</span>
        </div>
        <div className="flex gap-4 items-center cursor-pointer hover:text-black">
          <MdOutlineLibraryMusic />
          <span className="font-bold text-sm ">Songs</span>
        </div>
        <div className="flex gap-4 items-center cursor-pointer hover:text-black">
          <SlPlaylist />
          <span className="font-bold text-sm">Paylist</span>
        </div>
        <div className="flex gap-4 items-center cursor-pointer hover:text-black">
          <PiUserListLight />
          <span className="font-bold text-sm">Just for You</span>
        </div>
        <div className="flex gap-4 items-center cursor-pointer hover:text-black">
          <MdOutlineShowChart />
          <span className="font-bold text-sm">Top Charts</span>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-9">
        <div className="flex justify-between hover:text-black">
          <h2 className="text-gray-400 font-semibold text-xs">
            YOUR PLAYLISTS
          </h2>
          <IoIosAddCircleOutline className="cursor-pointer" />
        </div>
        <div className="flex gap-4 items-center cursor-pointer hover:text-black">
          <RiPlayList2Line />
          <span className="font-bold text-sm">Workout Mix</span>
        </div>
        <div className="flex gap-4 items-center cursor-pointer hover:text-black">
          <RiPlayList2Line />
          <span className="font-bold text-sm">Chilin{"'"} at Home</span>
        </div>
        <div className="flex gap-4 items-center cursor-pointer hover:text-black">
          <RiPlayList2Line />
          <span className="font-bold text-sm">Booping at Adobe</span>
        </div>
        <div className="flex gap-4 items-center cursor-pointer hover:text-black">
          <RiPlayList2Line />
          <span className="font-bold text-sm">XD 4 Life</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
