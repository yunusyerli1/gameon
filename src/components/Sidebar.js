import { useState, useEffect } from "react";
import axios from "axios";

export default function Sidebar({filterCategory}) {

    const [categories, setCategories ] = useState([]);

  

    const getCategories = async () => {
        const { data } = await axios.get(` http://localhost:3001/categories`);
        setCategories(data);
      };

    useEffect(() => {
        getCategories();
      }, [])

	return (
        <div className="hidden md:block">
            <h4 className="font-medium leading-tight text-2xl mt-0 mb-5 border-b-2 border-gray-100 py-2">Categories</h4>
            <ul>
                {categories.map( category =>  
                    <li key={category.id} 
                    className="font-medium leading-tight text-lg cursor-pointer hover:text-blue-600" 
                    onClick={()=>filterCategory(category.id)}>{category.name}</li>
                )}
            </ul>
        </div>
    )
}