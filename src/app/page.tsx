import Banner from '@/components/Banner';

export default function Home() {
	return (
		<main className="min-h-screen w-full">
			<Banner />
			<div className="text-center p-8">
				<h1 className="text-4xl py-12">Welcome to my blog</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus mollitia nemo voluptatibus quaerat enim quisquam
					praesentium laborum ipsam, quod facere autem aperiam expedita nostrum
					sint similique molestiae repellat voluptas corrupti!
				</p>
			</div>
		</main>
	);
}
