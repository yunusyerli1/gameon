import GameItem from "./GameItem";

export default function GameList({gameList}) {

	return (
        <div >
            <h4 className="font-medium leading-tight text-2xl mt-0 mb-5 border-b-2 border-gray-100 py-2">Games</h4>
            {gameList.map((game, index) => <GameItem key={index} game={game}/>)}
        </div>
    )
}