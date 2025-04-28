'use client';
import Avatar from "@mui/material/Avatar";
import PublicIcon from '@mui/icons-material/Public';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ReplyIcon from '@mui/icons-material/Reply';
import { useTranslation } from 'react-i18next';
import { postsData } from "@/app/data/PostsData";
import Image from "next/image";

const PostArea = () => {
    const { t } = useTranslation();

    return (
        <>
            {postsData.map((post) => (
                <div key={post.id} className="flex flex-col gap-2 bg-white rounded-lg shadow-md w-full max-w-2xl">
                    <div className="flex gap-2 pt-4 px-4">
                        <Avatar src={post.user.profilePicture} sizes="sm" />
                        <span className="flex flex-col justify-between">
                            <p className="font-semibold text-sm">{post.user.name}</p>
                            <span className="flex items-center gap-1 text-gray-500 text-xs">
                                {t(post.time)}
                                <PublicIcon sx={{ fontSize: 16 }} className="text-gray-500" />
                            </span>
                        </span>
                    </div>
                    <div className="flex flex-col px-4">
                        <p className="text-sm text-gray-900">{t(post.description)}</p>
                    </div>
                    {post.media ? (
                        <div key={post.id} className="relative flex w-full h-auto justify-center items-center">
                            {post.media.type === 'image' && (
                                <Image src={post.media.url} alt={post.description} width={500} height={500} className="w-full h-auto" />
                            )}
                            {post.media.type === 'video' && (
                                <video controls className="w-full h-auto">
                                    <source src={post.media.url} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            )}
                        </div>
                    ) : null}
                    <div className="flex items-center justify-between border-t border-gray-300 pt-2 px-4">
                        <div className="flex gap-2 items-center">
                            <span className="flex items-center">
                                <ThumbUpIcon sx={{ fontSize: 16 }} className="text-blue-500" />
                                <FavoriteIcon sx={{ fontSize: 16 }} className="text-pink-500" />
                            </span>
                            <p className="text-xs text-gray-500">{post.likes / 1000}k</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="flex gap-1 items-center">
                                <ChatBubbleIcon sx={{ fontSize: 16 }} className="text-gray-500" />
                                <p className="text-xs text-gray-500">{post.comments}</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <ReplyIcon sx={{ fontSize: 16 }} className="text-gray-500 transform scale-x-[-1]" />
                                <p className="text-xs text-gray-500">{post.shares}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center pt-2 mx-4 border-t border-gray-300">
                        <div className="flex flex-auto gap-2 items-center justify-center cursor-pointer hover:bg-gray-100 rounded-lg p-2">
                            <ThumbUpIcon sx={{ fontSize: 24 }} className="text-gray-500" />
                            <p className="text-xs font-semibold text-gray-500">Like</p>
                        </div>
                        <div className="flex flex-auto gap-2 items-center justify-center cursor-pointer hover:bg-gray-100 rounded-lg p-2">
                            <ChatBubbleIcon sx={{ fontSize: 24 }} className="text-gray-500" />
                            <p className="text-xs font-semibold text-gray-500">Comment</p>
                        </div>
                        <div className="flex flex-auto gap-2 items-center justify-center cursor-pointer hover:bg-gray-100 rounded-lg p-2">
                            <ReplyIcon sx={{ fontSize: 24 }} className="text-gray-500 transform scale-x-[-1]" />
                            <p className="text-xs font-semibold text-gray-500">Share</p>
                        </div>
                    </div>
                    <div className="flex flex-col pt-2 mx-4 border-t border-gray-300 gap-2">
                        {post.commentsData.map((comment, index) => (
                            <div key={index} className="flex flex-col gap-2">
                                <div className="flex gap-2">
                                    <Avatar key={index} src={comment.user.profilePicture} sx={{ width: 28, height: 28 }} /><div className="flex flex-col gap-1 text-xs text-gray-900 bg-gray-100 rounded-lg p-2">
                                        <p className="font-semibold">{comment.user.name}</p>
                                        <p className="font-normal">{comment.text}</p>
                                    </div>
                                </div>
                                <span className="flex gap-2 text-xs text-gray-500 px-10">
                                    <p>{comment.time}</p>
                                    <p>like</p>
                                    <p>reply</p>
                                    <p>hide</p>
                                </span>
                            </div>
                        ))}

                    </div>
                    <div className="flex py-2 mx-4 border-t border-gray-300">
                        <div className="flex flex-auto gap-2 items-center p-2">
                            <Avatar src={'/images/profile.jpg'} sizes="sm" />
                            <input
                                type="text"
                                placeholder="Write a comment..."
                                className="flex-auto border border-gray-300 rounded-full text-sm bg-gray-100 p-2 focus:outline-none"
                                onFocus={(e) => e.target.placeholder = ''}
                                onBlur={(e) => e.target.placeholder = 'Write a comment...'}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault();
                                        // Handle comment submission logic here
                                    }
                                }} />
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default PostArea;

