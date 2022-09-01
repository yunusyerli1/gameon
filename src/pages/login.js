import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import loginValidation  from "../validation/loginValidation";
import  AuthContext  from "../context/AuthProvider";

export default function Login() {

    const { setUser } = useContext(AuthContext);  
    const [ errMsg, setErrMsg] = useState('');
    let navigate = useNavigate();

    useEffect(() => {
      const storedUser = localStorage.getItem('user');
      if(storedUser) {
        setUser(JSON.parse(storedUser));
        navigate('/');
      }
    }, [navigate, setUser])

    const formik = useFormik({
        initialValues: {
        username: "",
        password: "",
        },
        onSubmit: async (values) => {
             try {
                const { data }= await axios.post('http://localhost:3001/login', {
                username:values.username,
                password: values.password
                });
                if(data.status === 'success') {
                  setUser(data.player)
                  localStorage.setItem('user', JSON.stringify(data.player));
                  setErrMsg('');
                  navigate('/');
                }
             } catch (err) {
                if(err.response.data.error) setErrMsg(err.response.data.error);
                else setErrMsg('Login Failed')
             }
        },
        validationSchema: loginValidation
    });

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <div className="objects">
            <img
              className="object_rocket"
              src="http://salehriaz.com/404Page/img/rocket.svg"
              width="40px"
              alt="rocket"
            />
            <div className="box_astronaut">
              <img
                className="object_astronaut"
                src="http://salehriaz.com/404Page/img/astronaut.svg"
                width="140px"
                alt="astronaut"
              />
            </div>
          </div>
          <h2 className="mt-6 text-center text-3xl tracking-tight font-bold ">Sign in to your account</h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                onChange={formik.handleChange}
                onBlur = {formik.handleBlur}
                value={formik.values.username}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
              
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur = {formik.handleBlur}
                value={formik.values.password}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            {formik.errors.username && formik.touched.username && (<span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{formik.errors.username}</span>)}
            {formik.errors.password && formik.touched.password &&  (<span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{formik.errors.password}</span>)}
            { errMsg && (<span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{errMsg}</span>)}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
            </div>

            <div className="text-sm">
              <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</Link>
            </div>
          </div>

          <div>
            <button type="submit" 
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-white group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd"/></svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
