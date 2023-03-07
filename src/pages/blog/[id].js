import { getAllBlogPostIds, getBlogPostData } from '@/lib/bloglib'
import PostTitle from '@/components/posttitle'

export default function BlogPost({ postData }) {
	return (
		<>
		<PostTitle date={postData.date} title={postData.title} />
		<div className="blogPost">
			<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
		</div>
		</>
	)
}

export async function getStaticPaths() {
	const paths = await getAllBlogPostIds()
	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps({ params }) {
	const postData = await getBlogPostData(params.id)

	return {
		props: {
			postData
		}
	}
}
