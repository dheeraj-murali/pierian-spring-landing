import { Box } from '@chakra-ui/core';
import { GetStaticProps } from 'next';
import React from 'react';
import {
	Header,
	Hero,
	JoinSmall,
	SEO,
	Community,
	What,
	Who,
} from '../containers';

export default function Home() {
	return (
		<>
			<SEO />
			<Box>
				<Header />
				<Hero />
				<Who />
				<JoinSmall />
				<What />
				<Community />
			</Box>
		</>
	);
}

export const getStaticProps: GetStaticProps = async (context) => {
	return {
		props: {},
	};
};
