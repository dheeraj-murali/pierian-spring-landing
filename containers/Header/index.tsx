import {
	AccordionHeader,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	Flex,
} from '@chakra-ui/core';
import React from 'react';
import { MdMenu } from 'react-icons/md';
import { Logo } from '../../components';
import { v4 } from 'uuid';

export const Header = (props: HeaderProps) => {
	const { buttons, links } = props;

	return (
		<Box shadow='sm' w='full' bg='white'>
			<Box
				justifyContent='space-between'
				alignItems='center'
				display={{ base: 'none', md: 'flex' }}
				px={{ base: '3', lg: '10' }}
				py='3'
				w='full'
			>
				<Logo />
				<Flex display={{ base: 'none', md: 'block' }}>
					{buttons.map((button) => (
						<Button
							key={v4()}
							variant={button.variant}
							variantColor={button.variantColor}
							mx='2'
						>
							{button.label}
						</Button>
					))}
				</Flex>
			</Box>

			<AccordionItem display={{ base: 'block', md: 'none' }} w='full'>
				<AccordionHeader display='flex' justifyContent='space-between'>
					<Logo />
					<Box as={MdMenu} size='32px' color='blue.500' />
				</AccordionHeader>
				<AccordionPanel>
					<Flex>
						<Button variant='outline' variantColor='blue' mx='2'>
							Log in
						</Button>
						<Button variantColor='green' mx='2' shadow='sm'>
							Sign up
						</Button>
					</Flex>
				</AccordionPanel>
			</AccordionItem>
		</Box>
	);
};
