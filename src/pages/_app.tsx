import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '@/components/navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
			<div className="place-content-center lg:ml-auto lg:mr-auto lg:w-8/12 lg:max-width-prose">
			<NavBar/>
				<div className="ml-2">
				<Component {...pageProps} />
				</div>
		</div>
	);
}
