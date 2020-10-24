import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/core';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { ItemImage } from '..';

export const Item = (prop: ItemProp) => {
	const { revert } = prop;
	const [ref, inView] = useInView({ rootMargin: '-10%' });
	const controls = useAnimation();

	useEffect(() => {
		if (inView) {
			controls.start({ scale: 1 });
		}
	}, [controls, inView]);

	return (
		<Flex
			ref={ref}
			alignItems='center'
			justifyContent='space-around'
			flexDir={revert ? 'row-reverse' : 'row'}
			flexWrap='wrap'
			w='full'
			my='5'
			px={{ xl: '10' }}
		>
			<motion.div
				initial={{ scale: 0.2 }}
				animate={controls}
				transition={{
					type: 'spring',
					damping: 10,
					stiffness: 100,
				}}
			>
				<Box
					w={{ base: 'xs', sm: 'sm', xl: 'xl' }}
					my='8'
					textAlign={{ base: 'center', md: 'left' }}
					p='2'
				>
					<Heading size='lg'>Similique corporis modi dolorem</Heading>
					<Divider border='2px' />
					<Text>
						<Text
							as='span'
							color='brandGreen.600'
							fontWeight='bold'
						>
							Pirian Spring
						</Text>{' '}
						is an e-learning phaltform for{' '}
						<Text as='span' color='brandBlue.600' fontWeight='bold'>
							pharm.D
						</Text>{' '}
						students. Amet ut vulputate pretium adipiscing aliquet
						tellus, vestibulum enim. Lorem velit magna ridiculus ut
						eu feugiat at a est. Feugiat lacus sed venenatis,
						feugiat aliquam at justo, pulvinar.
					</Text>
				</Box>
			</motion.div>
			<motion.div
				initial={{ scale: 1.2 }}
				animate={controls}
				transition={{
					type: 'spring',
					damping: 10,
					stiffness: 100,
				}}
			>
				<ItemImage />
			</motion.div>
		</Flex>
	);
};

interface ItemProp {
	revert?: boolean;
}
