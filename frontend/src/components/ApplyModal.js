import React from 'react'
import { MdClose } from "react-icons/md"
import ApplyForm from './ApplyForm';

const ApplyModal = ({ open, handleClose }) => {
    return (
        <div>
            {open && (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-70"
                            onClick={handleClose}
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="bg-white dark:bg-slate-800 relative w-full max-w-lg p-4 mx-auto rounded-md shadow-sm shadow-gray dark:shadow-none">
                                <MdClose onClick={handleClose} fontSize="1.1rem" className="absolute top-1 right-1 cursor-pointer text-xl text-black dark:text-white" />

                                <ApplyForm handleClose={handleClose}/>
                            </div>
                        </div>
                    </div>
                </>
            )}

        </div>
    )
}

export default ApplyModal