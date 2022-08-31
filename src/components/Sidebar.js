import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {

    const [categories, setCategories ] = useState([]);

    const getCategories = async () => {
        const { data } = await axios.get(` http://localhost:3001/categories`);
        setCategories(data);
        console.log(data)
      };

    useEffect(() => {
        getCategories();
      }, [])
	return (
        <div>
            <h4 className="font-medium leading-tight text-2xl mt-0 mb-5 border-b-2 border-gray-100 py-2">Categories</h4>
            <ul>
                {categories.map( category =>  
                    <li key={category.id} className="">
                         <Link to="/" className="font-medium leading-tight text-lg hover:text-blue-600">{category.name}</Link></li>
                )}
            </ul>
        </div>
    )
}