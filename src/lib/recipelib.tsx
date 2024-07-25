import path from 'path'

import {getSortedMarkdown, getAllMarkdownFileIds, getMarkdownData, MarkdownPost} from '@/lib/markdown'

const recipePostsDirectory = path.join(process.cwd(), 'posts', 'recipes');

export async function getSortedRecipePostsData() {
	return await getSortedMarkdown(
		recipePostsDirectory,
		(left: MarkdownPost, right: MarkdownPost) => left.date < right.date ? 1 : -1,
	)
}

export async function getAllRecipePostIds() {
	return await getAllMarkdownFileIds(recipePostsDirectory)
}

export async function getRecipePostData(id: string) {
	return await getMarkdownData(recipePostsDirectory, id)
}
