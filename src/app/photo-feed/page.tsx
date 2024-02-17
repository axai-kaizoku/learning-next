import Link from 'next/link';
import wonders from './wonders';
import Image from 'next/image';

export default function PhotoFeed() {
	return (
		<main className="container mx-auto">
			<h1 className="text-center text-4xl font-bold my-4">
				Seven Wonders of the World
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
				{wonders.map(({ id, src, name }) => (
					<Link
						key={id}
						href={`/photo-feed/${id}`}>
						<Image
							src={src}
							alt={name}
							className="w-full object-cover aspect-square"
						/>
					</Link>
				))}
			</div>
		</main>
	);
}
