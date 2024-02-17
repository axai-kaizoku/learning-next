import Link from 'next/link';

export default function F1() {
	return (
		<div>
			F1 Page
			<br />
			<br />
			<Link
				className="btn"
				href="/f1/f2">
				F2
			</Link>
		</div>
	);
}
