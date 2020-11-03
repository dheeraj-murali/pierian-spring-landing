import { Button, Flex, Heading, Text } from '@chakra-ui/core';
import React from 'react';
import { generateTitle } from '../../utils/generateTitle';

export const Hero = (props: HeroProps) => {
	const { button, image, subTitle, title } = props;

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
				backgroundImage: `linear-gradient(90deg, #387703e6 0%, #0b566b60 80%), url(images/${image})`,
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
					{generateTitle(title)}
				</Heading>

				<Text my='3' color='white'>
					{subTitle}
				</Text>

				<Button my='3' shadow='lg' size='lg' {...button}>
					{button.label}
				</Button>
			</Flex>
		</Flex>
	);
};
