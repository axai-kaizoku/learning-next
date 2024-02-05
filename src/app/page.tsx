import Image from 'next/image';
import imgbruh from '../img/nodejs.png';

export default function Home() {
	return (
		<main className="min-h-screen w-full">
			<h1>Hi mom,</h1>

			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat minus
				illo provident consequuntur inventore vel aut ratione aperiam maxime,
				temporibus tempore minima quo illum iusto omnis modi magni voluptas eum?
			</p>

			<Image
				src={imgbruh}
				alt="demo-pic"
				width="100"
				height="100"
				className="w-full"
			/>
		</main>
	);
}
