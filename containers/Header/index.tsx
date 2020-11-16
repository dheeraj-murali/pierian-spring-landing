import {
	Accordion,
	AccordionButton,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	Flex,
} from '@chakra-ui/react';
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
							colorScheme={button.colorScheme}
							mx='2'
						>
							{button.label}
						</Button>
					))}
				</Flex>
			</Box>

			<Accordion>
				<AccordionItem display={{ base: 'block', md: 'none' }} w='full'>
					<AccordionButton
						display='flex'
						justifyContent='space-between'
					>
						<Logo />
						<Box as={MdMenu} w='32px' h='32px' color='blue.500' />
					</AccordionButton>
					<AccordionPanel>
						<Flex>
							<Button variant='outline' colorScheme='blue' mx='2'>
								Log in
							</Button>
							<Button colorScheme='green' mx='2' shadow='sm'>
								Sign up
							</Button>
						</Flex>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</Box>
	);
};
