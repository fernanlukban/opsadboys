import Link from 'next/link'
import { PropsWithChildren } from 'react'

import PostTitle from '@/components/posttitle'
import PageTitle from '@/components/pagetitle'

type IndexPageProps = {
	pageName: string;
	pagePath: string;
	posts: MarkdownPost;
}

export default function IndexPage({ children, pageName, pagePath, posts } : PropsWithChildren<IndexPageProps>) {
	return (
		<>
			<PageTitle pageName={pageName} />
			<div>
				{posts ? posts.map(
					(post) => (
						<div key={post.id} className="flex flex-row">
							<Link href={`/${pagePath}/${post.id}`} className="hover:underline">
								<PostTitle date={post.date} title={post.title}/>
							</Link>
						</div>
					)
				) : children}
			</div>
		</>
	)
}
