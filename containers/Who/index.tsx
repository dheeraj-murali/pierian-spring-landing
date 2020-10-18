import { Box, Flex, Heading, Text } from '@chakra-ui/core';
import { WhoImage } from '../../components';

export const Who = () => {
	return (
		<Flex
			alignItems='center'
			justifyContent='space-around'
			flexWrap='wrap-reverse'
			w='full'
			py={{ base: '2', md: '10', lg: '20' }}
			px={{ xl: '20' }}
		>
			<WhoImage />

			<Box
				w={{ base: 'xs', sm: 'sm', md: 'sm', lg: 'md', xl: 'xl' }}
				my='8'
				textAlign={{ base: 'center', md: 'left' }}
				p='2'
			>
				<Heading my='5'>Who we are</Heading>
				<Text>
					<Text as='span' color='brandGreen.600' fontWeight='bold'>
						Pirian Spring
					</Text>{' '}
					is an e-learning phaltform for{' '}
					<Text as='span' color='brandBlue.600' fontWeight='bold'>
						pharm.D
					</Text>{' '}
					students. Amet ut vulputate pretium adipiscing aliquet
					tellus, vestibulum enim. Lorem velit magna ridiculus ut eu
					feugiat at a est. Feugiat lacus sed venenatis, feugiat
					aliquam at justo, pulvinar. Id mattis a scelerisque donec.
					Nunc neque vulputate dolor, platea ut urna risus elit non.
					Amet ut vulputate pretium adipiscing aliquet tellus,
					vestibulum enim. Lorem velit magna ridiculus ut eu feugiat
					at a est. Feugiat lacus sed venenatis, feugiat aliquam at
					justo, pulvinar. Id mattis a scelerisque donec.
				</Text>
			</Box>
		</Flex>
	);
};
