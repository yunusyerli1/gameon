import { useState, useEffect } from "react";
import axios from "axios";
import GameItem from "./GameItem";
export default function GameList() {

    const [games, setGames ] = useState([]);

    const getGames = async () => {
        const { data } = await axios.get(` http://localhost:3001/games`);
        setGames(data);
        console.log(data)
      };

    useEffect(() => {
        getGames();
      }, [])

	return (
        <div >
            <h4 className="font-medium leading-tight text-2xl mt-0 mb-5 border-b-2 border-gray-100 py-2">Games</h4>
            {games.map((game, index) => <GameItem key={index} game={game}/>)}
        </div>
    )
}