import { Flex } from '@chakra-ui/core';
import { HeroImage, HeroMessage } from '../../components';

export const Hero = () => {
	return (
		<Flex
			alignItems='center'
			flexWrap='wrap'
			w='full'
			py='12'
			bg='brandBlue.800'
			pl={{ base: '0rem', xl: '10rem' }}
			style={{
				background: 'linear-gradient(180deg, #387703 0%, #0b566b 100%)',
				backgroundImage:
					'linear-gradient(90deg, #387703e6 0%, #0b566b60 80%), url(images/hero.jpg)',
				backgroundSize: 'cover',
				backgroundPosition: 'center center',
			}}
		>
			<HeroMessage />
		</Flex>
	);
};
