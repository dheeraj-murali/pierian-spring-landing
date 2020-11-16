import {
	Accordion,
	AccordionButton,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	Center,
	Flex,
	Spacer,
} from '@chakra-ui/react';
import React from 'react';
import { MdMenu } from 'react-icons/md';
import { v4 } from 'uuid';
import { Logo } from '../../components';

export const Header = (props: HeaderProps) => {
	const { buttons, links } = props;

	return (
		<Box shadow='sm' w='full'>
			<Flex
				display={{ base: 'none', md: 'flex' }}
				px={{ base: '3', lg: '10' }}
				py='3'
				w='full'
			>
				<Logo />
				<Spacer />
				<Center>
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
				</Center>
			</Flex>

			<Accordion allowToggle>
				<AccordionItem display={{ base: 'block', md: 'none' }} w='full'>
					<AccordionButton display='flex'>
						<Logo />
						<Spacer />
						<Box as={MdMenu} w='32px' h='32px' color='blue.500' />
					</AccordionButton>
					<AccordionPanel>
						<Flex>
							<Button variant='outline' colorScheme='blue' mx='2'>
								Log in
							</Button>
							<Spacer />
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
