import { Box, Heading, Text } from '@chakra-ui/core';
import React from 'react';
import { Card } from '../../components';

export const Updates = () => {
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
				<Heading my='5'>
					Check out the latest updates from our community.
				</Heading>
				<Text>
					Feugiat lacus sed venenatis, feugiat aliquam at justo,
					pulvinar. Id mattis a scelerisque donec. Nunc neque
					vulputate dolor, platea ut urna risus elit non. Amet ut
					vulputate pretium adipiscing aliquet tellus, vestibulum
					enim.
				</Text>
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