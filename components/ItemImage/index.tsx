import { Box } from '@chakra-ui/core';
import { LazyImage } from '../LazyImage';

export const ItemImage = (prop: ItemImageProp) => {
	const { imageUrl, fallbackUrl } = prop;

	return (
		<Box
			w={{ base: 'xs', md: 'xs', lg: 'md' }}
			bg='white'
			p='3'
			borderRadius='42rem 32rem 34rem 22rem'
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

interface ItemImageProp {
	imageUrl?: string;
	fallbackUrl?: string;
}
