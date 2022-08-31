import { useContext, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import  AuthContext  from "../context/AuthProvider";
import ProfileHeader from "../components/ProfileHeader";
import GameList from "../components/GameList";
import Sidebar from "../components/Sidebar";

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
        <div className="relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-8 gap-4">
                <header className="col-span-8">
                    <ProfileHeader/>
                </header>
                    <div className="col-span-6"><GameList/></div>
                    <div className="col-span-2"> <Sidebar/></div>
                </div>
                
                   
            </div>
        </div>
    )
}

