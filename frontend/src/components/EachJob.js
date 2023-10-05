import React from 'react'
import { Link } from 'react-router-dom'

const EachJob = ({ job }) => {
    return (
        <Link className='shadow-xl rounded-md' to={`job/${job?.job_id}`}>
            <div className="px-6 py-4 flex flex-col gap-3">

                <img height="100px" width="100px" src={job?.employer_logo} className="object-contain" alt="Company logo" />

                <p className="dark:text-gray-50 text-gray-700 font-bold text-xl mb-2">{job?.employer_name}</p>
                <p className="dark:text-gray-50 text-gray-700 text-base">
                    {job.job_description.slice(0, 30)}
                    {job?.job_description?.length > 30 && "..."}
                </p>

                <p className="dark:text-gray-50 text-gray-700 text-base">Location - {job?.job_country}</p>

                <p className="dark:text-gray-50 text-gray-700 text-base"    >Salary - {job?.job_min_salary ? `${job?.job_min_salary} USD` : "Best in industry"}</p>
                

            </div>
        </Link>
    )
}

export default EachJob