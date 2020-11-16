import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { Card } from '../../components';

export const Updates = (props: UpdateProps) => {
	const { title, subtitle } = props;

	return (
		<Box
			display='inline-flex'
			alignItems='center'
			justifyContent='space-around'
			flexWrap='wrap'
			w='full'
			py={{ base: '2', md: '10', lg: '20' }}
			px={{ base: '5', xl: '20' }}
			bg='gray.100'
		>
			<Box
				w={{ base: 'xs', sm: 'sm', md: '40%', xl: '30%' }}
				my='8'
				textAlign={{ base: 'center', md: 'left' }}
				p='2'
			>
				<Heading my='5'>{title}</Heading>
				<Text>{subtitle}</Text>
			</Box>

			<Box
				w={{ base: 'xs', sm: 'sm', md: '55%', xl: '60%' }}
				overflow='scroll'
				display='inline-flex'
				flexWrap='nowrap'
				py='10'
			>
				<Card />
				<Card />
				<Card />
			</Box>
		</Box>
	);
};
