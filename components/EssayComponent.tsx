import Image from 'next/image';
import { useState } from 'react';
import img1 from '@/public/images/essays/sun_through_trees.webp';

type EssayComponentProps = {
	essay: {
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

export default function EssayComponent({ essay, image }: EssayComponentProps) {
	const [showFullView, setShowFullView] = useState(false);

	const handleViewClick = () => {
		setShowFullView(!showFullView);
	};
	return (
		<div className='group relative overflow-hidden rounded-2xl shadow-md aspect-square'>
			<Image
				src={image.path}
				alt={image.description}
				width={image.width}
				height={image.height}
				className='aboslute inset-0 object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105'
			/>
			<span className='absolute inset-0 bg-black opacity-50' />

			{/* Icon */}
			<div className='absolute top-3 left-3'></div>

			{/* Title, Author, Content */}
			<div className='flex flex-col absolute inset-0 items-left justify-end text-beige p-3 md:p-5 space-y-2 sm:space-y-3'>
				<h2 className='text-xl lg:text-2xl font-bold uppercase'>
					<span className='bg-gradient-to-r from-green-300 to-green-200 bg-[length:0px_5px] bg-left-bottom bg-no-repeat duration-500 hover:bg-[length:100%_10px] group-hover:bg-[length:100%_8px]'>
						{essay.title}
					</span>
				</h2>
				<p className='font-normal'>{essay.author}</p>
				<p className='font-light text-base truncate-line-4'>{essay.content}</p>
				<p
					className='text-base sm:text-md text-right cursor-pointer font-semibold hover:font-bold hover:text-light-orange'
					onClick={handleViewClick}
				>
					Read More
				</p>
			</div>
		</div>
	);
}
