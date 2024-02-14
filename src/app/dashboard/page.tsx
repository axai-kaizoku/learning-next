import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Dashboard',
};

const Dashboard = () => {
	return (
		<div>
			<h1 className="text-center">Dashboard Page</h1>

			<table className="border-solid border-red-400 border text-center">
				<colgroup>
					<col style={{ width: '60%' }} />
					<col style={{ width: '40%' }} />
				</colgroup>
				<tr className="border-solid border-red-400 border  ">
					<th className="border-solid border-red-400 border ">Name</th>
					<th>Roll No.</th>
				</tr>
				<tr className="border-solid border-red-400 border ">
					<td className="border-solid border-red-400 border ">Axai</td>
					<td rowSpan={2}>84</td>
				</tr>
				<tr className="border-solid border-red-400 border ">
					<td className="border-solid border-red-400 border">Akshay</td>
				</tr>
				<tr className="border-solid border-red-400 border ">
					<td
						className="border-solid border-red-400 border "
						rowSpan={2}>
						Sanjana
					</td>
					<td>36</td>
				</tr>
				<tr className="border-solid border-red-400 border ">
					<td>36</td>
				</tr>
			</table>
		</div>
	);
};

export default Dashboard;
