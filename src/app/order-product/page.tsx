'use client';
import { useRouter } from 'next/navigation';

const OrderProduct = () => {
	const router = useRouter();
	const handleClick = () => {
		console.log('Placing your order');
		router.push('/');
	};
	return (
		<div>
			OrderProduct
			<br />
			<br />
			<button onClick={handleClick}>Place order</button>
		</div>
	);
};

export default OrderProduct;
