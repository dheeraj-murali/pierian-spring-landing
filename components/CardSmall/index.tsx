// Sample card from Airbnb

import { AspectRatioBox, Box, Divider, Text } from '@chakra-ui/core';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { LazyImage } from '../LazyImage';

export const CardSmall = (prop: CardProps) => {
	const [ref, inView] = useInView({ rootMargin: '-10%' });
	const controls = useAnimation();

	useEffect(() => {
		if (inView) {
			controls.start({ scale: 1 });
		}
	}, [controls, inView]);

	return (
		<Box ref={ref}>
			<motion.div
				initial={{ scale: 0.2 }}
				animate={controls}
				transition={{
					type: 'spring',
					damping: 10,
					stiffness: 100,
				}}
			>
				<Box
					size='2xs'
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
						<LazyImage
							fallbackImage={prop.imageUrl}
							src={prop.imageUrl}
							alt={prop.title}
						/>
					</Box>

					<Box h='full' p='5'>
						<Text textAlign='center'>{prop.title}</Text>
					</Box>
				</Box>
			</motion.div>
		</Box>
	);
};

declare interface CardProps {
	imageUrl: string;
	title: string;
}
