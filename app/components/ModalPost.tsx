import React, { ReactNode } from "react";
import CloseIcon from '@mui/icons-material/Close';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children?: ReactNode;
    title?: string;
}

const ModalPost: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-200/70 py-24">
            <div className="flex flex-col bg-white rounded-lg shadow-lg w-11/12 sm:w-1/2 lg:w-1/3 h-full">
                <div className="relative flex flex-none w-full h-fit items-center justify-center border-b-1 border-gray-200 p-4">
                    <h2 className="flex-1 text-lg text-center font-semibold">{title}</h2>
                    <button onClick={onClose} className="absolute right-4 h-10 w-10 rounded-full bg-gray-200 text-gray-500 hover:text-gray-700 hover:bg-gray-300">
                        <CloseIcon className="text-gray-600" sx={{ fontSize: 20 }} />
                    </button>
                </div>
                <div className="flex flex-1 p-4">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default ModalPost;