import Banner from '@/components/Banner';
import Link from 'next/link';

export default function Home() {
	return (
		<main className="min-h-screen w-full">
			<Banner />
			<div className="text-center p-8">
				<h1 className="text-4xl py-12">Welcome to my blog</h1>
				<p>
					different blow attention threw rough your swing laid stream familiar
					post bar pile scientific luck together there field boy bush liquid
					farm basket means balloon us appearance standard freedom unhappy
					example there military army joined follow during wealth mouth exchange
					opposite potatoes pool result dust chief pour slabs{' '}
					<Link href="/photo-feed">Photo Feed</Link>
				</p>
			</div>
		</main>
	);
}
