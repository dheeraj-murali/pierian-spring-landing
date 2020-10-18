import { Flex, Image } from '@chakra-ui/core';
import { LazyImage } from '../LazyImage';

export const Logo = () => {
	return (
		<Flex alignItems='center' m='2'>
			<Image src='images/logo.svg' alt='pierian spring logo' mx='3' />
		</Flex>
	);
};
