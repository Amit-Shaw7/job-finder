import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { loadUserIfTokenExists } from '../store/actions/AuthActions'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Hero from '../components/Hero'
import Jobs from '../components/Jobs'

const loadUser = async (navigate, dispatch) => {
    await dispatch(loadUserIfTokenExists(navigate));
}

const Home = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        loadUser(navigate, dispatch);
    }, [navigate, dispatch]);

    return (
        <div>
            <Navbar />
            <Hero />
            <Jobs />
        </div>
    )
}

export default Home