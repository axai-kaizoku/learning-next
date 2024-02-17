import wondersImages, { WonderImage } from '@/app/photo-feed/wonders';
import Image from 'next/image';

export default function Photo({ params: { id } }: { params: { id: string } }) {
	const photo: WonderImage = wondersImages.find((p) => p.id === id)!;
	return (
		<div className="container mx-auto my-10">
			<div className="w-1/2 mx-auto">
				<div>
					<h2 className="text-3xl text-center font-bold my-4">{photo.name}</h2>
				</div>
				<Image
					alt={photo.name}
					src={photo.src}
					className="w-full object-cover aspect-square"
				/>
				<div className="bg-white p-4">
					<h3>{photo.photographer}</h3>
					<h3>{photo.location}</h3>
				</div>
			</div>
		</div>
	);
}
