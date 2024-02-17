import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Dashboard',
};

export default function Dashboard({
	children,
	users,
	revenue,
	notifications,
	login,
}: {
	children: React.ReactNode;
	users: React.ReactNode;
	revenue: React.ReactNode;
	notifications: React.ReactNode;
	login: React.ReactNode;
}) {
	const isLoggedIn = true;
	return isLoggedIn ? (
		<div>
			{children}
			<div className="flex">
				<div className="flex flex-col">
					<div>{users}</div>
					<div>{revenue}</div>
				</div>
				<div className="flex flex-1">{notifications}</div>
			</div>
		</div>
	) : (
		login
	);
}
