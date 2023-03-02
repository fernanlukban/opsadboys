import Link from 'next/link'

export default function NavBar({ props }) {
  return (
		<>
			<div className="grid grid-rows-2 bg-indigo-200">
				<div className="text-xl font-medium">opsadboys</div>
				<div className="flex flex-row gap-x-3 text-slate-500">
					<Link href="/blog">blog</Link>
					<Link href="/movies">movies</Link>
					<Link href="/music">music</Link>
					<Link href="/recipes">recipes</Link>
				</div>
			</div>
		</>
	)
}
