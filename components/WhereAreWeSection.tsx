import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';

export default function WhereAreWeSection() {
	const titleInfo = {
		title: 'Where Are We',
		content:
			'Humanity is facing large-scale environmental change: what scientists call the sixth mass extinction; unprecedented heat estimated to render nearly a fifth of the world uninhabitable in 50 years; increased drought, declining pollinators, extreme storms, food and water insecurity; the potential displacement of hundreds of millions; and threats to health, livelihoods, homes, lives – particularly for the planet’s most already-vulnerable populations and those who have contributed to these environmental crises the least. With all of this, ecological grief, overwhelm, and existential anxiety are peaking, comprising a critical juncture. Students reflect on our current moment in history, highlighting experiences with environmental change from various perspectives.',
	};

	const titleVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};
	return (
		<section id='where-are-we' className='py-8 mx-auto'>
			<motion.div
				initial='hidden'
				animate='visible'
				variants={titleVariants}
				transition={{ duration: 1, delay: 0.5 }}
				className='w-full'
			>
				<SectionTitle sectionInfo={titleInfo} />
			</motion.div>
			<div className='px-4 md:px-8 lg:px-16'>REST OF CONTENT</div>
		</section>
	);
}
