import Link from 'next/link'

export default function NavBar() {
  return (
	<>
		<div className="grid grid-rows-2 bg-indigo-200">
			<div className="ml-2 text-xl font-medium">opsadboys</div>
			<div className="flex flex-row gap-x-3 text-slate-500 ml-2">
				<Link href="/blog">blog</Link>
				<Link href="/recipes">recipes</Link>
				<Link href="/music">music</Link>
				<Link href="/movies">movies</Link>
			</div>
		</div>
	</>
	)
}
