import { getAllRecipePostIds, getRecipePostData } from '@/lib/recipelib'

export default function RecipePost({ postData }) {
	return (
		<>
			<h1>{postData.title}</h1>
			<h2>{postData.date}</h2>
			<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
		</>
	)
}

export async function getStaticPaths() {
	const paths = await getAllRecipePostIds()
	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps({ params }) {
	const postData = await getRecipePostData(params.id)

	return {
		props: {
			postData
		}
	}
}
