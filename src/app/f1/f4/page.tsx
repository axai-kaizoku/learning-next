import Link from 'next/link';

export default function F4() {
	return (
		<div>
			F4 Page
			<br />
			<br />
			<Link
				href="/f1/f3"
				className="btn">
				F3
			</Link>
		</div>
	);
}
