import Table from "./ui/table";

export default function Home() {
  return (
	  <>
		  <div className="bg-gray-400 p-60"></div>
		  <div className="bg-gray-700"> </div>
		  <div className="absolute top-0 w-full">
		  	<div className="grid gap-20 grid-cols-2 m-20">
				<button className="bg-red-900">Pop</button>
				<button className="bg-green-900">Push</button>
			</div>
			<Table />
		  </div>
	  </>
  );
}
