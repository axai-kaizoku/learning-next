'use client';

import { useState, useRef, useEffect } from 'react';

export default function Timer() {
	const [time, setTime] = useState<number>(0);
	const [isRunning, setIsRunning] = useState<boolean>(false);
	const intervalRef = useRef<Number | null>(null);

	const formatTime = (timeInSeconds: any) => {
		const minutes = Math.floor(timeInSeconds / 60);
		const seconds = Math.floor(timeInSeconds % 60);
		return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
			2,
			'0',
		)}`;
	};

	const startStopwatch = () => {
		setIsRunning((prevIsRunning) => !prevIsRunning);
	};

	const resetStopwatch = () => {
		setTime(0);
		setIsRunning(false);
	};

	const tick = () => {
		setTime((prevTime) => prevTime + 1);
	};

	useEffect(() => {
		if (isRunning) {
			intervalRef.current = setInterval(tick, 1000) as any;
		} else {
			clearInterval(intervalRef.current as any);
		}
		return () => clearInterval(intervalRef.current as any);
	}, [isRunning]);

	return (
		<div className="flex w-full h-[90vh] justify-center items-center ">
			<div className="p-10 backdrop-blur-lg rounded-md flex flex-col gap-10">
				<div className="text-6xl font-extrabold text-center">
					{formatTime(time)}
				</div>
				<div className="flex p-2 rounded-md gap-8">
					<button
						onClick={startStopwatch}
						className={`p-1.5  rounded-md border ${
							isRunning
								? 'bg-red-300/50 text-red-800'
								: 'bg-green-300/50 text-green-800'
						}`}>
						{isRunning ? 'Stop' : 'Start'}
					</button>
					<button
						onClick={resetStopwatch}
						className="p-1.5  rounded-md border bg-blue-200 text-blue-800">
						Reset
					</button>
				</div>
			</div>
		</div>
	);
}
