import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export function getAllMarkdownFileIds(directory) {
	const fileNames = fs.readdirSync(directory);
	return fileNames.map((fileName) => {
		return {
			params: {
				id: fileName.replace(/\.md$/, ''),
			}
		}
	});
}

type SortingFunction<Type> = (left: Type, right: Type) => int;
type PostProcessingFunction<Type> = (matter) => {Object};

export function getSortedMarkdown<Type>(directory: string, sorter: SortingFunction<Type>, postProcesser: PostProcessingFunction<Type>) {
	const fileNames = fs.readdirSync(directory);
	const allMarkdownData = fileNames.map(fileName => {
		const id = fileName.replace(/\.md$/, '');

		const fullPath = path.join(directory, fileName);
		const fileContents = fs.readFileSync(fullPath, 'utf-8');

		const matterResult = matter(fileContents);

		const processedMatterResult = postProcesser(matterResult);

		return {
			id,
			...processedMatterResult.data
		};
	});

	return allMarkdownData.sort(sorter);
}

export function getMarkdownData(directory: string, id: string) {
	const fullPath = path.join(directory, `${id}.md`)
	const fileContents = fs.readFileSync(fullPath, 'utf-8')

	const matterResult = matter(fileContents)

	return {
		id,
		...matterResult.data
	}
}
