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

export default function Home() {
	return (
		<>
			<SEO />
			<Box>
				<Header />
				<Hero />
				<Featured />
				<Banner size='sm' />
				<Services />
				<Updates />
				<Banner size='lg' />
			</Box>
		</>
	);
}

export const getStaticProps: GetStaticProps = async (context) => {
	return {
		props: {},
	};
};
