import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { clearJobApplied } from '../store/reducers/JobSlice';

const Preview = () => {
    const { jobApplied } = useSelector(state => state.job);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const gotoHome = () => {
        navigate("/");
        dispatch(clearJobApplied())
    }
    return (
        <>
            <Navbar />
            {jobApplied?.name
                ?
                <div className='h-[90vh] w-full flex flex-col items-center justify-center'>
                    <div className='flex flex-col gap-y-5'>
                        <h1 className='text-2xl font-semibold text-primary-500 text-center'>Succesfully applied to this job post with the below details</h1>
                        <div>
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                placeholder="Your name"
                                value={jobApplied?.name}
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Email
                            </label>
                            <input
                                type="text"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                placeholder="Your name"
                                value={jobApplied?.email}
                            />

                        </div>

                        <div>
                            <label
                                htmlFor="note"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Cover letter note
                            </label>
                            <input
                                type="text"
                                id="note"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                placeholder="Your name"
                                value={jobApplied?.note}
                            />
                        </div>

                        <div className='flex items-center w-full'>
                            <button
                            onClick={gotoHome}
                                type='submit'
                                name='apply for this position'
                                className='w-full md:w-fit flex items-center justify-center md:justify-end bg-primary-500 py-2 px-4 text-center rounded-md text-white hover:bg-primary-700 '>
                                Ok
                            </button>
                        </div>
                    </div>
                </div>
                :
                <div className='h-[90vh] w-full flex items-center justify-center'>
                    <h1 className='text-2xl font-semibold text-primary-500 text-center'>Not yet applied to any job post.</h1>
                </div>
            }
        </>
    )
}

export default Preview