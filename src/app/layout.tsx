import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
	title: {
		default: 'Next.js Bruh!!',
		template: '%s | Next.js',
	},
	description: 'Next basic for learning',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Header />
				<main className="min-h-screen">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
