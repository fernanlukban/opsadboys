import fs from 'fs'
import path from 'path'
import { GrayMatterFile } from 'gray-matter'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export async function getAllMarkdownFileIds(directory: string) {
	const fileNames = fs.readdirSync(directory);
	return fileNames.map((fileName) => {
		return {
			params: {
				id: fileName.replace(/\.mdx$/, ''),
			}
		}
	});
}

export interface MarkdownPost {
	id: string;
	path: string;
	date: string;
	title: string;
	content?: string;
	contentHtml?: string;
}

type SortingFunction = (left: MarkdownPost, right: MarkdownPost) => number;

function defaultSortByDate(left: MarkdownPost, right: MarkdownPost) {
  return left.date < right.date ? 1 : -1;
}

export async function getSortedMarkdown(directory: string, sorter: SortingFunction = defaultSortByDate) {
	const fileNames = fs.readdirSync(directory);
	const allMarkdownData = fileNames.map(fileName => {
		const id = fileName.replace(/\.mdx$/, '');

		const fullPath = path.join(directory, fileName);
		const fileContents = fs.readFileSync(fullPath, 'utf-8');

		const matterResult = matter(fileContents);
		const result = {
			...matterResult.data,
			id,
			path: path.basename(directory.replace(/\/posts/, '')),
			date: JSON.parse(JSON.stringify(new Date(Date.parse(matterResult.data.date)))),
			title: matterResult.data.title
		};
    console.log(result);
    return result;
	});

	return allMarkdownData.sort(sorter);
}

export async function getAllSortedMarkdown(directories: string[], sorter: SortingFunction) {
	const allMarkdownData = directories.map(directory => getSortedMarkdown(directory, sorter))
  console.log(allMarkdownData);
	const allMarkdownDataAwaited = await Promise.all(allMarkdownData)
	const allMarkdownDataFlat = allMarkdownDataAwaited.flat()
  console.log(allMarkdownDataFlat);
	return allMarkdownDataFlat.sort(sorter);
}

export async function getMarkdownData(directory: string, id: string) {
	const fullPath = path.join(directory, `${id}.mdx`)
	const fileContents = fs.readFileSync(fullPath, 'utf-8')

	const matterResult = matter(fileContents)

	const processedContent = await remark().use(html).process(matterResult.content)

	const contentHtml = processedContent.toString()

	return {
		id,
		contentHtml,
		...matterResult.data
	}
}
