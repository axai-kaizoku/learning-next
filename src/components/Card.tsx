import React from 'react';
const Card = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="p-24 m-1 shadow border flex justify-center items-center">
			{children}
		</div>
	);
};

export default Card;
