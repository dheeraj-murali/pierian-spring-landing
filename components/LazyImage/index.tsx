import { Box, Image } from '@chakra-ui/react';
import React, { CSSProperties, useState } from 'react';

export const LazyImage = (props: LazyImageProps) => {
	const { src, fallbackImage, alt, style, borderRadius } = props;

	const [imageLoaded, setImageLoaded] = useState(false);

	return (
		<Box pos='relative' w='full' h='full' style={style} overflow='hidden'>
			<Image
				borderRadius={borderRadius}
				pos='absolute'
				top='0'
				left='0'
				src={src}
				alt={alt}
				w='full'
				h='full'
				objectFit='cover'
				loading='lazy'
				opacity={imageLoaded ? 1 : 0}
				onLoad={() => setImageLoaded(true)}
			/>

			<Image
				borderRadius={borderRadius}
				opacity={imageLoaded ? 0 : 1}
				w='full'
				h='full'
				objectFit='cover'
				src={src}
				alt={alt}
				fallbackSrc={fallbackImage}
			/>
		</Box>
	);
};

interface LazyImageProps {
	src: string;
	fallbackImage: string;
	alt: string;
	style?: CSSProperties;
	borderRadius?: string;
}
