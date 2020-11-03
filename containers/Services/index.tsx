import { Flex, Heading } from '@chakra-ui/core';
import React from 'react';
import { Item } from '../../components';

export const Services = () => {
	return (
		<Flex
			flexDir='column'
			alignItems='center'
			justifyContent='space-around'
			w='full'
			py='20'
			px={{ base: '5', xl: '20' }}
		>
			<Heading textAlign='center' my='10'>
				World-class learning for anyone, anywhere
			</Heading>

			{[1, 2, 3, 4, 5].map((index) => {
				if (index % 2 == 0) {
					return <Item key={index} revert />;
				} else {
					return <Item key={index} />;
				}
			})}
		</Flex>
	);
};
