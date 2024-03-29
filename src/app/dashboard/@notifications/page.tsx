import Card from '@/components/Card';
import Link from 'next/link';

const Notifications = () => {
	return (
		<Card>
			<div>Notifications</div>
			<br />
			<Link
				href="/dashboard/archived"
				className="btn shadow-xl">
				Archived
			</Link>
		</Card>
	);
};

export default Notifications;
