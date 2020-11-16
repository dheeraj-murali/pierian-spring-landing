import Head from 'next/head';

export const SEO = () => {
	return (
		<Head>
			<title>
				Pierian Spring - The online learning platform for pharm.D
				students.
			</title>
			<meta
				name='title'
				content='Pierian Spring - The online learning platform for pharm.D students.'
			/>
			<meta
				name='description'
				content='We help you fine tune your mind and knowledge, helping you become the best of you'
			/>
			<meta
				name='keywords'
				content='Pharm D, online learning, pharmaceutical sciences'
			/>
			<meta name='robots' content='index, follow' />
			<meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
			<meta name='language' content='English' />
			<meta name='revisit-after' content='5 days' />
			<meta name='author' content='@_mdrj' />

			{/* <!-- Open Graph / Facebook --> */}
			<meta property='og:type' content='website' />
			<meta property='og:url' content='https://pierianspring.in/' />
			<meta
				property='og:title'
				content='Pierian Spring - The online learning platform for pharm.D students.'
			/>
			<meta
				property='og:description'
				content='We help you fine tune your mind and knowledge, helping you become the best of you'
			/>
			<meta property='og:image' content='/icons/favicon-96x96.png' />

			{/* <!-- Twitter --> */}
			<meta property='twitter:card' content='summary_large_image' />
			<meta property='twitter:url' content='https://pierianspring.in/' />
			<meta
				property='twitter:title'
				content='Pierian Spring - The online learning platform for pharm.D students.'
			/>
			<meta
				property='twitter:description'
				content='We help you fine tune your mind and knowledge, helping you become the best of you'
			/>
			<meta property='twitter:image' content='/icons/favicon-96x96.png' />
			<link
				rel='apple-touch-icon'
				sizes='57x57'
				href='/icons/apple-icon-57x57.png'
			/>
			<link
				rel='apple-touch-icon'
				sizes='60x60'
				href='/icons/apple-icon-60x60.png'
			/>
			<link
				rel='apple-touch-icon'
				sizes='72x72'
				href='/icons/apple-icon-72x72.png'
			/>
			<link
				rel='apple-touch-icon'
				sizes='76x76'
				href='/icons/apple-icon-76x76.png'
			/>
			<link
				rel='apple-touch-icon'
				sizes='114x114'
				href='/icons/apple-icon-114x114.png'
			/>
			<link
				rel='apple-touch-icon'
				sizes='120x120'
				href='/icons/apple-icon-120x120.png'
			/>
			<link
				rel='apple-touch-icon'
				sizes='144x144'
				href='/icons/apple-icon-144x144.png'
			/>
			<link
				rel='apple-touch-icon'
				sizes='152x152'
				href='/icons/apple-icon-152x152.png'
			/>
			<link
				rel='apple-touch-icon'
				sizes='180x180'
				href='/icons/apple-icon-180x180.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='192x192'
				href='/icons/android-icon-192x192.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='32x32'
				href='/icons/favicon-32x32.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='96x96'
				href='/icons/favicon-96x96.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='16x16'
				href='/icons/favicon-16x16.png'
			/>
			<link rel='manifest' href='/manifest.json' />
			<meta name='msapplication-TileColor' content='#ffffff' />
			<meta
				name='msapplication-TileImage'
				content='/icons/ms-icon-144x144.png'
			/>
			<meta name='theme-color' content='#ffffff'></meta>
		</Head>
	);
};
