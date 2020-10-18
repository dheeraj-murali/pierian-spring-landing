import { Box, Image } from '@chakra-ui/core';
import { CSSProperties, useState } from 'react';

export const LazyImage = (props: LazyImageProps) => {
	const { src, lazyImage, alt, style } = props;

	const [imageLoaded, setImageLoaded] = useState(false);

	return (
		<Box pos='relative' w='full' h='full' style={style} overflow='hidden'>
			<Image
				pos='absolute'
				top='0'
				left='0'
				src={src}
				alt={alt}
				loading='lazy'
				opacity={imageLoaded ? 1 : 0}
				onLoad={() => setImageLoaded(true)}
			/>

			<Image
				opacity={imageLoaded ? 0 : 1}
				w='full'
				h='full'
				src={lazyImage}
				alt={alt}
			/>
		</Box>
	);
};

interface LazyImageProps {
	src: string;
	lazyImage: string;
	alt: string;
	style: CSSProperties;
}
