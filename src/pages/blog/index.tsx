import Link from 'next/link'

import IndexPage from '@/components/indexpage'
import { getSortedBlogPostsData } from '@/lib/bloglib'
import { MarkdownResult } from '@/lib/markdown'

function Blog({ posts } : { posts: [MarkdownResult] }) {
	return IndexPage({
		pageName: 'blog',
		pagePath: 'blog',
		posts
	});
}

export async function getStaticProps() {
	const posts = await getSortedBlogPostsData()
	return {
		props: {
			posts
		}
	}
}

export default Blog
