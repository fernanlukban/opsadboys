import Link from 'next/link'

export default function NavBar() {
  return (
	<>
		<div className="grid grid-rows-2 bg-indigo-200">
			<Link href="/" className="ml-2 text-xl font-medium hover:font-bold">opsadboys</Link>
			<div className="flex flex-row gap-x-3 text-slate-500 ml-2">
				<Link href="/blog" className="hover:underline">blog</Link>
				<Link href="/recipes" className="hover:underline">recipes</Link>
				<Link href="/music" className="hover:underline">music</Link>
				<Link href="/movies" className="hover:underline">movies</Link>
			</div>
		</div>
	</>
	)
}
