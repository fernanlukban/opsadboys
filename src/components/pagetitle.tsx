import Link from 'next/link'

type PageTitleProps = {
	pageName: string;
	path?: string;
};

export default function PageTitle({ pageName, path}: PageTitleProps) {
	const className = "flex justify-center text-xl font-bold mt-2"
	if (!path) {
		return <h2 className={className}>{pageName}</h2>
	}
	return (
		<Link className={`${className} hover:underline`} href={path}>
			{pageName}
		</Link>
	);
}
