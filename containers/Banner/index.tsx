import { Box, Button, Flex, Heading } from '@chakra-ui/core';
import React from 'react';

export const Banner = (props: JoinProps) => {
	const { size } = props;

	const padding = {
		base: size === 'sm' ? 0 : 5,
		md: size === 'sm' ? 0 : 10,
		xl: size === 'sm' ? 0 : 20,
	};

	return (
		<Flex
			alignItems='center'
			textAlign='center'
			flexDir='column'
			w='full'
			p={padding}
		>
			<Box
				w='full'
				rounded={size}
				py='20'
				style={{
					background:
						'linear-gradient(90deg, #387703 0%, #0b566b 100%)',
				}}
			>
				<Heading color='white' my='5'>
					Join 112+ students from around the world
				</Heading>
				<Button my='5' size='lg'>
					Sign up
				</Button>
			</Box>
		</Flex>
	);
};

declare interface JoinProps {
	size: 'sm' | 'lg';
}
