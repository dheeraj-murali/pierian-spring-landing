import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export const Item = (prop: ItemProps) => {
	const { revert, data, image, subtitle, title } = prop;
	const [ref, inView] = useInView({ rootMargin: '-10%', triggerOnce: true });
	const controls = useAnimation();

	useEffect(() => {
		if (inView) {
			controls.start({ scale: 1 });
		}
	}, [controls, inView]);

	return (
		<Box ref={ref} w='full'>
			<motion.div
				initial={{ scale: 0.5 }}
				animate={controls}
				transition={{
					type: 'spring',
					damping: 10,
					stiffness: 100,
				}}
			>
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
						<Divider border='2px' />
						<Text>{subtitle}</Text>
					</Box>

					<Box
						w={{ base: 'xs', md: 'xs', lg: 'md' }}
						h={{ base: 'xs', md: 'xs', lg: 'sm' }}
						borderRadius='lg'
						overflow='hidden'
					>
						<Image
							src={image}
							alt={title}
							width='600'
							height='500'
						/>
					</Box>
				</Flex>
			</motion.div>
		</Box>
	);
};
