'use client';
import Image from "next/image";

interface ReelsBoxProps {
    id: string;
    profilePicture: string;
    mediaType: string;
    mediaUrl: string;
    username: string;
}

const ReelsBox: React.FC<ReelsBoxProps> = ({ id, profilePicture, mediaType, mediaUrl, username }) => {
    const handlePlay = (id: string) => {
        const videoElement = document.getElementById(id) as HTMLVideoElement;
        if (videoElement) {
            videoElement.play();
        }
    };

    const handlePause = (id: string) => {
        const videoElement = document.getElementById(id) as HTMLVideoElement;
        if (videoElement) {
            videoElement.pause();
        }
    };
    
    return (
        <div className="flex flex-col flex-none w-32 h-50 bg-black rounded-lg overflow-hidden shadow-md drop-shadow-md cursor-pointer">
            <div className="relative flex-1">
                <Image src={profilePicture} alt="Reel" className="absolute z-30 w-8 h-8 rounded-full outline-3 outline-blue-500 top-3 left-3" width={50} height={50} />
                <p className="absolute z-50 bottom-1 left-3 text-sm text-white text-shadow-md">{username}</p>
                {mediaType == 'video' ? (
                    <video id={id} className="absolute w-full h-auto opacity-85 z-0" muted onMouseOver={() => handlePlay(id)} onMouseOut={() => handlePause(id)} loop>
                        <source src={mediaUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <Image src={mediaUrl} alt="Reel" className="w-full h-full z-20" fill />
                )}

            </div>
        </div>
    );
}

export default ReelsBox;