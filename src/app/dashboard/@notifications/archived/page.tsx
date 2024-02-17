import Card from '@/components/Card';
import Link from 'next/link';

const ArchivedNotifications = () => {
	return (
		<Card>
			<div>Archived Notifications</div>
			<br />
			<Link
				href="/dashboard"
				className="btn shadow-xl">
				Default
			</Link>
		</Card>
	);
};

export default ArchivedNotifications;
