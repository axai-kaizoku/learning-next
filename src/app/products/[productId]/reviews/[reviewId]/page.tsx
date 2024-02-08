import React from 'react';
import { notFound } from 'next/navigation';

const Review = ({
	params,
}: {
	params: {
		productId: string;
		reviewId: string;
	};
}) => {
	if (parseInt(params.reviewId) > 1000) {
		notFound();
	}
	return (
		<div>
			Review {params.reviewId} for Product {params.productId}
		</div>
	);
};

export default Review;
