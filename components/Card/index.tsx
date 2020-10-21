// Sample card from Airbnb

import { Box, Badge, Text, Heading } from '@chakra-ui/core';
import React from 'react';
import { LazyImage } from '../LazyImage';

export const Card = () => {
	const property = {
		imageUrl: 'https://bit.ly/2Z4KKcF',
		imageAlt: 'Rear view of modern home with pool',
		beds: 3,
		baths: 2,
		title:
			'Modern home in city center in the heart of historic Los Angeles',
		formattedPrice: '$1,900.00',
		reviewCount: 34,
		rating: 4,
	};

	return (
		<Box
			minW={{ base: 'xs', md: 'sm' }}
			maxW={{ base: 'xs', md: 'sm' }}
			rounded='lg'
			overflow='hidden'
			shadow='lg'
			mx='5'
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
				<Heading fontSize='lg' mb='5'>
					{property.title}
				</Heading>

				<Box>
					<Text>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Omnis reiciendis veniam ipsam voluptatum! Ut natus
						quis praesentium aut alias, soluta assumenda possimus
						similique consequatur eius eaque a accusamus sint
						quisquam!
					</Text>
				</Box>
			</Box>
		</Box>
	);
};