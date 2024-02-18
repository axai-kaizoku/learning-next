export default function Layout({
	children,
	modal,
}: {
	modal: React.ReactNode;
	children: React.ReactNode;
}) {
	return (
		<div>
			{modal}
			{children}
		</div>
	);
}
