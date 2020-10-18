import { Box, Image } from '@chakra-ui/core';
import { LazyImage } from '../LazyImage';

export const WhoImage = () => {
	return (
		<Box
			size={{ base: '2xs', md: 'xs', lg: 'md' }}
			bg='white'
			p='2'
			borderRadius='42rem 32rem 42rem 32rem'
			style={{
				background: 'linear-gradient(180deg, #50a707 0%, #1a7894 100%)',
			}}
			my='8'
		>
			<LazyImage
				src='images/who.jpg'
				lazyImage='images/who-0.jpg'
				alt='pharmacist with medicines in hand'
				style={{ borderRadius: '24rem 42rem 24rem 42rem' }}
			/>
		</Box>
	);
};
