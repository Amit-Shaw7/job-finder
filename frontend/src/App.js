import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { useSelector } from 'react-redux';
import JobDetails from './pages/JobDetails';
import Preview from './pages/Preview';
import { Toaster } from 'react-hot-toast';


function App() {
  const { mode } = useSelector(state => state.theme);
  const { user } = useSelector(state => state.auth);
  return (
    <div className={mode === "dark" ? "dark" : "light"}>
      <div className='dark:bg-slate-800 bg-white'>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/job/:id" element={user ? <JobDetails /> : <Navigate to="/login" />} />
            <Route exact path="/job/applied/preview" element={user ? <Preview /> : <Navigate to="/login" />} />
          </Routes>
          <Toaster position='top-center' />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
