interface Link {
	label: string;
	url: string;
}

interface LinkButton {
	variant: 'link' | 'solid' | 'outline' | 'ghost' | 'unstyled';
	variantColor: 'green | gray | blue';
	label: string;
	url: string;
}

interface HeaderProps {
	links: Link[];
	buttons: LinkButton[];
}

interface HomePageProps {
	header: HeaderProps;
}
