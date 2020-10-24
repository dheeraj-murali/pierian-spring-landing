import { Box } from '@chakra-ui/core';
import { GetStaticProps } from 'next';
import React from 'react';
import { Community, Header, Hero, Join, SEO, What, Who } from '../containers';

export default function Home() {
	return (
		<>
			<SEO />
			<Box>
				<Header />
				<Hero />
				<Who />
				<Join size='sm' />
				<What />
				<Community />
				<Join size='lg' />
			</Box>
		</>
	);
}

export const getStaticProps: GetStaticProps = async (context) => {
	return {
		props: {},
	};
};
