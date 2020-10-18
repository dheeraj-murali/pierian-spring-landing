import { Box, Flex, Heading } from '@chakra-ui/core';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Pierian Spring</title>
				<link
					rel='apple-touch-icon'
					sizes='57x57'
					href='icons/apple-icon-57x57.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='60x60'
					href='icons/apple-icon-60x60.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='72x72'
					href='icons/apple-icon-72x72.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='76x76'
					href='icons/apple-icon-76x76.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='114x114'
					href='icons/apple-icon-114x114.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='120x120'
					href='icons/apple-icon-120x120.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='144x144'
					href='icons/apple-icon-144x144.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='152x152'
					href='icons/apple-icon-152x152.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='icons/apple-icon-180x180.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='192x192'
					href='icons/android-icon-192x192.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='icons/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='96x96'
					href='icons/favicon-96x96.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='icons/favicon-16x16.png'
				/>
				<link rel='manifest' href='/manifest.json' />
				<meta name='msapplication-TileColor' content='#ffffff' />
				<meta
					name='msapplication-TileImage'
					content='icons/ms-icon-144x144.png'
				/>
				<meta name='theme-color' content='#ffffff'></meta>
			</Head>
			<Flex
				h='100vh'
				w='full'
				justifyContent='center'
				alignItems='center'
			>
				<Heading as='h1' size='2xl' color='brandGreen.500'>
					Pierian Spring
				</Heading>
			</Flex>
		</>
	);
}
