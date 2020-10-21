import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/core';
import React from 'react';
import { ItemImage } from '..';

export const Item = (prop: ItemProp) => {
	const { revert } = prop;

	return (
		<Flex
			alignItems='center'
			justifyContent='space-around'
			flexDir={revert ? 'row-reverse' : 'row'}
			flexWrap='wrap'
			w='full'
			my='5'
			px={{ xl: '10' }}
		>
			<Box
				w={{ base: 'xs', sm: 'sm', xl: 'xl' }}
				my='8'
				textAlign={{ base: 'center', md: 'left' }}
				p='2'
			>
				<Heading>Who we are</Heading>
				<Divider border='2px' />
				<Text>
					<Text as='span' color='brandGreen.600' fontWeight='bold'>
						Pirian Spring
					</Text>{' '}
					is an e-learning phaltform for{' '}
					<Text as='span' color='brandBlue.600' fontWeight='bold'>
						pharm.D
					</Text>{' '}
					students. Amet ut vulputate pretium adipiscing aliquet
					tellus, vestibulum enim. Lorem velit magna ridiculus ut eu
					feugiat at a est. Feugiat lacus sed venenatis, feugiat
					aliquam at justo, pulvinar. Id mattis a scelerisque donec.
					Nunc neque vulputate dolor, platea ut urna risus elit non.
					Amet ut vulputate pretium adipiscing aliquet tellus,
					vestibulum enim. Lorem velit magna ridiculus ut eu feugiat
					at a est. Feugiat lacus sed venenatis, feugiat aliquam at
					justo, pulvinar. Id mattis a scelerisque donec.
				</Text>
			</Box>

			<ItemImage />
		</Flex>
	);
};

interface ItemProp {
	revert?: boolean;
}
