import React, { useEffect, useState } from 'react'
import { getJobsBySkill } from '../store/actions/JobActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const fetchJobs = async (skill, dispatch , navigate) => {
    await dispatch(getJobsBySkill(skill));
    navigate("#jobs");
    
}
const Hero = () => {
    const navigate = useNavigate();
    const [skill, setSkill] = useState("");
    const dispatch = useDispatch();

    const handleSkill = (e) => {
        setSkill(e.target.value);
    }

    useEffect(() => {
        if (skill.length > 1) {
            fetchJobs(skill, dispatch , navigate);
        }
    }, [skill, dispatch , navigate]);

    return (
        <div className='h-[56.9vh] w-full mt-20 font-mono flex flex-col justify-center items-center'>
            <h2 className='text-3xl font-semibold text-primary-500 text-center'>Just type your skills and search jobs at your fingertips</h2>
            {/* <h5</h5> */}
            <div className='flex flex-col gap-2 items-center w-[90%] md:w-[50%] justify-center mt-20'>
                <label className='dark:text-white text-black text-xl' htmlFor="skill">Type a skill</label>
                <input
                    id='skill'
                    className='w-[90%] p-3 border-none outline-none bg-gray-200 mt-5 rounded-md'
                    onChange={handleSkill}
                    value={skill}
                    placeholder='Python'
                />
            </div>
        </div>
    )
}

export default Hero