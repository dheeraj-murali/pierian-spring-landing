import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang='en'>
				<Head />
				<body>
					{/* 👇 Here's the script */}
					<ColorModeScript />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
