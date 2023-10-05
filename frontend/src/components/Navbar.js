import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdLightMode, MdOutlineLightMode } from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux'
import { logoutSuccess } from '../store/actions/AuthActions'
import { toggleMode } from '../store/reducers/AppSlice'

const Navbar = () => {
    const { user } = useSelector(state => state.auth);
    const { mode } = useSelector(state => state.theme);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch(logoutSuccess(navigate));
    }

    const changeModeTo = (mode) => {
        dispatch(toggleMode(mode));
    }

    return (
        <div className='dark:bg-slate-800 h-[60px] w-full bg-gray-50 shadow-md flex px-8 items-center justify-between'>
            <div>
                <img height="50px" width="60px" src="./logo.png" alt="Job finder" />
            </div>

            <div className='flex items-center gap-2'>
                {mode === "light"
                    ?
                    <MdOutlineLightMode onClick={() => changeModeTo("light")} fontSize="2rem" className='cursor-pointer p-1 text-md dark:text-white text-black' />
                    :
                    <MdLightMode onClick={() => changeModeTo("dark")} fontSize="2rem" className='cursor-pointer p-1 text-md dark:text-white text-black' />}
                {
                    user
                        ?
                        <button onClick={logout} className='py-2 px-4 text-center rounded-md text-white bg-primary-500'>Logout</button>
                        :
                        <Link to="/login">
                            <button className='py-2 px-4 text-center rounded-md text-white bg-primary-500'>Login</button>
                        </Link>
                }
            </div>
        </div>
    )
}

export default Navbar