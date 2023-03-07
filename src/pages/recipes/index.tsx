import Link from 'next/link'

import IndexPage from '@/components/indexpage'
import { getSortedRecipePostsData } from '@/lib/recipelib'
import { MarkdownPost } from '@/lib/markdown'

type RecipePageProps = {
	posts: MarkdownPost[];
}

function RecipePage({ posts }: RecipePageProps) {
	return IndexPage({
		pageName: 'recipes',
		pagePath: 'recipes',
		posts
	});
}

export async function getStaticProps() {
	const posts = await getSortedRecipePostsData()
	return {
		props: {
			posts
		}
	}
}

export default RecipePage
