import path from 'path'

import {getSortedMarkdown, getAllMarkdownFileIds, getMarkdownData} from '@/lib/markdown'

const blogPostsDirectory = path.join(process.cwd(), 'src', 'pages', 'blog', 'posts');

export function getSortedBlogPostsData() {
	return getSortedMarkdown(
		blogPostsDirectory,
		(left, right) => left.date < right.date ? 1 : -1,
		(matter) => matter,
	)
}

export function getAllBlogPostIds() {
	return getAllMarkdownFileIds(blogPostsDirectory)
}

export function getBlogPostData(id) {
	return getMarkdownData(blogPostsDirectory, id)
}
