import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { applySchema } from '../utils/schemas';
import { useDispatch } from 'react-redux';
import { applyOnJob } from '../store/actions/JobActions';
import { useNavigate } from 'react-router-dom';
const ApplyForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(applySchema),
    });
    const dispatch = useDispatch();
    const [pdf, setPdf] = useState("");
    const [file, setFile] = useState('');
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        data.pdf = file
        dispatch(applyOnJob(data));
        navigate("/job/applied/preview");
    }


    const addResume = (e) => {
        const files = e.target.files;
        setFile(e.target.files[0]);
        files.length > 0 && setPdf(URL.createObjectURL(files[0]));
    };

    return (
        <form
            className="space-y-4 md:space-y-6"
            onSubmit={handleSubmit(onSubmit)}
        >
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
                    {...register("name")}
                />
                {errors.name && (
                    <span className="text-red-800 block mt-2">
                        {errors.name?.message}
                    </span>
                )}
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
                    {...register("email")}
                />
                {errors.email && (
                    <span className="text-red-800 block mt-2">
                        {errors.email?.message}
                    </span>
                )}
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
                    {...register("note")}
                />
                {errors.note && (
                    <span className="text-red-800 block mt-2">
                        {errors.note?.message}
                    </span>
                )}
            </div>

            <div>
                <label htmlFor='file'>Resume</label>
                <input
                    accept='application/pdf'
                    onChange={addResume}
                    type="file"
                    id="file"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                />
            </div>

            <div className='flex items-center w-full'>
                <button
                    disabled={isSubmitting}
                    type='submit'
                    name='apply for this position'
                    className='w-full md:w-fit flex items-center justify-center md:justify-end bg-primary-500 py-2 px-4 text-center rounded-md text-white hover:bg-primary-700 '>
                    Apply
                </button>
            </div>
        </form>
    )
}

export default ApplyForm