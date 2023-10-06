import React from 'react'
import EachJob from './EachJob'
import { useSelector } from 'react-redux'
import Loader from './Loader';

const Jobs = () => {
    const { jobs, loading } = useSelector(state => state.job);
    return (
        <section id='jobs'>
            {
                loading
                    ?
                    <div className='h-[30vh] w-full flex items-center justify-center'>
                        <Loader />
                    </div>
                    :

                    <div class="px-8 lg:px-20 md:px-12 py-5 mt-32 w-full rounded overflow-hidden grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-x-4 gap-y-5">
                        {
                            jobs?.map((job) => (
                                <EachJob key={job.job_id} job={job} />
                            ))
                        }
                    </div>
            }
        </section>
    )
}

export default Jobs