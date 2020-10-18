import { Flex } from '@chakra-ui/core';
import { HeroImage, HeroMessage } from '../../components';

export const Hero = () => {
	return (
		<Flex
			shadow='sm'
			alignItems='center'
			justifyContent='space-around'
			flexWrap='wrap'
			w='full'
			minH='80vh'
			py='12'
			bg='brandBlue.800'
			style={{
				background: 'linear-gradient(180deg, #387703 0%, #0b566b 100%)',
			}}
		>
			<HeroMessage />

			<HeroImage />
		</Flex>
	);
};
