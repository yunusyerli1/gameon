import { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import  AuthContext  from "../context/AuthProvider";
import Search  from "./Search";
import { FaAngleLeft } from "react-icons/fa";

export default function ProfileHeader() {

    let navigate = useNavigate();

    const { user, setUser } = useContext(AuthContext);
    const handleLogout = async ()  => {
            const firstName = user.name.split(' ')[0];
            const response = await axios.post('http://localhost:3001/logout',{
                username: firstName.toLowerCase()
            });
            if(response.status === 200) {
                setUser({});
                localStorage.removeItem('user');
                navigate('/login');
            }
    }

    return(
        <div className="relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                        <div className=" flex flex-col gap-y-3.5">
                            <div className="flex  justify-start">
                                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src={user.avatar} alt=""/>
                                <div className="ml-2 flex-auto">
                                    <div className="font-bold text-sm">{user.name}</div>
                                    <div className="text-sm">{user.event}</div>
                                </div>
                            </div>
                            <div>
                            <button onClick={handleLogout} className="flex justify-center items-center  gap-x-2 text-white bg-black hover:bg-blue-700  font-bold py-1 px-4 rounded">
                                <FaAngleLeft size={20} />Log Out</button>
                            </div>
                        </div>
                        

                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        <Search/>
                    </div>
                </div>
            </div>
        </div>
)
}