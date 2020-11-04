import { Box, Flex, Heading, Text } from '@chakra-ui/core';
import React from 'react';
import { v4 } from 'uuid';
import { FeatureCard } from '../../components';
import { generateTitle } from '../../utils/generateTitle';

export const Featured = (props: FeatureProps) => {
	const { courseList, subtitle, title } = props;

	return (
		<Flex
			alignItems='center'
			justifyContent='space-around'
			flexWrap='wrap'
			w='full'
			py={{ base: '2', md: '10', lg: '20' }}
			px={{ base: '5', xl: '10' }}
		>
			<Box
				w={{ base: 'xs', sm: 'sm', md: '5xl' }}
				my='8'
				textAlign={{ base: 'center' }}
				p='2'
			>
				<Heading mb={{ base: 'xs', sm: 'sm', md: 'lg' }}>
					{generateTitle(title)}
				</Heading>
			</Box>

			<Box
				w={{ base: 'xs', sm: 'sm', md: 'full' }}
				display='inline-flex'
				flexWrap='wrap'
				justifyContent='space-around'
				p='5'
				pos='relative'
			>
				{courseList.map((course) => (
					<FeatureCard
						key={v4()}
						imageUrl={course.courseImage}
						title={course.courseName}
						banner={course.banner}
					/>
				))}
			</Box>

			<Box
				w={{ base: 'xs', sm: 'sm', md: '5xl' }}
				my='8'
				textAlign={{ base: 'center' }}
				p='2'
			>
				<Text>{subtitle}</Text>
			</Box>
		</Flex>
	);
};
