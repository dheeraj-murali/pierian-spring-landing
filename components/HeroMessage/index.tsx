import { Button, Flex, Heading, Text } from '@chakra-ui/core';

export const HeroMessage = () => {
	return (
		<Flex
			direction='column'
			maxW='md'
			color='white'
			m='5'
			my={{ base: '5', lg: '10' }}
			textAlign={{ base: 'center', xl: 'left' }}
		>
			<Heading size='2xl' my='3'>
				Turn your{' '}
				<Text as='span' color='brandGreen.400'>
					dreams
				</Text>{' '}
				into{' '}
				<Text as='span' color='brandBlue.400'>
					reality
				</Text>
			</Heading>
			<Text my='3'>
				We help you fine tune your mind and knowledge, helping you
				become the best of you
			</Text>
			<Button variantColor='green' my='3' shadow='lg' size='lg'>
				Sign up
			</Button>
		</Flex>
	);
};
