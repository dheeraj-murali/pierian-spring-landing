import { Box } from '@chakra-ui/core';
import { GetStaticProps } from 'next';
import React from 'react';
import { Header, Hero, JoinSmall, SEO, What, Who } from '../containers';

export default function Home() {
	return (
		<>
			<SEO />
			<Box h='100vh' w='100vw'>
				<Header />
				<Hero />
				<Who />
				<JoinSmall />
				<What />
			</Box>
		</>
	);
}

export const getStaticProps: GetStaticProps = async (context) => {
	return {
		props: {},
	};
};
