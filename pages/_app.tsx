import { ColorModeProvider, CSSReset, ThemeProvider } from '@chakra-ui/core';
import type { AppProps } from 'next/app';
import { customTheme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={customTheme}>
			<CSSReset />
			{/* <ColorModeProvider> */}
			<Component {...pageProps} />
			{/* </ColorModeProvider> */}
		</ThemeProvider>
	);
}

export default MyApp;