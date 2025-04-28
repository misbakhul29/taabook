import Image from "next/image";
import AddIcon from '@mui/icons-material/Add';
import ReelsBox from "./contents/ReelsBox";
import { reelsData } from "@/app/data/ReelsData";

const ReelsArea = () => {
  return (
    <div className="flex gap-2 w-full h-full rounded-lg overflow-hidden overflow-x-scroll pb-1">
      <div className="flex flex-col flex-none w-32 h-50 bg-black rounded-lg overflow-hidden shadow-md drop-shadow-md">
        <div className="relative flex-1">
          <Image src="/images/profile.jpg" alt="Reel" className="w-full h-full" fill />
        </div>
        <div className="relative flex flex-none items-end h-1/4 w-full bg-white">
          <button type="button" id="plus-button" className="absolute -top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white outline-4 outline-white cursor-pointer hover:bg-blue-600 transition duration-200 ease-in-out">
            <AddIcon className="text-white" sx={{ fontSize: 24 }} />
          </button>
          <p className="flex flex-1 justify-center text-xs pb-1">Buat Cerita</p>
        </div>
      </div>

      {reelsData.map((reel) => (
        <ReelsBox key={reel.id} profilePicture={reel.user.profilePicture} mediaType={reel.media.type} mediaUrl={reel.media.url} username={reel.user.name} id={reel.id.toString()} />
      ))}
    </div>
  );
}

export default ReelsArea;