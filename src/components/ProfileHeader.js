import Search  from "./Search";
import { FaAngleLeft } from "react-icons/fa";

export default function ProfileHeader() {
    return(
        <div className="relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                        <div className=" flex flex-col gap-y-3.5">
                            <div className="flex  justify-start">
                                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                                <div className="ml-2 flex-auto">
                                    <div className="font-bold text-sm">Eric Beard</div>
                                    <div className="text-sm">I saw you won 500 SEK last time!</div>
                                </div>
                            </div>
                            <div>
                            <button className="flex justify-center items-center  gap-x-2 text-white bg-black hover:bg-blue-700  font-bold py-1 px-4 rounded">
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