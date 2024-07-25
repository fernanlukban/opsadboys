import path from 'path'

import {getSortedMarkdown, getAllMarkdownFileIds, getMarkdownData, MarkdownPost} from '@/lib/markdown'

const blogPostsDirectory = path.join(process.cwd(), 'src', 'pages', 'blog', 'posts');

export async function getSortedBlogPostsData() {
	return await getSortedMarkdown(
		blogPostsDirectory,
		(left: MarkdownPost, right: MarkdownPost) => left.date < right.date ? 1 : -1,
	)
}

export async function getAllBlogPostIds() {
	return await getAllMarkdownFileIds(blogPostsDirectory)
}

export async function getBlogPostData(id: string) {
	return await getMarkdownData(blogPostsDirectory, id)
}
