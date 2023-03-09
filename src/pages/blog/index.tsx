import Link from 'next/link'

import IndexPage from '@/components/indexpage'
import { getSortedBlogPostsData } from '@/lib/bloglib'
import { MarkdownPost } from '@/lib/markdown'

type BlogPageProps = {
	posts: MarkdownPost[];
}

function BlogPage({ posts }: BlogPageProps) {
	return <IndexPage pageName="blog" posts={posts} />;
}

export async function getStaticProps() {
	const posts = await getSortedBlogPostsData()
	return {
		props: {
			posts
		}
	}
}

export default BlogPage
