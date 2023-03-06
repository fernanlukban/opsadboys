import path from 'path'

import {getSortedMarkdown, getAllMarkdownFileIds, getMarkdownData} from '@/lib/markdown'

const recipePostsDirectory = path.join(process.cwd(), 'src', 'pages', 'recipes', 'posts');

export async function getSortedRecipePostsData() {
	return await getSortedMarkdown(
		recipePostsDirectory,
		(left: Object, right: Object) => left.date < right.date ? 1 : -1,
		(matter) => matter,
	)
}

export async function getAllRecipePostIds() {
	return await getAllMarkdownFileIds(recipePostsDirectory)
}

export async function getRecipePostData(id) {
	return await getMarkdownData(recipePostsDirectory, id)
}
