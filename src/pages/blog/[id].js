import { getAllBlogPostIds, getBlogPostData } from '@/lib/bloglib'

export default function BlogPost({ postData }) {
	return (
		<>
			<h1>{postData.title}</h1>
			<h2>{postData.date}</h2>
			<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
