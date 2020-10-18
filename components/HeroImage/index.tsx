import { Box, Image } from '@chakra-ui/core';

export const HeroImage = () => {
	return (
		<Box
			w={{ base: '2xs', md: 'sm', lg: 'xl', xl: '2xl' }}
			bg='white'
			p='2'
			borderRadius='42rem 24rem 24rem 12rem'
			style={{
				background: 'linear-gradient(180deg, #50a707 0%, #1a7894 100%)',
				transform: 'rotate(-10deg)',
			}}
		>
			<Image
				src='images/hero.jpg'
				borderRadius='24rem 24rem 46rem 24rem'
				style={{
					transform: 'rotate(10deg)',
				}}
			/>
		</Box>
	);
};
