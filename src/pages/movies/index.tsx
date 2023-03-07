import IndexPage from '@/components/indexpage'

export default function Movies({ posts }) {
	return IndexPage({
		pageName: 'movies',
		pagePath: 'movies',
		posts
	});
}
