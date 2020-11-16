import { Box, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

export const Card = () => {
	const property = {
		imageUrl: '/images/dummy.jpg',
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
				h='2xs'
				borderBottom='5px solid'
				borderBottomColor='brandGreen.600'
				overflow='hidden'
			>
				<Image
					src={property.imageUrl}
					alt={property.imageAlt}
					width='500'
					height='400'
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
