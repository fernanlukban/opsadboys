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
				id: fileName.replace(/\.md$/, ''),
			}
		}
	});
}

export interface MarkdownPost {
	id: string;
	date: Date;
	title: string;
	content?: string;
	contentHtml?: string;
}

type SortingFunction = (left: MarkdownPost, right: MarkdownPost) => number;

export async function getSortedMarkdown(directory: string, sorter: SortingFunction) {
	const fileNames = fs.readdirSync(directory);
	const allMarkdownData = fileNames.map(fileName => {
		const id = fileName.replace(/\.md$/, '');

		const fullPath = path.join(directory, fileName);
		const fileContents = fs.readFileSync(fullPath, 'utf-8');

		const matterResult = matter(fileContents);

		return {
			id,
			date: matterResult.data.date as Date,
			title: matterResult.data.title,
			...matterResult.data
		};
	});

	return allMarkdownData.sort(sorter);
}

export async function getMarkdownData(directory: string, id: string) {
	const fullPath = path.join(directory, `${id}.md`)
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
