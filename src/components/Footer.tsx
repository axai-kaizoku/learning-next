import Link from 'next/link';

const Footer = () => {
	return (
		<footer className="w-full h-fit py-4  bg-gray-100 flex flex-row justify-between ">
			<p className="px-3">&copy; CopyRights Reserved</p>
			<ul className="flex flex-row">
				<li className="px-8">
					<Link href="/about">About</Link>
				</li>
				<li className="px-8">
					<Link href="/dashboard">Dashboard</Link>
				</li>
				<li className="px-8">
					<Link href="/contact">Contact Us</Link>
				</li>
				<li className="px-8">Terms and Conditions</li>
			</ul>
		</footer>
	);
};

export default Footer;
