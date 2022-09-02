import { useContext, useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import  AuthContext  from "../context/AuthProvider";
import axios from "axios";
import ProfileHeader from "../components/ProfileHeader";
import GameList from "../components/GameList";
import Sidebar from "../components/Sidebar";

export default function Home() {

    let navigate = useNavigate();
    const { setUser } = useContext(AuthContext);
    const [ gameList, setGameList ] = useState([]);
    const [ filteredGames, setFilteredGames ] = useState([]);

    const filterCategory = (categoryId) => {
        let tempArray = [];
        gameList.forEach( game => {
            if(game.categoryIds.includes(categoryId)) tempArray.push(game);
            setFilteredGames(tempArray);
        });
    }

    const searchQuery = (term) => {
        let tempArray = [];
        gameList.forEach( game => {
            if(game.name.includes(term))tempArray.push(game);
            setFilteredGames(tempArray);
        })
    }

    const getGames = async () => {
        const { data } = await axios.get(` http://localhost:3001/games`);
        setGameList(data);
        setFilteredGames(data);
      };

      

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if(!storedUser) {
            navigate('/login');
        }
        else {
            setUser(JSON.parse(storedUser));
            getGames();
        }
      }, [navigate, setUser]);

    return(
        <div className="relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-8 gap-4">
                    <header className="col-span-8">
                        <ProfileHeader searchQueryHome={searchQuery}/>
                    </header>
                        <div className="col-span-8 md:col-span-6"><GameList gameList={filteredGames}/></div>
                        <div className="col-span-0 md:col-span-2"> <Sidebar filterCategory={filterCategory}/></div>
                </div>
                
                   
            </div>
        </div>
    )
}

