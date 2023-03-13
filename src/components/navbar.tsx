import Link from 'next/link'

import AlternateText from '@/components/alternatetext'

export default function NavBar() {
  return (
	<>
		<div className="grid grid-rows-2 bg-indigo-200 relative">
			<Link href="/" className="ml-2 text-xl font-medium hover:font-bold">opsadboys</Link>
			<div className="flex flex-row text-slate-500 ml-2 w-full">
				<div className="flex flex-row gap-x-3">
					<Link href="/blog" className="hover:underline">blog</Link>
					<Link href="/recipes" className="hover:underline">recipes</Link>
					<Link href="/music" className="hover:underline">music</Link>
					<Link href="/movies" className="hover:underline">movies</Link>
				</div>
				<div className="flex flex-row gap-x-3 absolute right-0 mr-2">
					<Link href="https://twitter.com/opsadboys" className="hover:underline"><AlternateText text={'twitter'} alternateText={'t'} /></Link>
					<Link href="https://instagram.com/fernanlukban" className="hover:underline"><AlternateText text={'instagram'} alternateText={'ig'} /></Link>
				</div>
			</div>
		</div>
	</>
	)
}
