import { Box, Divider, Flex, Heading, ScaleFade, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';

export const Item = (prop: ItemProps) => {
	const { revert, image, subtitle, title } = prop;
	const [ref, inView] = useInView({
		rootMargin: '-20%',
		triggerOnce: true,
	});

	return (
		<Box ref={ref} w='full'>
			<Flex
				alignItems='center'
				justifyContent='space-evenly'
				flexDir={revert ? 'row-reverse' : 'row'}
				flexWrap='wrap-reverse'
				w='full'
				my='10'
				px={{ xl: '10' }}
			>
				<Box
					w={{ base: 'xs', sm: 'sm', xl: 'lg' }}
					textAlign={{ base: 'center', md: 'left' }}
					p='5'
				>
					<Heading size='lg'>{title}</Heading>
					<Divider border='2px' my='5' />
					<Text>{subtitle}</Text>
				</Box>
				<ScaleFade initialScale={0.9} in={inView}>
					<Box
						w={{ base: 'xs', md: 'xs', lg: 'md' }}
						h={{ base: 'xs', md: 'xs', lg: 'sm' }}
						borderRadius='lg'
						overflow='hidden'
					>
						<Image
							src={image}
							alt={title}
							width='500'
							height='500'
							layout='responsive'
						/>
					</Box>
				</ScaleFade>
			</Flex>
		</Box>
	);
};
