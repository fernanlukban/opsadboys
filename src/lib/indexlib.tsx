import path from 'path'

import {getAllSortedMarkdown, MarkdownPost} from '@/lib/markdown'

const blogPostsDirectory = path.join(process.cwd(), 'src', 'pages', 'blog', 'posts');
const recipePostsDirectory = path.join(process.cwd(), 'src', 'pages', 'recipes', 'posts');

export async function getSortedPostsData() {
	return await getAllSortedMarkdown(
		[blogPostsDirectory, recipePostsDirectory],
		(left: MarkdownPost, right: MarkdownPost) => left.date < right.date ? 1 : -1,
	)
}

