
import {useState} from "react";
import classNames from "classnames";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

export default function Search() {

	const [open, setOpen] = useState(false)

	return (
		<div className="w-[268px] relative">
			
			<input onFocus={() => setOpen(true)} onBlur={() => setOpen(false)} type="text" placeholder="Search Game" className="h-9 outline-none pl-3 w-full rounded bg-[#efefef] placeholder:text-sm"/>
			<button onClick={() => setOpen(false)} className={classNames({
				"absolute text-[#c7c7c7] hidden top-0 right-0 w-9 h-9 items-center justify-center": true,
				"!flex": open
			})}>
				<AiFillCloseCircle />
			</button>
            <span className={classNames({
				"absolute  pointer-events-none top-0 right-0 h-9 w-9 flex items-center justify-center": true,
				"hidden": open
			})}>
				<BiSearch/>
			</span>
				
			
		</div>
	)
}