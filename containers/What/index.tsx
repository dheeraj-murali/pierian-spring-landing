import { Flex, Heading } from '@chakra-ui/core';
import { Item } from '../../components';

export const What = () => {
	return (
		<Flex
			flexDir='column'
			alignItems='center'
			justifyContent='space-around'
			w='full'
			py='20'
			px={{ base: '5', xl: '20' }}
		>
			<Heading textAlign='center' my='10'>
				World-class learning for anyone, anywhere
			</Heading>

			<Item />
			<Item revert />
		</Flex>
	);
};
