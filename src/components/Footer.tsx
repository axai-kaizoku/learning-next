import React from 'react';

const Footer = () => {
	return (
		<div className="w-full h-fit py-4  bg-gray-100 flex flex-row justify-between fixed left-0 bottom-0">
			<p>&copy; CopyRights Reserved</p>
			<ul className="flex flex-row">
				<li className="px-8">About</li>
				<li className="px-8">Contact us</li>
				<li className="px-8">Terms and Conditions</li>
			</ul>
		</div>
	);
};

export default Footer;
