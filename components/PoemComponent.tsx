import Image from 'next/image';
import { useState } from 'react';
import DOMPurify from 'isomorphic-dompurify';

type PoemComponentProps = {
	poem: {
		id: string;
		title: string;
		author: string;
		content: string;
		description: string;
		section: string;
		imageID: string;
		link: string;
	};
	image: {
		id: string;
		name: string;
		path: string;
		author: string;
		description: string;
		category: string;
		link: string;
		width: number;
		height: number;
	};
};

export default function PoemComponent({ poem, image }: PoemComponentProps) {
	const [showOverlay, setShowOverlay] = useState(false);

	const cleanContent = DOMPurify.sanitize(poem.content);

	return (
		<div
			className='group relative overflow-hidden rounded-2xl shadow-md shadow-mud cursor-pointer w-96 min-h-[600px] '
			onMouseEnter={() => setShowOverlay(true)}
			onMouseLeave={() => setShowOverlay(false)}
			onClick={() => {
				// Implement expand or redirect logic here
			}}
		>
			<Image
				src={image.path}
				alt={image.description}
				width={image.width}
				height={image.height}
				className='absolute inset-0 object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105'
			/>
			{showOverlay ? (
				<span className='absolute inset-0 bg-black opacity-50' />
			) : (
				<span className='absolute inset-0 bg-black opacity-20' />
			)}

			<div className='flex flex-col absolute inset-0 items-center justify-center text-beige p-3 md:p-5 transition-all duration-500 group-hover:justify-start'>
				<h2 className='text-xl lg:text-2xl font-bold uppercase'>
					{poem.title}
				</h2>
				<p className='text-lg text-primary-orange'>{poem.author}</p>
				{showOverlay && (
					<div className='mt-4 overflow-y-auto max-h-[100%]'>
						<p
							className='font-light text-base overflow-auto'
							dangerouslySetInnerHTML={{ __html: cleanContent }}
						/>
					</div>
				)}
			</div>
		</div>
	);
}
