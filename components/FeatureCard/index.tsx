import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { Img } from '../Img';

export const FeatureCard = (props: FeatureCardProps) => {
	const { imageUrl, title, banner } = props;

	const ImageCard = () => (
		<Box
			w='2xs'
			h='2xs'
			rounded='lg'
			overflow='hidden'
			shadow='lg'
			m='2'
			bg='white'
		>
			<Box
				h='65%'
				overflow='hidden'
				borderBottom='5px solid'
				borderBottomColor='brandGreen.600'
			>
				<Img src={imageUrl} alt={title} width='300' height='200' />
			</Box>

			<Box h='full' p='5'>
				<Text textAlign='center'>{title}</Text>
			</Box>
		</Box>
	);

	const DataCard = () => (
		<Flex
			w='2xs'
			h='2xs'
			rounded='lg'
			shadow='lg'
			p='5'
			m='2'
			justifyContent='center'
			alignItems='center'
			style={{
				background: 'linear-gradient(90deg, #50a707 0%, #1a7894 100%)',
			}}
		>
			<Heading color='white'>{title}</Heading>
		</Flex>
	);

	return <Box>{banner ? <DataCard /> : <ImageCard />}</Box>;
};
