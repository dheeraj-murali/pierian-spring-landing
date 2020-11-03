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

interface Title {
	text: string;
	highlightGreen: string;
	highlightBlue: string;
}

interface HeroProps {
	image: string;
	button: Button;
	title: Title;
	subTitle: string;
}

interface Course {
	courseName: string | null;
	courseImage: string | null;
	banner: boolean;
}

interface FeatureProps {
	title: Title;
	subTitle: string;
	courseList: Course[];
}

declare interface FeatureCardProps {
	imageUrl: string;
	title: string;
	banner: boolean;
}

interface HomePageProps {
	header: HeaderProps;
	hero: HeroProps;
	featured: FeatureProps;
}
