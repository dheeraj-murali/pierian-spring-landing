import { Button, Flex, Heading, Text } from '@chakra-ui/core';
import React from 'react';

export const Hero = () => {
	return (
		<Flex
			alignItems='center'
			flexWrap='wrap'
			w='full'
			py='12'
			bg='brandBlue.800'
			pl={{ base: '0rem', xl: '10rem' }}
			style={{
				background: 'linear-gradient(180deg, #387703 0%, #0b566b 100%)',
				backgroundImage:
					'linear-gradient(90deg, #387703e6 0%, #0b566b60 80%), url(images/hero.jpg)',
				backgroundSize: 'cover',
				backgroundPosition: 'center center',
			}}
		>
			<Flex
				direction='column'
				maxW='md'
				m='5'
				my={{ base: '5', lg: '10' }}
				justifyContent='center'
				textAlign={{ base: 'center', xl: 'left' }}
			>
				<Heading size='2xl' my='3' color='white'>
					Turn your{' '}
					<Text as='span' color='brandGreen.400'>
						dreams
					</Text>{' '}
					into{' '}
					<Text as='span' color='brandBlue.400'>
						reality
					</Text>
				</Heading>
				<Text my='3' color='white'>
					We help you fine tune your mind and knowledge, helping you
					become the best of you
				</Text>
				<Button my='3' shadow='lg' size='lg'>
					Sign up
				</Button>
			</Flex>
		</Flex>
	);
};
