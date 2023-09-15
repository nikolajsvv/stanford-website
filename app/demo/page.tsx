'use client';
import EssayComponent from '@/components/EssayComponent';
import essays from '../../data/studentContent/essays.json';
import poems from '../../data/studentContent/poems.json';
import images from '../../data/images.json';
import PoemComponent from '@/components/PoemComponent';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

export default function DemoPage() {
	// Filters content by section
	const filteredEssays = essays.filter(
		(essay) => essay.section === 'where are we'
	);
	const filteredPoems = poems.filter((poem) => poem.section === 'where are we');

	return (
		<>
			{/* ESsay component */}
			<div className='flex flex-col justify-center items-center min-h-screen'>
				<div className='w-full mx-auto p-4 lg:p-8'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 '>
						{filteredEssays.map((essay) => {
							const essayImage = getImageByEssay(essay);
							return (
								<EssayComponent
									key={essay.id}
									essay={essay}
									image={essayImage}
								/>
							);
						})}
					</div>
				</div>
			</div>
			<div className='flex flex-col justify-center items-center'>
				<div className='w-full mx-auto p-4 lg:p-8'>
					<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
						{filteredPoems.map((poem) => {
							const poemImage = getImageByPoem(poem);
							return (
								<PoemComponent key={poem.id} poem={poem} image={poemImage} />
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}

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

const getImageByEssay = (essay: any) => {
	return images.find((image) => image.id === essay.imageID) || defaultImage;
};

const getImageByPoem = (poem: any) => {
	return images.find((image) => image.id === poem.imageID) || defaultImage;
};
