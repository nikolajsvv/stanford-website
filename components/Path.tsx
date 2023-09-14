const Path = (props: any) => (
	<path
		fill='transparent'
		strokeWidth='3'
		stroke='var(--background)'
		strokeLinecap='round'
		{...props}
	/>
);

export default Path;
