import IndexPage from '@/components/indexpage'

export default function Music({ posts }) {
	return IndexPage({
		pageName: 'music',
		pagePath: 'music',
		posts
	});
}
