import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import { useInView } from 'react-intersection-observer';

export const Img = (props: ImgProps) => {
	const { alt, height, src, width } = props;

	const [ref, inView] = useInView({ rootMargin: '20%', triggerOnce: true });

	return (
		<Box ref={ref}>
			<Image
				src={inView ? src : ''}
				alt={alt}
				width={`${width}px`}
				height={`${height}px`}
			/>
		</Box>
	);
};
