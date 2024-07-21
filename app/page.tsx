import Table from "./ui/table";
import Link from "next/link";
import Button from "./ui/Button";

export default async function Home() {
	const style = "h-[200px] p-6 rounded-[0.4rem] text-[100px] text-center";
  return (
	  <>
		  <div className="bg-gray-400 p-60"></div>
		  <div className="bg-gray-700"> </div>
		  <div className="absolute top-0 w-full">
		  	<div className="grid gap-20 grid-cols-2 m-20">
				<Button className={`p-0 w-[100%] ${style} bg-red-900`}>Pop</Button>
				<Link className={`${style} bg-green-900`} href="/create-entry"><div>Push</div></Link>
			</div>
			<Table />
		  </div>
	  </>
  );
}
