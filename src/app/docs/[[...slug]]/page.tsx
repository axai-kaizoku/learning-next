import Link from 'next/link';
import React from 'react';

export const metadata = {
	title: 'Docs',
};

const Docs = ({
	params,
}: {
	params: {
		slug: string[];
	};
}) => {
	if (params.slug?.length === 2) {
		return (
			<h1>
				Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
				<br />
				<br />
				<Link href="/docs">Docs Page</Link>
				<br />
				<Link href={`/docs/:slug`}>Feature</Link>
			</h1>
		);
	} else if (params.slug?.length === 1) {
		return (
			<h1>
				Viewing docs for feature {params.slug[0]}
				<br />
				<br />
				<Link href="/docs">Docs Page</Link>
				<br />
				<Link href={`/docs/:slug/:slug`}>Concept</Link>
			</h1>
		);
	}
	return (
		<div>
			Docs home page
			<br />
			<br />
			<Link href={`/docs/:slug`}>Feature</Link>
			<br />
			<Link href={`/docs/:slug/:slug`}>Concept</Link>
		</div>
	);
};

export default Docs;
