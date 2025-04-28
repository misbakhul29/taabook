'use client';

import Image from "next/image";
import VideocamIcon from '@mui/icons-material/Videocam';
import CollectionsIcon from '@mui/icons-material/Collections';
import MovieIcon from '@mui/icons-material/Movie';
import ModalPost from "../../Modal";
import { useState } from "react";
import PostField from "./PostField";

const PostBox = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full bg-white rounded-lg shadow-md p-3">
        <div className="flex flex-1 w-full gap-2 border-b-1 border-gray-200 pb-3">
          <div className="relative w-10 h-10 flex flex-none rounded-full overflow-hidden">
            <Image src="/images/profile.jpg" alt="profile" fill />
          </div>
          <button onClick={handleOpen} className="flex flex-1 bg-gray-100 items-center justify-start gap-1 py-2 px-3 rounded-full cursor-pointer hover:bg-gray-200">
            <span className="text-gray-600 font-light ">Apa yang Anda Pikirkan, User?</span>
          </button>
        </div>
        <div className="flex flex-1 w-full gap-0.5 pt-2">
          <div className="flex flex-auto items-center justify-center gap-1 p-2 rounded-lg cursor-pointer hover:bg-gray-200">
            <VideocamIcon className="text-blue-500" sx={{ fontSize: 30 }} />
            <span className="text-sm text-gray-600 font-semibold">Video Siaran Langsung</span>
          </div>
          <div className="flex flex-auto items-center justify-center gap-1 p-2 rounded-lg cursor-pointer hover:bg-gray-200">
            <CollectionsIcon className="text-green-500" sx={{ fontSize: 24 }} />
            <span className="text-sm text-gray-600 font-semibold">Foto/Video</span>
          </div>
          <div className="flex flex-auto items-center justify-center gap-1 p-2 rounded-lg cursor-pointer hover:bg-gray-200">
            <MovieIcon className="text-pink-500" sx={{ fontSize: 30 }} />
            <span className="text-sm text-gray-600 font-semibold">Reels</span>
          </div>
        </div>
      </div>

      <ModalPost
        isOpen={open}
        onClose={handleClose}
        title="Buat Postingan"
      >
        <PostField />
      </ModalPost>
    </>
  );
}

export default PostBox;