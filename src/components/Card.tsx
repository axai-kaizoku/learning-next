import React from 'react';
const Card = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="p-24 m-4 shadow-sm hover:shadow-lg border flex justify-center items-center">
			<div>{children}</div>
		</div>
	);
};

export default Card;
