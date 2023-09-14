'use client';
import { useEffect, useState } from 'react';
import MenuButton from './MenuButton';
import Menu from './Menu';
import useMenuAnimation from '../utils/useMenuAnimation';

interface Section {
	title: string;
	id: string;
}

export default function Navbar() {
	const sections: Section[] = [
		{ title: '', id: 'launch' },
		{ title: '', id: 'about' },
	];

	const options = {
		root: null,
		rootMargin: '-50% 0px -50% 0px',
		threshold: 0,
	};

	const [currentSection, setCurrentSection] = useState('');
	const [elements, setElements] = useState<(HTMLElement | null)[]>([]);
	const [isOpen, setIsOpen] = useState(false);

	const scope = useMenuAnimation(isOpen);

	useEffect(() => {
		const elems = sections.map((section) =>
			document.getElementById(section.id)
		);
		setElements(elems);
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setCurrentSection(entry.target.id);
				}
			});
		}, options);

		elements.forEach((element) => {
			if (element) {
				observer.observe(element);
			}
		});

		return () => {
			elements.forEach((element) => {
				if (element) {
					observer.unobserve(element);
				}
			});
		};
	}, [elements]);

	const currentSectionTitle = currentSection === 'launch' ? '' : currentSection;
	return (
		<div
			ref={scope}
			className='flex fixed z-50 w-full h-16 justify-center items-center p-4'
		>
			{/* HAMBURGER BUTTON */}
			<Menu setIsOpen={setIsOpen} sections={sections} />
			<MenuButton toggle={() => setIsOpen(!isOpen)} />

			<div className='text-center text-lg pl-12 sm:pl-0 text-dark-green font-bold uppercase sm:text-2xl md:text-3xl lg:text-4xl'>
				{currentSectionTitle}
			</div>
		</div>
	);
}
