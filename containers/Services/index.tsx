import { Flex, Heading } from '@chakra-ui/core';
import React from 'react';
import { v4 } from 'uuid';
import { Item } from '../../components';

export const Services = (props: ServicesProps) => {
	const { title, subtitle, servicesList } = props;

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
				{title}
			</Heading>

			{servicesList.map((service, index) => {
				if (index % 2 == 0) {
					return <Item key={v4()} revert {...service} />;
				} else {
					return <Item key={v4()} {...service} />;
				}
			})}
		</Flex>
	);
};
