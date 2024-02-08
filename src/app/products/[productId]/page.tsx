import { notFound } from 'next/navigation';
import React from 'react';

const Product = ({
	params,
}: {
	params: {
		productId: string;
	};
}) => {
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
