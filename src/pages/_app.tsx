import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto_Mono } from 'next/font/google'
import Head from 'next/head'

import NavBar from '@/components/navbar'

const roboto_mono = Roboto_Mono({
	variable: '--font-roboto-mono',
	display: 'swap',
	weight: ['300', '600'],
	subsets: ['latin']
});

export default function App({ Component, pageProps }: AppProps) {
  return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
			</Head>
			<div className={`place-content-center lg:ml-auto lg:mr-auto lg:w-8/12 lg:max-width-prose ${roboto_mono.variable} font-mono sm:max-w-full`}>
				<NavBar/>
				<div className="ml-2 mr-2">
					<Component {...pageProps} />
				</div>
			</div>
		</>
	);
}
