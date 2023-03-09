import Link from 'next/link'
import { PropsWithChildren } from 'react'

import PostTitle from '@/components/posttitle'
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
			<div>
				{children}
			</div>
			<div>
				{posts ? posts.map(
					(post) => (
						<div key={post.id} className="flex flex-row">
							<Link href={`/${post.path}/${post.id}`} className="hover:underline">
								<PostTitle date={post.date} title={post.title}/>
							</Link>
						</div>
					)
				) : null}
			</div>
	</>
	)
}
