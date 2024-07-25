import Link from 'next/link'
import { PropsWithChildren } from 'react'

import PostListing from '@/components/postlisting'
import PageTitle from '@/components/pagetitle'
import { MarkdownPost } from '@/lib/markdown'

type IndexPageProps = {
	pageName: string;
	posts: MarkdownPost[];
}

export default function IndexPage({ children, pageName, posts } : PropsWithChildren<IndexPageProps>) {
	return (
		<>
			<PageTitle pageName={pageName} />
			<div className="mt-2">
				{children}
			</div>
			<hr className="mt-2 mb-2" />
			<div>
				{posts ? posts.map(
					(post) => (
						<div key={post.id} className="flex flex-row">
							<Link href={`/${post.path}/${post.id}`} className="hover:underline">
								<PostListing date={new Date(Date.parse(post.date))} title={post.title}/>
							</Link>
						</div>
					)
				) : null}
			</div>
	</>
	)
}
