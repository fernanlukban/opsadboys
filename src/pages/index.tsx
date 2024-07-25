import Head from 'next/head'
import path from 'path'

import { getSortedPostsData } from '@/lib/indexlib'
import { MarkdownPost, getMarkdownData } from '@/lib/markdown'
import IndexPage from '@/components/indexpage'

const readmePath = path.join('src', 'info')

type HomeProps = {
	readme: MarkdownPost,
	posts: MarkdownPost[]
}

export default function Home({ readme, posts }: HomeProps) {

          console.log(posts);
  return (
    <>
      <Head>
        <title>opsadboys</title>
      </Head>
      <main>
				<div className="readme" dangerouslySetInnerHTML={{ __html: readme.contentHtml ? readme.contentHtml : ""}} />
				<IndexPage pageName="opsadboys" posts={posts}>
          <p> please don't get lost here, these are remnants of a mind constantly in motion </p>
        </IndexPage>
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
