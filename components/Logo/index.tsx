import { AspectRatioBox, Flex, Heading, Image } from '@chakra-ui/core';

export const Logo = () => {
	return (
		<Flex alignItems='center'>
			<Image src='images/logo.png' alt='pierian spring logo' mx='3' />
		</Flex>
	);
};
