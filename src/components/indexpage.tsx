import Link from 'next/link'
import { PropsWithChildren } from 'react'

import PostTitle from '@/components/posttitle'

type IndexPageProps = {
	pageName: string;
	pagePath: string;
	posts: MarkdownPost;
}

export default function IndexPage({ children, pageName, pagePath, posts } : PropsWithChildren<IndexPageProps>) {
	return (
		<>
			<div className="flex justify-center text-xl font-bold">
				{pageName}
			</div>
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
