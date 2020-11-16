import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export const FeatureCard = (props: FeatureCardProps) => {
	const { imageUrl, title, banner } = props;

	const [ref, inView] = useInView({ rootMargin: '-10%', triggerOnce: true });
	const controls = useAnimation();

	useEffect(() => {
		if (inView) {
			controls.start({ scale: 1 });
		}
	}, [controls, inView]);

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
			<motion.div
				initial={{ scale: 0.5 }}
				animate={controls}
				transition={{
					type: 'spring',
					damping: 10,
					stiffness: 100,
				}}
			>
				{banner ? <DataCard /> : <ImageCard />}
			</motion.div>
		</Box>
	);
};
