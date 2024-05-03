'use client';

import { useState } from 'react';

export default function FilePage() {
	const [file, setFile] = useState<File>();
	const [name, setName] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isTokenSent, setIsTokenSent] = useState<boolean>(false);

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!file) return;

		try {
			const data = new FormData();
			data.set('name', name);
			data.set('file', file);
			setIsLoading(true);

			const res = await fetch('/api/file', {
				method: 'POST',
				body: data,
			});
			const dataFile = await res.json();
			console.log(dataFile);

			if (!res.ok) throw new Error(await res.text());
			if (data) {
				setIsTokenSent(true);
				setTimeout(() => {
					setIsTokenSent(false);
					setIsLoading(false);
				}, 10000);
			}
		} catch (e: any) {
			setIsLoading(false);
			console.log(e);
		}
	};

	return (
		<div className="flex w-full h-[80vh] justify-center pt-40">
			<div className="bg-slate-50 rounded-md shadow-lg p-10">
				<form
					onSubmit={onSubmit}
					className="flex flex-col gap-14 ">
					<input
						type="text"
						name="name"
						id="name"
						className="p-1.5 border rounded-md font-lg"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						type="file"
						name="file"
						className="p-1.5 border rounded-md font-lg"
						onChange={(e) => setFile(e.target.files?.[0])}
					/>
					<button
						type="reset"
						className={`p-2 border rounded-md font-lg   `}>
						{'reset'}
					</button>
					<button
						type="submit"
						className={`p-2 border rounded-md font-lg ${
							!isTokenSent ? 'cursor-pointer' : 'cursor-not-allowed'
						}  `}
						disabled={isTokenSent || isLoading}>
						{isTokenSent
							? 'Token sent.. please check your email address'
							: isLoading
							? 'One moment please...'
							: 'Send magic link'}
					</button>
				</form>
			</div>
		</div>
	);
}
