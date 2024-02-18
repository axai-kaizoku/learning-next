import Modal from '@/components/Modal';
import Link from 'next/link';

const PostModal = () => {
	return (
		<Modal>
			<div className="min-h-screen bg-white w-full p-8 ">
				<h1 className="text-center font-bold text-4xl py-8">Blog Post</h1>
				<div className="px-16"></div>
				<div className="py-8 px-16">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
					tenetur sunt itaque unde necessitatibus, atque harum iure deleniti
					aliquam sit quam ex, impedit eius blanditiis quo porro delectus esse
					fuga! S
				</div>
			</div>
		</Modal>
	);
};

export default PostModal;
