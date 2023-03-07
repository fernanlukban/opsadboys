import Link from 'next/link'

import IndexPage from '@/components/indexpage'
import { getSortedRecipePostsData } from '@/lib/recipelib'

function Recipe({ posts }) {
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

export default Recipe
