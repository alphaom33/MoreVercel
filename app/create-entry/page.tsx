'use client'

import { useActionState, useState } from "react"
import { sendEntry, State } from "../lib/data"

let textAreaState = { value: "" };

export default function Page() {
	const [postContent, setPostContent] = useState('');

	return (
		<div className="h-[500px]">
			<p className="text-center text-[75px]">Create Entry</p>
			<div className="p-[25px]"></div>
			<textarea value={postContent} onChange={(e) => { 
				return setPostContent(e.target.value);}} className="w-1/2 resize-none bg-gray-800 p-6 text-[25px] rounded-lg relative left-1/4" rows={5} />
			<div className="p-8"></div>
			<form action={sendEntry.bind(null, postContent)}>
				<button className="w-1/5 text-center text-[40px] p-4 bg-green-800 relative left-[40%]">Create</button>
			</form>
		</div>
	)
}
