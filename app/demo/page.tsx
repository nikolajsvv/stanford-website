'use client';
import AudioComponent from '@/components/AudioComponent';
import audio from '../../data/studentContent/audio.json';
import images from '../../data/images.json';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

export default function DemoPage() {
	return (
		<div className='flex flex-col justify-center items-center min-h-screen'>
			<div className='w-full mx-auto p-4 lg:p-8'>
				<AudioComponent />
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

const getImageByPoem = (audio: any) => {
	return images.find((image) => image.id === audio.imageID) || defaultImage;
};
