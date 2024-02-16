import Card from '@/components/Card';
import Link from 'next/link';

export const metadata = {
	title: 'Posts',
};

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
		<div className="min-h-screen w-full">
			<h1 className="text-center text-4xl font-bold py-4">Blog Posts</h1>
			<ul className="flex flex-row w-full my-20 ">
				{blogs.map((b) => (
					<li key={b.id}>
						<Link href={`posts/${b.id}`}>
							<Card>{b.name}</Card>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PostsPage;
