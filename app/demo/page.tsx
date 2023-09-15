'use client';
import AudioComponent from '@/components/AudioComponent';

export default function DemoPage() {
	return (
		<div className='flex flex-col justify-center items-center min-h-screen'>
			<div className='w-full mx-auto p-4 lg:p-8'>
				<AudioComponent />
			</div>
		</div>
	);
}
