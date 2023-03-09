import IndexPage from '@/components/indexpage'
import { MarkdownPost } from '@/lib/markdown'

type MusicPageProps = {
	posts: MarkdownPost[];
};

export default function MusicPage({ posts }: MusicPageProps) {
	return <IndexPage pageName="music" posts={posts} />
}
