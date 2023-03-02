import path from 'path'

import {getSortedMarkdown, getAllMarkdownFileIds, getMarkdownData} from '@/lib/markdown'

const blogPostsDirectory = path.join(process.cwd(), 'src', 'pages', 'blog', 'posts');

export async function getSortedBlogPostsData() {
	return await getSortedMarkdown(
		blogPostsDirectory,
		(left, right) => left.date < right.date ? 1 : -1,
		(matter) => matter,
	)
}

export async function getAllBlogPostIds() {
	return await getAllMarkdownFileIds(blogPostsDirectory)
}

export async function getBlogPostData(id) {
	return await getMarkdownData(blogPostsDirectory, id)
}
