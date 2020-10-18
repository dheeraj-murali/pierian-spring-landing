import { theme } from '@chakra-ui/core';

export const customTheme = {
	...theme,
	colors: {
		...theme.colors,
		brandGreen: {
			500: '#64CE0E',
			800: '#2E6006',
		},
		brandBlue: {
			500: '#50B9D9',
			800: '#124454',
		},
	},
};
