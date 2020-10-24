import { Box } from '@chakra-ui/core';
import { LazyImage } from '../LazyImage';

export const WhoImage = () => {
	return (
		<Box
			w={{ base: '2xs', md: 'xs', lg: 'md' }}
			bg='white'
			borderRadius='lg'
			style={{
				background: 'linear-gradient(180deg, #50a707 0%, #1a7894 100%)',
			}}
			my='8'
		>
			<LazyImage
				src='images/who.jpg'
				lazyImage='images/who-0.jpg'
				alt='pharmacist with medicines in hand'
				borderRadius='lg'
			/>
		</Box>
	);
};
