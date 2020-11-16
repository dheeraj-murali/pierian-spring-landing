import { Box, Flex, Heading, ScaleFade, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';

export const FeatureCard = (props: FeatureCardProps) => {
	const { imageUrl, title, banner } = props;

	const [ref, inView] = useInView({ triggerOnce: true });

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
				h='70%'
				overflow='hidden'
				borderBottom='5px solid'
				borderBottomColor='brandGreen.600'
			>
				<Image src={imageUrl} alt={title} width='300' height='250' />
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

	return (
		<Box ref={ref}>
			<ScaleFade initialScale={0.9} in={inView}>
				{banner ? <DataCard /> : <ImageCard />}
			</ScaleFade>
		</Box>
	);
};
