import React from 'react';

const Card = () => {
	// w-1/3 h-4/5
	// p-4
	// className = 'p-4'
	return (
		<div className="py-4 px-10 flex flex-row justify-evenly">
			<div className="h-fit pb-8 border-solid border-4 border-gray-300 rounded-lg ">
				<div className="text-center">
					<h1 className="py-8 text-3xl">Heoooo</h1>
					<p className="px-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim facere
						assumenda explicabo asperiores recusandae optio incidunt a mollitia
						ex sapiente sit alias laudantium, vitae veniam maiores expedita
						nulla hic autem!
					</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
