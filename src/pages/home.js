import { useContext, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import ProfileHeader from "../components/ProfileHeader";
import  AuthContext  from "../context/AuthProvider";

export default function Home() {

    let navigate = useNavigate();
    const { setUser } = useContext(AuthContext);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if(!storedUser) navigate('/login');
        else {
            setUser(JSON.parse(storedUser))
        }
      }, [navigate, setUser])
    return(
        <>
        <ProfileHeader/>
            Home Sayfası
        </>
    )
}

