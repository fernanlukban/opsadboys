import Head from 'next/head'
import Image from 'next/image'
import path from 'path'

import { getSortedPostsData } from '@/lib/indexlib'
import { MarkdownPost, getMarkdownData } from '@/lib/markdown'
import PageTitle from '@/components/pagetitle'
import IndexPage from '@/components/indexpage'

const readmePath = path.join('src', 'info')

type HomeProps = {
	readme: MarkdownPost,
	posts: MarkdownPost[]
}

export default function Home({ readme, posts }: HomeProps) {
  return (
    <>
      <Head>
        <title>opsadboys</title>
      </Head>
      <main>
				<div dangerouslySetInnerHTML={{ __html: readme.contentHtml ? readme.contentHtml : ""}} />
				<IndexPage pageName="recent posts" posts={posts} />
      </main>
    </>
  )
}

export async function getStaticProps() {
	const posts = await getSortedPostsData()
	const readme = await getMarkdownData(readmePath, "README")
	return {
		props: {
			readme,
			posts
		}
	}
}
