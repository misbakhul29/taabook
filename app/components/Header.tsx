'use client'

import Image from "next/image";
import Link from "next/link";
import SearchIcon from '@mui/icons-material/Search';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import GroupsIcon from '@mui/icons-material/Groups';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ChatIcon from '@mui/icons-material/Chat';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { usePathname } from "next/navigation";

export const Header = () => {
    const currentPath = usePathname();

    return (
        <header className="absolute z-50 flex w-full items-center justify-between gap-12 bg-white text-gray-800 shadow-sm px-4">
            <div className="flex flex-none w-1/4 items-center gap-2 py-2">
                <Image src={"/icons/logo.svg"} alt={"logo"} width={40} height={40} />
                <div className="relative flex flex-none w-3/4 gap-1 items-center bg-gray-200 rounded-full px-2 overflow-hidden">
                    <SearchIcon className="scale-90 text-gray-500" />
                    <input type="search" name="main-search" id="main-search" placeholder="Cari di Taabook" className="py-2.5 rounded-full text-sm focus:outline-0 font-[family-name:var(--font-geist-sans)]" />
                </div>
            </div>
            <nav className="flex flex-1 relative">
                <div className="absolute -bottom-0.5 flex w-full h-full items-center justify-center gap-1">
                    <Link href="/" className={`flex flex-1 items-center justify-center ${currentPath === '/' ? 'text-blue-500 border-b-3 border-blue-500' : 'text-gray-500'}`}>
                        <HomeFilledIcon fontSize="large" className="m-2" />
                    </Link>
                    <Link href="/reels" className={`flex flex-1 items-center justify-center ${currentPath === '/reels' ? 'text-blue-500 border-b-3 border-blue-500' : 'text-gray-500'}`}>
                        <SmartDisplayIcon fontSize="large" className="m-2" />
                    </Link>
                    <Link href="/market" className={`flex flex-1 items-center justify-center ${currentPath === '/market' ? 'text-blue-500 border-b-3 border-blue-500' : 'text-gray-500'}`}>
                        <StorefrontIcon fontSize="large" className="m-2" />
                    </Link>
                    <Link href="/groups" className={`flex flex-1 items-center justify-center ${currentPath === '/groups' ? 'text-blue-500 border-b-3 border-blue-500' : 'text-gray-500'}`}>
                        <GroupsIcon fontSize="large" className="m-2" />
                    </Link>
                    <Link href="/games" className={`flex flex-1 items-center justify-center ${currentPath === '/games' ? 'text-blue-500 border-b-3 border-blue-500' : 'text-gray-500'}`}>
                        <SportsEsportsIcon fontSize="large" className="m-2" />
                    </Link>
                </div>
            </nav>
            <div className="flex flex-none w-1/4 items-center justify-end gap-2">
                <div className="w-[40px] h-[40px] bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-all duration-200 ease-in-out">
                    <WidgetsIcon sx={{ fontSize: 20 }} />
                </div>
                <div className="w-[40px] h-[40px] bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-all duration-200 ease-in-out">
                    <ChatIcon sx={{ fontSize: 20 }} />
                </div>
                <div className="w-[40px] h-[40px] bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-all duration-200 ease-in-out">
                    <NotificationsIcon sx={{ fontSize: 24 }} />
                </div>
                <div className="relative w-[40px] h-[40px] bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-all duration-200 ease-in-out">
                    <Image src={"/images/profile.jpg"} alt={"profile"} fill className="z-10 rounded-full" priority />
                    <div className="absolute z-20 -bottom-0.5 -right-0.5 flex w-fit h-fit bg-gray-200 outline-2 outline-white rounded-full items-center justify-center gap-1">
                        <ExpandMoreIcon className="z-20 text-gray-700" sx={{ fontSize: 14 }} />
                    </div>
                </div>
            </div>
        </header>
    );
}