import { Box, Image } from '@chakra-ui/core';
import { LazyImage } from '..';

export const HeroImage = () => {
	return (
		<Box
			display={{ base: 'none', xl: 'block' }}
			w={{ base: '2xs', md: 'sm', lg: 'xl', xl: '2xl' }}
			h={{ base: '4xs', md: 'xm', lg: 'sm', xl: 'md' }}
			bg='white'
			p='2'
			borderRadius='42rem 24rem 24rem 12rem'
			style={{
				background: 'linear-gradient(180deg, #50a707 0%, #1a7894 100%)',
				transform: 'rotate(-10deg)',
			}}
		>
			<LazyImage
				src='images/hero.jpg'
				alt='student at perian spring'
				lazyImage='images/hero-0.jpg'
				style={{
					transform: 'rotate(10deg)',
					borderRadius: '24rem 24rem 46rem 24rem',
				}}
			/>
		</Box>
	);
};
