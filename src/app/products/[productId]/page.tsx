import { notFound } from 'next/navigation';

import { Metadata } from 'next';

type Props = {
	params: {
		productId: string;
	};
};

// // Basic(simple) dynamic metadata

// export const generateMetadata = ({ params }: Props): Metadata => {
// 	return {
// 		title: `Product ${params.productId}`,
// 	};
// };

// // Async dynamic metadata

export const generateMetadata = async ({
	params,
}: Props): Promise<Metadata> => {
	const title = await new Promise((resolve) => {
		setTimeout(() => {
			resolve(`iphone ${params.productId}`);
		}, 100);
	});
	return {
		title: `Product ${title}`,
	};
};

const Product = ({ params }: Props) => {
	if (parseInt(params.productId) > 1000) {
		notFound();
	}
	return (
		<div>
			Product <br />
			productId : {params.productId}
		</div>
	);
};

export default Product;
