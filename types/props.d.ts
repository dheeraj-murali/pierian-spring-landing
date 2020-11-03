interface Link {
	label: string;
	url: string;
}

interface Button {
	variant: 'link' | 'solid' | 'outline' | 'ghost' | 'unstyled';
	variantColor: 'green | gray | blue';
	label: string;
	url: string;
}

interface HeaderProps {
	links: Link[];
	buttons: Button[];
}

interface HeroTitle {
	text: string;
	highlightGreen: string;
	highlightBlue: string;
}

interface HeroProps {
	image: string;
	button: Button;
	title: HeroTitle;
	subTitle: string;
}

interface HomePageProps {
	header: HeaderProps;
	hero: HeroProps;
}
