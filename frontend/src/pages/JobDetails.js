import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchJob } from '../store/actions/JobActions';
import Container from '../components/Container';
import ApplyModal from '../components/ApplyModal';
import Loader from '../components/Loader';

const fetchJobsById = async (id, setJob, setLoading) => {
    setLoading(true);
    const job = await fetchJob(id);
    setJob(job);
    setLoading(false);
}

const JobDetails = () => {
    const params = useParams();
    const [job, setJob] = useState();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const openApplyModal = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    useEffect(() => {
        fetchJobsById(params?.id, setJob, setLoading);
    }, [params]);
    return (
        <>
            <Container>
                {
                    loading
                        ?
                        <div className='h-[95vh] w-full flex items-center justify-center'>
                            <Loader />
                        </div>
                        :

                        <div className="flex flex-col gap-5">

                            <div className='flex gap-y-5  flex-col'>
                                <img width="100px" src={job?.employer_logo} className="object-contain" alt="Company logo" />

                                <div className='text-black dark:text-white flex items-center justify-between'>
                                    <p className="font-bold text-4xl mb-2">{job?.employer_name}</p>
                                    <button onClick={openApplyModal} className='hidden md:flex w-full md:w-fit mt-5 py-2 px-4 text-center rounded-md text-white bg-sky-400'>
                                        Apply
                                    </button>
                                </div>
                            </div>

                            <p className="text-gray-700 dark:text-gray-100 text-md">
                                {job?.job_description}
                            </p>


                            <h3 className='text-black dark:text-white mt-10 text-2xl font-bold'>About job</h3>

                            <div className='flex gap-x-4 items-center'>
                                <h4 className='text-black dark:text-white text-xl font-semibold'>Job title : </h4>
                                <p className="text-black dark:text-white text-base font-semibold">{job?.job_title}</p>
                            </div>

                            <div className='flex gap-x-4 items-center'>
                                <h4 className='text-black dark:text-white text-xl font-semibold'>Location : </h4>
                                <p className="text-black dark:text-white text-base font-semibold">{job?.job_country} , {job?.job_city}</p>
                            </div>

                            <div className='flex gap-x-4 items-center'>
                                <h4 className='text-black dark:text-white text-xl font-semibold'>Job type : </h4>
                                <p className="text-black dark:text-white text-base font-semibold">{job?.job_employment_type}</p>
                            </div>

                            <div className='flex gap-x-4 items-center'>
                                <h4 className='text-black dark:text-white text-xl font-semibold'>Salary : </h4>
                                <p className="text-black dark:text-white text-base font-semibold">{job?.job_min_salary ? `${job?.job_min_salary} ${job?.job_salary_currency}` : "Best in industry"}</p>
                            </div>


                            <h3 className='text-black dark:text-white mt-10 text-2xl font-bold'>Job highlights</h3>


                            <div>
                                <h6 className='text-black dark:text-white text-md font-semibold'>Requirement</h6>
                                <ol className="mt-2 list-decimal ml-8">
                                    {
                                        job?.job_highlights?.Qualifications?.map((qualification) => (
                                            <li className='text-black dark:text-white'>{qualification}</li>
                                        ))
                                    }
                                </ol>
                            </div>

                            <div>
                                <h6 className='text-md font-semibold text-black dark:text-white'>Responsibilities</h6>
                                <ol className="mt-2 list-decimal ml-8">
                                    {
                                        job?.job_highlights?.Responsibilities?.map((responsibility) => (
                                            <li className='text-black dark:text-white'>{responsibility}</li>
                                        ))
                                    }
                                </ol>
                            </div>

                            <div>
                                <h6 className='text-black dark:text-white text-md font-semibold'>Benefits</h6>
                                <ol className="mt-2 list-decimal ml-8">
                                    {
                                        job?.job_highlights?.Benefits?.map((benefit) => (
                                            <li >{benefit}</li>
                                        ))
                                    }
                                </ol>
                            </div>


                            <div className='flex gap-2 flex-col'>
                                {
                                    job?.job_benefits?.map((benefit) => (
                                        <button disabled className="p-2 text-primary-500 border border-gray-400 text-sm rounded-xl flex items-center justify-center">{benefit?.split("_").join(" ")}</button>
                                    ))
                                }
                            </div>


                            <div className='w-full flex items-center justify-center md:justify-end'>
                                <button onClick={openApplyModal} className='w-full md:w-fit mt-5 py-2 px-4 text-center rounded-md text-white bg-sky-400'>
                                    Apply
                                </button>
                            </div>
                        </div>
                }
            </Container>
            <ApplyModal open={open} handleClose={handleClose} />
        </>
    )
}

export default JobDetails