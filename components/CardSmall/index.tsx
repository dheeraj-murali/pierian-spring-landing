// Sample card from Airbnb

import { Box, Text } from '@chakra-ui/core';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { LazyImage } from '../LazyImage';

export const CardSmall = () => {
	const property = {
		imageUrl: 'https://bit.ly/2k1H1t6',
		imageAlt: 'Rear view of modern home with pool',
		beds: 3,
		baths: 2,
		title: 'Pathophysiology',
		formattedPrice: '$1,900.00',
		reviewCount: 34,
		rating: 4,
	};

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
						style={{
							background:
								'linear-gradient(90deg, #50a707 0%, #1a7894 100%)',
						}}
						pb='2'
					>
						<LazyImage
							lazyImage={property.imageUrl}
							src={property.imageUrl}
							alt={property.imageAlt}
						/>
					</Box>

					<Box p='5'>
						<Text textAlign='center'>{property.title}</Text>
					</Box>
				</Box>
			</motion.div>
		</Box>
	);
};
