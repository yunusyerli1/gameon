
import {useState} from "react";
import classNames from "classnames";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

export default function Search({searchQuery}) {

	const [open, setOpen] = useState(false);

	return (
		<div className="w-full sm:w-[268px] relative">
			
			<input id="searchInput" onFocus={() => setOpen(true)} onBlur={() => setOpen(false)} onChange={(e) => searchQuery(e.target.value)} type="text" placeholder="Search Game" className="h-9 outline-none pl-3 w-full rounded bg-[#efefef] placeholder:text-sm"/>
			<span  className={classNames({
				"absolute text-[#c7c7c7] hidden top-0 right-0 w-9 h-9 items-center justify-center": true,
				"!flex": open
			})}>
				<AiFillCloseCircle />
			</span>
            <span className={classNames({
				"absolute  pointer-events-none top-0 right-0 h-9 w-9 flex items-center justify-center": true,
				"hidden": open
			})}>
				<BiSearch/>
			</span>
				
			
		</div>
	)
}