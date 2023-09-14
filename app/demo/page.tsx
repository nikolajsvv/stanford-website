'use client';
import EssayComponent from '@/components/EssayComponent';
import essays from '../../data/studentContent/essays.json';
import images from '../../data/images.json';

export default function DemoPage() {
	// Filters essays by section
	const filteredEssays = essays.filter(
		(essay) => essay.section === 'where are we'
	);

	return (
		<div className='flex justify-center items-center min-h-screen'>
			<div className='py-8 mx-auto px-8 lg:px-10'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
					{filteredEssays.map((essay) => {
						const essayImage = getImageByEssay(essay);
						return (
							<EssayComponent key={essay.id} essay={essay} image={essayImage} />
						);
					})}
				</div>
			</div>
		</div>
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
