import { Button, Flex, Box } from '@chakra-ui/core';
import { Logo } from '../../components';

export const Header = () => {
	return (
		<Flex
			shadow='sm'
			p='5'
			alignItems='center'
			justifyContent='space-between'
			px='10'
		>
			<Logo />
			<Box>
				<Button variant='ghost' variantColor='brandBlue' mx='2'>
					Log in
				</Button>
				<Button variantColor='brandGreen' mx='2' shadow='sm'>
					Sign up
				</Button>
			</Box>
		</Flex>
	);
};
