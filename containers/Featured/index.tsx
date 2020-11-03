import { Box, Flex, Heading, Text } from '@chakra-ui/core';
import React from 'react';
import { FeatureCard } from '../../components';

export const Featured = () => {
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
					The{' '}
					<Text as='span' color='brandGreen.600' fontWeight='bold'>
						online
					</Text>{' '}
					learning platform for{' '}
					<Text as='span' color='brandBlue.600' fontWeight='bold'>
						pharm.D
					</Text>{' '}
					students.
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
				<FeatureCard
					imageUrl='images/Pathophysiology.jpg'
					title='Pathophysiology'
				/>
				<FeatureCard
					imageUrl='images/Pharmacognosy.jpg'
					title='Pharmacognosy'
				/>
				<FeatureCard
					imageUrl='images/Pharmacotherapeutics.jpg'
					title='Pharmacotherapeutics'
				/>
				<Flex
					size='2xs'
					rounded='lg'
					shadow='lg'
					p='5'
					m='2'
					bg='white'
					justifyContent='center'
					alignItems='center'
					style={{
						background:
							'linear-gradient(90deg, #50a707 0%, #1a7894 100%)',
					}}
				>
					<Heading color='white'>courses on 100+ topics</Heading>
				</Flex>
			</Box>

			<Box
				w={{ base: 'xs', sm: 'sm', md: '5xl' }}
				my='8'
				textAlign={{ base: 'center' }}
				p='2'
			>
				<Text>
					Amet ut vulputate pretium adipiscing aliquet tellus,
					vestibulum enim. Lorem velit magna ridiculus ut eu feugiat
					at a est. Feugiat lacus sed venenatis, feugiat aliquam at
					justo, pulvinar. Id mattis a scelerisque donec.
				</Text>
			</Box>
		</Flex>
	);
};
