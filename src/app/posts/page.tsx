import Link from 'next/link';
import React from 'react';

const PostsPage = () => {
	const blogs = [
		{
			id: 1,
			name: 'Node js',
			desc: 'A man who changed web dev',
		},
		{
			id: 2,
			name: 'React js',
			desc: 'A man who changed web dev(frontend)',
		},
		{
			id: 3,
			name: 'Express js',
			desc: 'A man who changed web dev(apis)',
		},
	];
	return (
		<div className="min-h-screen">
			<h1 className="text-center text-4xl font-bold py-4">Blog Posts</h1>
			<ul>
				{blogs.map((b) => (
					<li key={b.id}>
						<Link href={`posts/${b.id}`}>
							<h2>{b.name}</h2>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PostsPage;
