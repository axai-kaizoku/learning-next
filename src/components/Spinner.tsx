import React from 'react';

const Spinner = () => {
	return (
		<div>
			<div className="h-screen w-full flex justify-center items-center">
				<div className="h-12 w-12 rounded-full border-solid border-4 border-gray-200  border-t-blue-400 animate-spin"></div>
			</div>
		</div>
	);
};

export default Spinner;
