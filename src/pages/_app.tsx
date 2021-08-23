import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyle from '@styles/global'

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Boilerplate</title>
				<link rel="shortcut icon" href="/img/icon.png" />
				<link rel="apple-touch-icon" href="/img/icon.png" />
				<link rel="manifest" href="/manifest.json" />
				<meta name="theme-color" content="#06092b" />
				<meta name="description" content="A simple world map" />
			</Head>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	)
}

export default App
