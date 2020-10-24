import { Button, Flex, Heading } from '@chakra-ui/core';

export const JoinSmall = () => {
	return (
		<Flex
			alignItems='center'
			textAlign='center'
			flexDir='column'
			w='full'
			py='12'
			px='2'
			bg='brandBlue.800'
			style={{
				background: 'linear-gradient(90deg, #387703 0%, #0b566b 100%)',
			}}
		>
			<Heading color='white' my='5'>
				Join 112+ students from around the world
			</Heading>
			<Button my='5'>Sign up</Button>
		</Flex>
	);
};
