import Head from 'next/head'
import Image from 'next/image'

import { getSortedPostsData } from '@/lib/indexlib'
import { MarkdownPost } from '@/lib/markdown'
import PageTitle from '@/components/pagetitle'
import IndexPage from '@/components/indexpage'

type HomeProps = {
	posts: MarkdownPost[]
}

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <Head>
        <title>opsadboys</title>
      </Head>
      <main>
				<h1>Welcome</h1>
				<p>I am fern</p>
				<IndexPage pageName="recent posts" posts={posts} />
      </main>
    </>
  )
}

export async function getStaticProps() {
	const posts = await getSortedPostsData()
	return {
		props: {
			posts
		}
	}
}
