import Image from 'next/image';
import { useEffect, useState } from 'react';
import EssayFullView from './EssayFullView';
import images from '../data/images.json';
// import DOMPurify from 'isomorphic-dompurify';

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
};

type essay = {
	id: string;
	title: string;
	author: string;
	content: string;
	description: string;
	section: string;
	imageID: string;
	link: string;
};

export default function EssayComponent({ essay }: EssayComponentProps) {
	const [showFullView, setShowFullView] = useState(false);

	// Set default essay image
	const defaultImage = {
		id: '',
		name: 'default.webp',
		path: '/images/essays/default.webp',
		author: '',
		description: 'Default image description',
		category: 'default',
		link: '',
		width: 640,
		height: 400,
	};

	// Grab image by essay
	const getImageByEssay = (essay: essay) => {
		return images.find((image) => image.id === essay.imageID) || defaultImage;
	};

	const essayImage = getImageByEssay(essay);

	useEffect(() => {
		return () => {
			document.body.classList.remove('no-scroll');
		};
	}, []);

	const handleViewClick = () => {
		if (!showFullView) {
			document.body.classList.add('no-scroll');
		} else {
			document.body.classList.remove('no-scroll');
		}
		setShowFullView(!showFullView);
	};

	// const cleanContent = DOMPurify.sanitize(essay.content);
	return (
		<div className='group relative overflow-hidden rounded-2xl aspect-square shadow-md shadow-mud '>
			<Image
				src={essayImage.path}
				alt={essayImage.description}
				width={essayImage.width}
				height={essayImage.height}
				className='aboslute inset-0 object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105'
			/>
			<span className='absolute inset-0 bg-black opacity-50' />

			{/* Icon */}
			<div className='absolute top-3 left-3'></div>

			{/* Title, Author, Content */}
			<div className='flex flex-col absolute inset-0 items-left justify-end text-beige p-3 md:p-5'>
				<div className='space-y-1'>
					<h2 className='text-xl lg:text-2xl font-bold uppercase'>
						<span className='bg-gradient-to-r from-green-300 to-green-200 bg-[length:0px_5px] bg-left-bottom bg-no-repeat duration-500 hover:bg-[length:100%_10px] group-hover:bg-[length:100%_8px]'>
							{essay.title}
						</span>
					</h2>
					<p className='font-normal text-primary-orange text-lg'>
						{essay.author}
					</p>
				</div>
				<p
					className='font-extralight font-serif text-base truncate-line-4'
					dangerouslySetInnerHTML={{
						__html: essay.content,
					}}
				/>
				<p
					className='text-base sm:text-md text-right cursor-pointer font-semibold hover:text-light-orange '
					onClick={handleViewClick}
				>
					Read More
				</p>
			</div>
			{showFullView && (
				<div className='fixed inset-0 flex items-center justify-center z-50 pt-10 backdrop-blur-sm overlay'>
					<EssayFullView
						essay={essay}
						isOpen={showFullView}
						onClose={handleViewClick}
					/>
				</div>
			)}
		</div>
	);
}
