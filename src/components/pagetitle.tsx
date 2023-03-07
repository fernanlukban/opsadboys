import Link from 'next/link'

export default function PageTitle({ pageName, path}) {
	const className = "flex justify-center text-xl font-bold"
	if (!path) {
		return <h2 className={className}>{pageName}</h2>
	}
	return (
		<Link className={`${className} hover:underline`} href={path}>
			{pageName}
		</Link>
	);
}
