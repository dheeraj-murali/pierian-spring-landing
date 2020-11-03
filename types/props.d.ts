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

interface FeatureCardProps {
	imageUrl: string;
	title: string;
	banner: boolean;
}

interface Banner {
	title: string;
	subTitle: string | null;
	button: Button;
}

interface BannerProps extends Banner {
	size: 'sm' | 'lg';
}

interface Service {
	title: string;
	subTitle: string;
	image: string;
	data: null;
}

interface ItemProps extends Service {
	revert?: boolean;
}

interface ServicesProps {
	title: string;
	subTitle: string | null;
	servicesList: Service[];
}

interface HomePageProps {
	header: HeaderProps;
	hero: HeroProps;
	featured: FeatureProps;
	bannerSmall: BannerProps;
	bannerLarge: BannerProps;
	service: ServicesProps;
}
