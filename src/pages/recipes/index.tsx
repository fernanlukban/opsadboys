import Link from 'next/link'

import { getSortedRecipePostsData } from '@/lib/recipelib'

function Recipe({ posts }) {
	return (
		<>
			<div>
				blog
			</div>
			<div>
				{posts.map(
					(post) => (
						<div>
							<Link href={`/blog/${post.id}`} className="hover:underline">{post.title}</Link>
							<p>{post.date}</p>
						</div>
					)
				)}
			</div>
		</>
	)
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
