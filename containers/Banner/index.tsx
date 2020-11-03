import { Box, Button, Flex, Heading } from '@chakra-ui/core';
import React from 'react';

export const Banner = (props: BannerProps) => {
	const { size, title, subtitle, button } = props;

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
					{title}
				</Heading>
				<Button my='5' size='lg' {...button}>
					{button.label}
				</Button>
			</Box>
		</Flex>
	);
};
