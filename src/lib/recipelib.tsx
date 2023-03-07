import path from 'path'

import {getSortedMarkdown, getAllMarkdownFileIds, getMarkdownData, MarkdownResult} from '@/lib/markdown'

const recipePostsDirectory = path.join(process.cwd(), 'src', 'pages', 'recipes', 'posts');

export async function getSortedRecipePostsData() {
	return await getSortedMarkdown(
		recipePostsDirectory,
		(left: MarkdownResult, right: MarkdownResult) => left.date < right.date ? 1 : -1,
	)
}

export async function getAllRecipePostIds() {
	return await getAllMarkdownFileIds(recipePostsDirectory)
}

export async function getRecipePostData(id: string) {
	return await getMarkdownData(recipePostsDirectory, id)
}
