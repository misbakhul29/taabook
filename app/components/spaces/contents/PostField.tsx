'use client';

import Image from "next/image";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { SetStateAction, useState } from "react";

const PostField = () => {
    const [warna, setWarna] = useState<string>("#ffffff");

    const settWarna = (value: SetStateAction<string>) => setWarna(value);
    
    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex flex-none h-fit w-full gap-2 px-4 py-2">
                <div className="relative w-10 h-10 flex flex-none rounded-full overflow-hidden">
                    <Image
                        src="/images/profile.jpg"
                        alt="profile"
                        fill
                        loading="lazy" />
                </div>
                <div className="flex flex-1 flex-col gap-0">
                    <span className="text-gray-900 font-normal">User</span>
                    <button type="button" className="flex items-center gap-1.5 w-fit text-sm bg-gray-200 px-2 rounded-md hover:bg-gray-300">
                        <PeopleAltIcon className="text-gray-800" sx={{ fontSize: 16 }} />
                        <span className="text-sm text-gray-800 font-light">Teman</span>
                        <ArrowDropDownIcon className="text-gray-800" sx={{ fontSize: 16 }} />
                    </button>
                </div>
            </div>

            <div className="flex flex-1 flex-col w-full gap-0.5 pt-2">
                <div className={`flex flex-1 flex-col bg-[${warna}]`}>
                    <textarea
                        className="flex flex-1 px-4 py-2 text-xl text-gray-900 rounded-lg resize-none focus:outline-none"
                        placeholder="Apa yang Anda Pikirkan, User?"
                        rows={3}
                    ></textarea>
                    <div className="flex flex-none h-fit w-full px-4 pb-4 gap-1">
                        <button onClick={() => settWarna('#ffffff')} className="w-6 h-6 bg-white rounded-md outline outline-gray-200 shadow-md"/>
                        <button onClick={() => settWarna('#fb2c36')} className="w-6 h-6 bg-red-500 rounded-md outline outline-white shadow-md"/>
                    </div>
                </div>
                <button type="submit" className="bg-blue-500 rounded-md p-2 m-4 text-white">Berikutnya</button>
            </div>
        </div >
    );
}

export default PostField;