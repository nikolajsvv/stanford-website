// Purpose: Create a responsive audio component with an animated audio player using framer motion
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
	HiMiniSpeakerWave,
	HiPlayCircle,
	HiMiniPauseCircle,
} from 'react-icons/hi2';
import Image from 'next/image';
const audioFilePath = '/audio/gratitude-eli_rimer.mp3';
import backgroundImage from '../public/images/essays/default.webp';

const content = {
	id: 'audio001',
	audioFile: 'the_stanford_soundscape-maya_h_green.mp3',
	title: 'Example Audio',
	author: 'John Doe',
	transcript:
		'Ten bodies sat in the water waiting<br/>Yelping and wading for when the wave comes,<br/>Its grand face like a bulldozer, like a breeze<br/>From the eaves of the mountain, like all<br/>The power and force in a smile<br/>from a stranger across the street<br/>passing by like busy bee, off on their day,<br/>their hand in a wave, wave, waving<br/>no, not at me, but still I wave back<br/>for they understand what it’s like<br/>to be wanted. I reply, twinkling,<br/>that it’s okay if you don’t want to spend the night<br/>But I, I – I’m sorry: I’m a snuggle bug<br/>And my boyish brain races<br/>When I start to think of past times<br/>And past places and the way<br/>That all of our faces in the water tonight<br/>Stop and glimmer, calm with the setting sun<br/>Splitting over the Pacific like a runny yolk<br/>Like a frying pan like breakfast back home<br/>And hot coffee on the pot, steaming,<br/>And the glad kettle rising up of<br/>The hazy misting opalescence of color<br/>Of purples and crashing pinks<br/>Of great joyous cacophonies like<br/>Monet’s heartchild like glory<br/>As it paints the ocean tonight.<br/>And to the two birds playing above me,<br/>The fraternal pelicans on their northbound journey,<br/>And the child, cold against wet sand,<br/>Buzzing about, kelp keeling in its hand<br/>Running back to the dry land<br/>Where mother waits, a stalk of hay in her hair,<br/>Smiling, open arms, congratulating her daughter<br/>For just having SO MUCH FUN – thank you.<br/>As she ran past me she said, or rather<br/>Spoke with the ringlets on her head<br/>“Blessed is He who makes the Future easy”<br/>And I knew it was true – true as I know that eyes<br/>Bite, that eyes shine of channel to the soul<br/>And that never ever do I want to let go<br/>When embraced, when made small, when erased from<br/>The worries of this world through passion and love.<br/>I took off my wetsuit and prayed to the cliffs,<br/>Rosy cheeks blasted of seawater and succulents<br/>– I know that they’ll never crumble completely.<br/>So how to explain this feeling save by kissing you<br/>Kissing every one of you here with me today,<br/>To you I say I LOVE YOU, I love you truly<br/>For you have made it past the jump of bum<br/>to bum, of heartbeat clenches in stresses<br/>and the anxiety of growing up and growing apart,<br/>I know that if this were a playground<br/>I wouldn’t chase you too hard. I’d tag you, knuckles cold<br/>But not too cold and run about till my lungs froze<br/>That burn of autumn time recess still present<br/>When I walk over to my sneaky link and pause<br/>And think “God! I am SO DAMN LUCKY to be alive.”<br/>The sun set and I walked back to car the whole time<br/>Goochy-goochy-gooing the little plants and bushes<br/>That survived this far till my phone rang, paused,<br/>Placed between my ear and my shoulder<br/>The way that my mother would talk to hers<br/>While making rice and turning the music down low,<br/>But instead of the sweet fragrance of fried onions<br/>I pick sand from between my toes – thank you for calling.<br/>A text like a thought where your voice like hug<br/>Like wrestling my brother on the rug remembering<br/>When he was smaller but now he tickles me till I cry<br/>And we hang out all night strumming guitar<br/>Bon Iver Jacques Brel Car Seat Headrest<br/>– hell even some Strokes<br/>Cause who doesn’t like the Strokes? –<br/>We got this whole cornucopia of music right at our fingertips,<br/>Let me make you a playlist.<br/>It fills me with so much joy to have you all here today,<br/>Gathered round like all the poets COHO jazz<br/>With each other so close – but not too close –<br/>Don’t touch me, I’m sorry<br/>I just get nervous when breath holds me<br/>Like the river’s breath or this tree’s breath<br/>As it heaves its leaves upwards the stream of its bark<br/>To tower over me and tell me in the thousandth symphony<br/>Of cicada and croaking toad and chirping bird and woodwind violins<br/>That fills evening silence like the bluebell mist of<br/>Eucalyptus pines as they expire the sweet smells<br/>Soothing us into respite: “It’ll be okay!” –<br/>Thank you for coming,<br/>Thank you for being here today;<br/>I know it gets hard sometimes &<br/>I know god damn well that it gets dark sometimes too,<br/>But the moon, in its flower petal like apple sticker on the evening sky<br/>Shines bright, every night,<br/>And every night leads every day leads<br/>The eternity that life has survived through love – thank you.<br/>',
	description: '',
	section: 'how do we make sense of it all',
	imageID: 'img004',
	link: '',
	additional: 'the_stanford_soundscape-maya_h_green.pdf',
};

type AudioComponentProps = {
	poem: {
		id: string;
		audioFile: string;
		title: string;
		author: string;
		transcript: string;
		description: string;
		section: string;
		imageID: string;
		link: string;
		additional: string;
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

// imports audioFile, content, backgroundImage
export default function AudioComponent() {
	const { title, author } = content;

	const audioPlayerRef = useRef<HTMLAudioElement>(null);
	const progressBarRef = useRef<HTMLInputElement>(null);

	const [currentTime, setCurrentTime] = useState<number>(0);
	const [duration, setDuration] = useState<number>(0);

	const [isPlaying, setIsPlaying] = useState(false);
	const [showFullView, setShowFullView] = useState(false);

	useEffect(() => {
		let audioPlayer = audioPlayerRef.current;

		const handleTimeUpdate = () => {
			const current = audioPlayer?.currentTime || 0;

			setCurrentTime(current);

			// Fallback for duration if metadata isn't loaded
			if (!duration && audioPlayer?.duration) {
				setDuration(audioPlayer.duration);
			}
		};

		const handleLoadedMetadata = () => {
			if (!duration && audioPlayer?.duration) {
				setDuration(audioPlayer.duration);
			}
			setCurrentTime(audioPlayer!.currentTime);
		};

		const handleAudioEnded = () => {
			setCurrentTime(0);
			setIsPlaying(false);
		};

		audioPlayer?.addEventListener('timeupdate', handleTimeUpdate);
		audioPlayer?.addEventListener('loadedmetadata', handleLoadedMetadata);
		audioPlayer?.addEventListener('ended', handleAudioEnded);

		return () => {
			audioPlayer?.removeEventListener('timeupdate', handleTimeUpdate);
			audioPlayer?.removeEventListener('loadedmetadata', handleLoadedMetadata);
			audioPlayer?.removeEventListener('ended', handleAudioEnded);
		};
	}, []);

	const playAudio = () => {
		audioPlayerRef.current?.play();
		setIsPlaying(true);
	};

	const pauseAudio = () => {
		audioPlayerRef.current?.pause();
		setIsPlaying(false);
	};

	const formatTime = (timeInSeconds: number): string => {
		const minutes: number = Math.floor(timeInSeconds / 60);
		const secondsValue: number = Math.floor(timeInSeconds - minutes * 60);
		const formattedSeconds: string =
			secondsValue < 10
				? '0' + secondsValue.toString()
				: secondsValue.toString();
		return `${minutes}:${formattedSeconds}`;
	};

	const handleProgressBarClick = (event: React.MouseEvent<HTMLDivElement>) => {
		const progressBar = progressBarRef.current;
		const rect = progressBar!.getBoundingClientRect();
		const offsetX = event.clientX - rect.left;
		const progressBarWidth = rect.width;
		const seekTime = (offsetX / progressBarWidth) * duration;
		audioPlayerRef.current!.currentTime = seekTime;
	};

	const progressPercentage = (currentTime / duration) * 100;

	const handleViewClick = () => {
		setShowFullView(!showFullView);
	};

	// Read from audio file to pull

	return (
		<motion.div
			className='group relative w-full pb-[75%] overflow-hidden rounded-2xl shadow-md shadow-mud'
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			viewport={{ once: true }}
		>
			<audio src={audioFilePath} ref={audioPlayerRef} />

			<Image
				src={backgroundImage}
				alt={title}
				className='absolute inset-0 object-cover w-full h-full rounded-2xl transform transition-transform duration-500 group-hover:scale-105'
			/>
			<div className='absolute inset-0 bg-black opacity-50 rounded-2xl' />

			<div className='absolute top-0 left-0 p-4 text-gray-400 flex items-center'>
				{isPlaying ? (
					<HiMiniSpeakerWave className='h-6 w-6 md:h-8 md:w-8 animate-pulse text-gray-300' />
				) : (
					<HiMiniSpeakerWave className='h-6 w-6 md:h-8 md:w-8 group-hover:scale-110 group-hover:text-gray-300' />
				)}
			</div>

			<div className='absolute inset-0 items-center justify-center text-light-beige p-5 flex flex-col space-y-2 overflow-y-auto'>
				<h2 className='uppercase text-beige font-sans font-bold tex t-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center'>
					{title}
				</h2>
				<p className='text-light-orange text-xl'>{author}</p>
				<div>
					{!isPlaying ? (
						<HiPlayCircle
							className='h-12 w-12 text-white cursor-pointer rounded-full transition-all duration-300 hover:scale-125'
							onClick={playAudio}
						/>
					) : (
						<HiMiniPauseCircle
							className='h-12 w-12 text-white cursor-pointer rounded-full transition-all duration-300 hover:scale-125'
							onClick={pauseAudio}
						/>
					)}
				</div>
				<p
					className='cursor-pointer p-4 font-extralight text-beige hover:font-normal hover:text-light-orange'
					onClick={handleViewClick}
				>
					Transcript
				</p>
				<div className='text-beige flex justify-between w-full absolute bottom-4 font-extralight'>
					<div className='text-left left-0 pl-2'>{formatTime(currentTime)}</div>
					<div className='text-right right-0 pr-2'>{formatTime(duration)}</div>
				</div>
			</div>
			<div
				className='absolute bottom-0 left-0 w-full h-4 overflow-hidden rounded-b-3xl cursor-pointer'
				ref={progressBarRef}
				onClick={handleProgressBarClick}
			>
				<div className='h-full bg-dark-green rounded-b-3xl'>
					<motion.div
						className='h-full bg-light-orange'
						style={{ width: `${progressPercentage}%` }}
					></motion.div>
				</div>
			</div>
		</motion.div>
	);
}
