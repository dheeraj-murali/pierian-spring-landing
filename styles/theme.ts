import { theme } from '@chakra-ui/react';

export const customTheme = {
	...theme,
	colors: {
		...theme.colors,
		brandGreen: {
			50: '#edffde',
			100: '#d3fbb3',
			200: '#b8f786',
			300: '#9df457',
			400: '#82f028',
			500: '#68d70f',
			600: '#50a707',
			700: '#387703',
			800: '#204900',
			900: '#061900',
		},
		brandBlue: {
			50: '#dcfaff',
			100: '#b8e7f5',
			200: '#92d6ea',
			300: '#69c4e0',
			400: '#42b4d6',
			500: '#299abd',
			600: '#1a7894',
			700: '#0b566b',
			800: '#003442',
			900: '#00131b',
		},
	},
};
