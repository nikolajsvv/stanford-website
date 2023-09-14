'use client';
import { useEffect, useState } from 'react';

export default function IsSmallScreen() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		// Set isMobile after component mounts, when window is available
		setIsMobile(window.innerWidth <= 600);
	}, []); // Empty array ensures this runs once after mount

	if (isMobile) {
		return true;
	}
	return false;
}
