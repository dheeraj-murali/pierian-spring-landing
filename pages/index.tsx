import { Box } from '@chakra-ui/core';
import { GetStaticProps } from 'next';
import React from 'react';
import {
	Banner,
	Featured,
	Header,
	Hero,
	SEO,
	Services,
	Updates,
} from '../containers';
import fs from 'fs';
import path from 'path';

export default function Home(props: HomePageProps) {
	return (
		<>
			<SEO />
			<Box>
				<Header {...props.header} />
				<Hero {...props.hero} />
				<Featured {...props.featured} />
				<Banner size='sm' {...props.bannerSmall} />
				<Services {...props.service} />
				<Updates {...props.updates} />
				<Banner size='lg' {...props.bannerLarge} />
			</Box>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const dataDirectory = path.join(process.cwd(), 'data');
	const dataFilePath = path.join(dataDirectory, 'data.json');

	const rawData = fs.readFileSync(dataFilePath, 'utf8');
	const data = JSON.parse(rawData.toString());

	return {
		props: {
			...data,
		},
	};
};
