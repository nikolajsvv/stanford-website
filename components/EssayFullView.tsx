import { motion } from 'framer-motion';
import DOMPurify from 'dompurify';

type Essay = {
	id: string;
	title: string;
	author: string;
	content: string;
	description: string;
	section: string;
	imageID: string;
	link: string;
};

type EssayFullViewProps = {
	essay: Essay;
	isOpen: boolean;
	onClose: () => void;
};

const modalVariants = {
	open: { opacity: 1, y: 0 },
	closed: { opacity: 0, y: '-100%' },
};

const backdropVariants = {
	open: { opacity: 0.5 },
	closed: { opacity: 0 },
};

export default function EssayFullView({
	essay,
	isOpen,
	onClose,
}: EssayFullViewProps) {
	const handleContainerClick = (e: any) => {
		e.stopPropagation(); // Prevents the click from bubbling up
	};
	return (
		<>
			<motion.div
				variants={backdropVariants}
				initial='closed'
				animate={isOpen ? 'open' : 'closed'}
				className='fixed inset-0 bg-black transition-opacity'
				onClick={onClose}
			/>
			<motion.div
				onClick={handleContainerClick}
				className='fixed inset-0 flex items-center justify-center z-10'
				variants={modalVariants}
				initial='closed'
				animate={isOpen ? 'open' : 'closed'}
			>
				<div className='bg-white p-4 rounded-md max-w-3xl w-full overflow-y-auto h-screen md:h-3/4'>
					{/* Adjust top margin for mobile */}
					<h2 className='mt-12 md:mt-8 text-2xl sm:text-4xl font-bold font-source-sans-pro uppercase cursor-text'>
						{essay.title}
					</h2>
					<p className='text-xl text-primary-orange font-source-sans-pro capitalize cursor-text'>
						{essay.author}
					</p>
					<p
						className='mt-4 text-md sm:text-lg font-source-serif-pro cursor-text whitespace-pre-line'
						dangerouslySetInnerHTML={{
							__html: essay.content,
						}}
					/>

					{essay.description !== '' ? (
						<h2 className='mt-20 text-2xl font-source-sans-pro font-bold'>
							Process
						</h2>
					) : (
						''
					)}
					{essay.description !== '' ? (
						<p
							className='mt-4 text-md sm:text-lg font-source-serif-pro cursor-text'
							dangerouslySetInnerHTML={{
								__html: essay.description,
							}}
						/>
					) : (
						''
					)}

					<button
						className='mt-4 text-blue-600'
						onClick={(e) => {
							e.stopPropagation();
							onClose();
						}}
					>
						Close
					</button>
				</div>
			</motion.div>
		</>
	);
}
