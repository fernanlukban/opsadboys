import IndexPage from '@/components/indexpage'
import { MarkdownPost } from '@/lib/markdown'

type MoviesPageProp = {
	posts: MarkdownPost[];
}

export default function Movies({ posts }: MoviesPageProp) {
	return (
		<>
			<IndexPage pageName="movies" posts={posts}>
				ya tbh i dont even know any movies
			</IndexPage>
		</>
	);
}
