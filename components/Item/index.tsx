import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/core';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { LazyImage } from '..';

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
		<Box ref={ref} w='full'>
			<motion.div
				initial={{ scale: 0.2 }}
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
					flexWrap='wrap'
					w='full'
					my='5'
					px={{ xl: '10' }}
				>
					<Box
						w={{ base: 'xs', sm: 'sm', xl: 'lg' }}
						textAlign={{ base: 'center', md: 'left' }}
						p='5'
					>
						<Heading size='lg'>
							Similique corporis modi dolorem
						</Heading>
						<Divider border='2px' />
						<Text>
							Pirian Spring is an e-learning phaltform for pharm.D
							students. Amet ut vulputate pretium adipiscing
							aliquet tellus, vestibulum enim. Lorem velit magna
							ridiculus ut eu feugiat at a est. Feugiat lacus sed
							venenatis, feugiat aliquam at justo, pulvinar.
						</Text>
					</Box>

					<Box
						w={{ base: 'xs', md: 'xs', lg: 'md' }}
						borderRadius='lg'
						my='8'
					>
						<LazyImage
							src='images/who.jpg'
							fallbackImage='images/who-0.jpg'
							alt='pharmacist with medicines in hand'
							borderRadius='lg'
						/>
					</Box>
				</Flex>
			</motion.div>
		</Box>
	);
};

interface ItemProp {
	revert?: boolean;
}
