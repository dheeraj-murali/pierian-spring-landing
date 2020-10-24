import { Box } from '@chakra-ui/core';
import { LazyImage } from '../LazyImage';

export const ItemImage = (prop: ItemImageProp) => {
	const { imageUrl, fallbackUrl } = prop;

	return (
		<Box
			w={{ base: 'xs', md: 'xs', lg: 'md' }}
			p='1'
			borderRadius='lg'
			shadow='lg'
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
