import { getNames, thing } from "../lib/data";

export default async function Table() {
	const things = await getNames();

	return (
			<table className="text-white w-2/3 relative left-[16%]">
				<tbody className="bg-gray-900">
				{things.map((thing: thing) => (
					<tr key={thing.name} className="border-b last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
						<td className="whitespace-nowrap py-3 pl-6 pr-3">
							<div className="flex items-center gap-3">
								<p>{thing.name}</p>
							</div>
						</td>
					</tr>
				))}
				</tbody>
			</table>
	)
}
